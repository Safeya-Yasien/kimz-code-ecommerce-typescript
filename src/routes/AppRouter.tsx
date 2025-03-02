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

// components
import { PageSuspenseFallback } from "@/components/feedback";

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
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageSuspenseFallback>
            <Wishlist />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "categories",
        element: (
          <PageSuspenseFallback>
            <Categories />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
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
        element: (
          <PageSuspenseFallback>
            <AboutUs />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
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
