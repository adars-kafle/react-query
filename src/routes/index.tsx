import { createBrowserRouter } from "react-router-dom";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Purchase from "../components/Purchase";
import UpdateProduct from "../components/ProductUpdate";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Products />,
    },
    {
        path: "/products/:id",
        element: <ProductDetails />,
    },
    {
        path: "/products/update/:id",
        element: <UpdateProduct />,
    },
    {
        path: "/buy/:id",
        element: <Purchase />,
    },
]);

export default Routes;
