import { createHashRouter, RouterProvider } from "react-router-dom";
import DetailProduct from "./components/DetailPage/DetailProduct";
import Auth, { action as authAction } from "./pages/Auth";
import Cart from "./pages/Cart";
import HomePage from "./pages/Home";
import RootPage from "./pages/Root";
import ShopPage from "./pages/Shop";
import Error from "./pages/Error";
import { loadSignIn } from "./redux-store/auth";
import CheckOut from "./pages/CheckOut";
function App() {
  const router = createHashRouter([
    {
      path: "/",
      id: "root",
      element: <RootPage />,
      loader: loadSignIn,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "detail",
          element: <DetailProduct />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        { path: "checkout", element: <CheckOut /> },
        {
          path: "auth",
          element: <Auth />,
          action: authAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
