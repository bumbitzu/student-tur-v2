# Express React SSR Template

A full-stack React application template with Server-Side Rendering (SSR) using Express.js. This template provides server-side rendering capabilities for Login and Dashboard components, perfect for authentication-based applications with better SEO and initial page load performance.

## Features

- ⚡ **Server-Side Rendering (SSR)** with Express.js
- ⚛️ **React 19** with modern features
- 🔄 **Hot reload** in development mode
- 🎯 **Component-based routing** with props injection
- 📦 **Babel transpilation** for modern JavaScript
- 🔧 **Development and production builds**
- 🚀 **Ready-to-deploy** structure

## Available Scripts

### `npm start`

Runs the React app in client-side development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run ssr`

Starts the Express SSR server on port 4001.\
Open [http://localhost:4001](http://localhost:4001) to view the server-rendered app.

### `npm run dev`

Runs both build watcher and SSR server concurrently in development mode.\
This will automatically rebuild and restart the server when files change.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

```
├── build/              # Production build output
├── public/             # Static assets
├── server/             # Express SSR server
│   ├── app.js         # Main server application with routing
│   └── index.js       # Server entry point with Babel setup
├── src/               # React source code
│   ├── Login.js       # Login page component
│   ├── Dashboard.js   # Dashboard component with user data
│   ├── index.js       # Client-side hydration logic
│   └── ...           # Other React components and styles
├── build.mjs          # Build watcher script
├── ssr.mjs           # SSR server restart script
└── package.json      # Dependencies and scripts
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development with SSR:**
   ```bash
   npm run dev
   ```
   This starts both the build watcher and SSR server.

3. **Visit the application:**
   - Login page: [http://localhost:4001/login](http://localhost:4001/login)
   - Dashboard: [http://localhost:4001/dashboard?userId=1](http://localhost:4001/dashboard?userId=1)

4. **Or start individual processes:**
   ```bash
   # Client-side development
   npm start
   
   # Server-side rendering
   npm run ssr
   ```

## How SSR Works

The template includes:

- **Express Server** (`server/app.js`): Handles SSR with component-specific routes
- **Babel Setup** (`server/index.js`): Transpiles React components for server-side execution
- **Props Injection**: Server can pass initial props to components for hydration
- **Static File Serving**: Serves built assets from the `build` directory

### Component Routes

The server supports authentication-based components with props:
- `/login` - Login component with error handling and redirect support
- `/dashboard` - Protected dashboard component with user data and analytics

### Authentication Flow

1. **Login Page** (`/login`): 
   - Handles authentication UI
   - Displays error messages via query parameters
   - Supports redirect URLs after successful login

2. **Dashboard Page** (`/dashboard`):
   - Protected route with user authentication simulation
   - Receives user data and dashboard content as props
   - Automatically redirects to login if user not found

## Development Workflow

1. **Make changes** to React components in `src/`
2. **Build watcher** automatically rebuilds when files change
3. **SSR server** restarts automatically to serve updated components
4. **Test the application:**
   - Visit [http://localhost:4001/login](http://localhost:4001/login) to see the login page
   - Visit [http://localhost:4001/dashboard?userId=1](http://localhost:4001/dashboard?userId=1) for dashboard
   - Try [http://localhost:4001/login?error=1](http://localhost:4001/login?error=1) to see error handling

## API Endpoints

The template includes sample API endpoints:
- `/api/dashboard-data` - Returns dynamic dashboard data with timestamp

## Example Usage

### Testing the Authentication Flow

1. **Visit Login with Error**: `http://localhost:4001/login?error=1`
   - Shows "Invalid credentials" message
   - Demonstrates server-side prop injection

2. **Visit Dashboard**: `http://localhost:4001/dashboard?userId=1`
   - Shows user data and dashboard analytics
   - Demonstrates protected route with data fetching

3. **Invalid User**: `http://localhost:4001/dashboard?userId=999`
   - Automatically redirects to login page
   - Demonstrates authentication protection

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the SSR server:
   ```bash
   npm run ssr
   ```

The app will be served with server-side rendering for better SEO and initial load performance.

## Technologies Used

- **React 19** - UI framework
- **Express.js** - Web server framework
- **Babel** - JavaScript transpiler
- **React Scripts** - Build tooling
- **Nodemon** - Development file watcher
- **Concurrently** - Run multiple commands simultaneously

## Learn More

To learn more about the technologies used:

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [Server-Side Rendering Guide](https://reactjs.org/docs/react-dom-server.html)
