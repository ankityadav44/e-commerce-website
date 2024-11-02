import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Store from "../components/Store/Store.jsx";
import Buy from "../components/Buy/Buy.jsx";
import Bag from "../components/Bag.jsx/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import LoginOrSignup from "../components/Login0rSignup/LoginOrSignup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/men", element: <Store /> },
      { path: "/women", element: <Store /> },
      { path: "/kids", element: <Store /> },
      { path: "/home&living", element: <Store /> },
      { path: "/beauty", element: <Store /> },
      { path: "/studio", element: <Store /> },
      { path: "/buy", element: <Buy /> },
      { path: "/bag", element: <Bag /> },
      { path: "/login", element: <LoginOrSignup /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={myntraStore}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
