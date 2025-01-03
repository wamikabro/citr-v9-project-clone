import { createRoot } from "react-dom/client";
import { CartContext } from "./contexts";
import { StrictMode } from "react";
import { RouterProvider, createRoute, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Route } from "./routes/__root";

const router = createRouter({routeTree});

const App = () => {

  return (
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>    
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
