import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./pages/UserContext";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Sid",
    email: "sid123@gmail.com",
  });
  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      <Header />

      <Outlet />
      <Footer />
    </UserContext.Provider>
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
