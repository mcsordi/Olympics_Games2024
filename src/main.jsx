import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Sports from "../src/pages/Sports";
import Athletes from "./pages/Athletes";
import Layout from "../src/pages/Layout";

import "./index.css";
import IconContext from "../src/context/context";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "esportes", element: <Sports /> },
      { path: "atletas", element: <Athletes /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {
      <IconContext>
        <RouterProvider router={router} />
      </IconContext>
    }
  </StrictMode>
);
