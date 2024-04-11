import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import {
  RouterProvider
} from "react-router-dom";
import router from "./Router/router.jsx";
import {AuthProvider} from "./contects/AuthProvider.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);