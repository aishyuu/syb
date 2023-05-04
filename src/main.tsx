import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product/index.tsx";
import Deal from "./pages/Deal/index.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/product/:slug",
    element: <Product />
  },
  {
    path: "/deal/:slug",
    element: <Deal />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
