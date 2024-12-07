import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/auth/signin";
import Header from "./components/Header";
import { Box } from "@kuma-ui/core";
import Signup from "./pages/auth/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Box h="calc(100vh - 50px)" pt={50}>
      <RouterProvider router={router} />
    </Box>
  </StrictMode>
);
