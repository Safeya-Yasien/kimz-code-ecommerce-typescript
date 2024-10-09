import MainLayout from "@layouts/MainLayout/MainLayout";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Contact from "@pages/Contact";
import Error from "@pages/Error";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Products from "@pages/Products";
import Register from "@pages/Register";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";

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
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }: LoaderFunctionArgs) => {
          const { prefix } = params;
          if (typeof prefix !== "string" || !/^[a-z]+$/i.test(prefix)) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }

          return true;
        },
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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
