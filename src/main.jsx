import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut';
import Home from './pages/Home/Home';
import ProjectDetails from './pages/Projects/ProjectDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects/:name",
        element: <ProjectDetails></ProjectDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
      </HelmetProvider> 
  </React.StrictMode>,
)
