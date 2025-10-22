import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';

// Import necessary components for client-side routing
import Home from './Home.jsx';

// Get props injected by the server during SSR
const initialProps = window.__INITIAL_PROPS__ || {};

/**
 * Determines which component to render based on the current route
 * This function handles client-side routing for hydration
 * Modify this function to include all necessary routes
 */
function getComponentForRoute() {
    const path = window.location.pathname;
    
    switch (path) {
        case '/':
            return <Home {...initialProps} />;
        default:
    }
}

// Hydrate the correct component for the current route
// This ensures the client-side React app matches the server-rendered HTML
hydrateRoot(document.getElementById('root'), getComponentForRoute());