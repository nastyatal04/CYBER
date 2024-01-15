import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { ModernCryptoSelling } from "./pages/ModernCryptoSelling";

//https://gist.github.com/andreynaz4renko/50c214909e09712a6f8c1a6399dbfcde
//https://www.figma.com/file/7ya1IwVsKa27xjtOq9kfKZ/Modern-Crypto-Selling-Website-UI-Design-(Community)?node-id=0%3A33&mode=dev
//https://www.figma.com/community/tag/web/files/figma/free
//https://www.figma.com/file/OBB1UZzQtFqNuc8lWCQn7R/Real-Estate-Landing-page-(Community)?node-id=44%3A53&mode=dev

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ModernCryptoSelling />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
