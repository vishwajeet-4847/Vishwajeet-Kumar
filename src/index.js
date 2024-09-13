import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <Contact /> },
//   { path: "/projects", element: <Projects /> },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>

  <App />
 
</React.StrictMode>
);
