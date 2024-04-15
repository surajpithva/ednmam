import React, { lazy, Suspense } from "react";
import { Header } from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Footer } from "./components/footer/footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cards from "./components/Cards/Cards";
import Shimmer from "./components/Shimmer/Shimmer";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppRouter;
