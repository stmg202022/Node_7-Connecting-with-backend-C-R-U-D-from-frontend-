import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./Component/addProduct";
import Products from "./Component/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddProduct />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
