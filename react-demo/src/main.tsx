import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Transaction } from "./Transaction.tsx";
import Content from "./Content.tsx";
import { Login } from "./Login.tsx";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Content />, index: true },
      {
        path: "/transaction",
        element: <Transaction />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </CookiesProvider>
);
