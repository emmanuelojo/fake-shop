import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductList from "../containers/ProductList";
import ProductDetails from "../containers/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <ProductList />,
            },
            {
                path: "products/:productId",
                element: <ProductDetails />,
            },
        ],
    },
]);
