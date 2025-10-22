// Express server with React Server-Side Rendering (SSR)
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server'; 
import Login from '../src/Login.js';
import Dashboard from '../src/Dashboard.js';

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
            const htmlWithProps = data.replace('</head>', `${propsScript}</head>`);
            
            // Replace the empty root div with the server-rendered component
            return res.send(htmlWithProps.replace('<div id="root"></div>', `<div id="root">${stringComponent}</div>`));
        });
    };
}

/**
 * Mock database/API simulation
 * In a real application, this would be replaced with actual database calls
 * or external API requests
 */
const mockDatabase = {
    users: [
        { id: 1, name: 'John Doe', role: 'admin' },
        { id: 2, name: 'Jane Smith', role: 'user' }
    ],
    dashboardData: [
        'Sales: $15,000',
        'New Users: 245',
        'Orders: 89',
        'Revenue Growth: +12%'
    ]
};

// === ROUTES WITH SERVER-SIDE DATA ===


// Login route - handles authentication UI with error messages
app.get('/login', (req, res) => {
    const loginProps = {
        message: req.query.error ? 'Invalid credentials' : null,
        redirectUrl: req.query.redirect || '/dashboard'
    };
    renderComponentWithProps(<Login />, loginProps)(req, res);
});

// Dashboard route - protected route with user data
app.get('/dashboard', (req, res) => {
    // Simulate authentication - in reality you would verify token/session
    const userId = req.query.userId || 1;
    const user = mockDatabase.users.find(u => u.id === userId);
    
    // Redirect to login if user not found
    if (!user) {
        return res.redirect('/login?error=1');
    }
    
    // Prepare props with user data and dashboard content
    const dashboardProps = {
        initialData: mockDatabase.dashboardData,
        user: user
    };
    
    renderComponentWithProps(<Dashboard />, dashboardProps)(req, res);
});

// === API ENDPOINTS ===

// API endpoint for dynamic dashboard data
app.get('/api/dashboard-data', (req, res) => {
    res.json({
        data: mockDatabase.dashboardData,
        timestamp: new Date().toISOString()
    });
});

// Start the server and display available routes
app.listen(PORT, () => {
    console.log(`🚀 SSR Server is listening on port ${PORT}`);
});