import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Search from "../src/pages/Search";
import Sports from "../src/pages/Sports";
import Athletes from "../src/pages/Athletes";
import Layout from "../src/pages/Layout";

import "./index.css";
import IconContext from "../src/context/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "buscar", element: <Search /> },
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
