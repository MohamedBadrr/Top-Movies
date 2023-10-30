import React from 'react';
// fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css"
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//jquery
import 'jquery/dist/jquery.min.js'
import './index.css';
import { router } from './Router';
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)



