import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const ProfileLayout = lazy(
  () => import("@/layouts/ProfileLayout/ProfileLayout")
);

// pages
const Home = lazy(() => import("@/pages/Home"));
const Cart = lazy(() => import("@/pages/Cart"));
const Wishlist = lazy(() => import("@/pages/Wishlist"));
const Categories = lazy(() => import("@/pages/Categories"));
const Products = lazy(() => import("@/pages/Products"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Account = lazy(() => import("@/pages/Account"));
const Orders = lazy(() => import("@/pages/Orders"));

// error
import Error from "@/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="loading please wait..">
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading please wait..">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback="loading please wait..">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback="loading please wait..">
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback="loading please wait..">
            <Categories />
          </Suspense>
        ),
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
              status: 400,
              statusText: "Category not found",
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
