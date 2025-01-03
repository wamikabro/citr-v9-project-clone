import { createRoot } from "react-dom/client";
import { CartContext } from "./contexts";
import { StrictMode } from "react";
import { RouterProvider, createRoute, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Route } from "./routes/__root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createRouter({routeTree});
const queryClient = new QueryClient();

const App = () => {

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>      
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </StrictMode>    
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
