// Express server with React Server-Side Rendering (SSR)
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server'; 
import Home from '../src/Home.jsx';
import seo from '../src/components/seo.config.js';

const app = express();
const PORT = 4001;

// Serve static files from the build directory
app.use(express.static(path.resolve(__dirname, '..', 'build')));

/**
 * Helper function to render a React component with props on the server
 * This function handles the SSR process by:
 * 1. Reading the built HTML template
 * 2. Rendering the React component to string
 * 3. Injecting props for client-side hydration
 * 4. Replacing the root div with the rendered component
 */
function renderComponentWithProps(component, props = {}) {
    return (req, res) => {
        // Read the built HTML template
        fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Some error happened');
            }
            
            // Clone the component with the provided props
            const componentWithProps = React.cloneElement(component, props);
            // Render the React component to an HTML string
            const stringComponent = ReactDOMServer.renderToString(componentWithProps);
            
            // Inject props into HTML for client-side hydration
            const propsScript = `<script>window.__INITIAL_PROPS__ = ${JSON.stringify(props)};</script>`;

            // Prepare SEO head tags
            const jsonLd = `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`;
            const headTags = [
                `<meta name="description" content="${seo.description}"/>`,
                `<meta property="og:title" content="${seo.title}"/>`,
                `<meta property="og:description" content="${seo.description}"/>`,
                `<meta property="og:type" content="${seo.ogType}"/>`,
                `<meta property="og:url" content="${seo.url}"/>`,
                `<meta property="og:image" content="${seo.image}"/>`,
                `<meta name="twitter:card" content="${seo.twitterCard}"/>`,
                `<meta name="twitter:title" content="${seo.title}"/>`,
                `<meta name="twitter:description" content="${seo.description}"/>`,
                `<meta name="twitter:image" content="${seo.image}"/>`,
                jsonLd,
            ].join('\n');

            // Replace title if present and inject other head tags + props
            let htmlWithHead = data.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);
            htmlWithHead = htmlWithHead.replace('</head>', `${headTags}\n${propsScript}</head>`);
            
            // Replace the empty root div with the server-rendered component
            return res.send(htmlWithHead.replace('<div id="root"></div>', `<div id="root">${stringComponent}</div>`));
        });
    };
}


// === ROUTES WITH SERVER-SIDE DATA ===


// Dashboard route - protected route with user data
app.get('/', (req, res) => {

    renderComponentWithProps(<Home/>)(req, res);
});

// === API ENDPOINTS ===

// Start the server and display available routes
app.listen(PORT, () => {
    console.log(`🚀 SSR Server is listening on port ${PORT}`);
});