/**
 * Server entry point for React SSR
 * This file configures Babel to transpile React components for server-side rendering
 */

// Ignore CSS imports on the server side since CSS is handled by the client
require(`ignore-styles`);

// Configure Babel to transpile ES6+ and React JSX for Node.js
require('@babel/register')({
    ignore: [/(node_modules)/], // Ignore node_modules directory (was node_module, now node_modules)
    presets: [
        // Transpile modern JavaScript for current Node.js version
        ['@babel/preset-env', { targets: { node: 'current' } }],
        // Transpile React JSX with automatic runtime (React 17+)
        ['@babel/preset-react', { runtime: 'automatic' }]
    ],
});

// Start the Express server with SSR capabilities
require("./app");