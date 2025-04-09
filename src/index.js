import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from "react-router";

import './css-base.css';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import UpdateFeed from './components/UpdateFeed';

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Dynamically find all projects and add their routes
const projects = require.context('./projects', true, /\.json$/).keys().map(projectPath => require(`./projects/${projectPath.replace('./', '')}`));

root.render(
  <HashRouter>
    <React.StrictMode>
      <Navbar />

      {/* Routes */}
      <Routes>
        
        {/* Home page */}
        <Route path="/" element={
          <div className="half-width">
            <Hero />
            <ProjectCards />
            <UpdateFeed filter="all" />
          </div>
        } />
        
        {/* Project pages */}
        { 
          projects.map(project => ( project.slug && 
            <Route path={`/${project.slug}`} key={project.slug} element={
              <>
                { 
                  // Load Unity WebGL project and pass Unity Context
                  React.createElement(lazy(() => import(`./projects/${project.slug}/${project.app}.jsx`)))
                }
              </> 
            } /> 
          )) 
        }

      </Routes>
      <Footer />
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
