import { createBrowserRouter, RouterProvider } from "react-router";

// layouts
import { MainLayout, ProfileLayout } from "@/layouts";

// components
// import { LottieHandler, PageSuspenseFallback } from "@components/feedback";

// pages
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Wishlist from "@/pages/Wishlist";
import Categories from "@/pages/Categories";
import Products from "@/pages/Products";
import AboutUs from "@/pages/AboutUs";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Account from "@/pages/Account";
import Orders from "@/pages/Orders";

// error
import Error from "@/pages/Error";

// protect route
// import ProtectedRoute from "@components/Auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Account />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
