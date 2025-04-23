import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ScrollRestoration, createHashRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";

import './css-base.css';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import UpdateFeed from './components/UpdateFeed';

// Dynamically find all projects and add their routes
const projects = require.context('./projects', true, /\.json$/).keys().map(projectPath => require(`./projects/${projectPath.replace('./', '')}`));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={
			<>
				{/* Invisible components */}
				<ScrollRestoration />
				
				{/* Website */}
				<Navbar />

				{/* Main content */}
				<Outlet />

				<Footer />
			</>
		}>

			{/* Homepage */}
			<Route index element={
				<div className="half-width">
					<Hero />
					<ProjectCards />
					<UpdateFeed filter="all" />
				</div>
			} />

			{/* Projects */}
      {
        projects.map(project => (
					console.log(`/${project.slug}`), // Debugging line to check the project object
          project.slug && (
            <Route path={`${project.slug}`} key={project.slug} element={
              <>
                {React.createElement(lazy(() => import(`./projects/${project.slug}/${project.app}.jsx`)))}
								<Outlet />
              </>
            } />
          )
        ))
      }
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
