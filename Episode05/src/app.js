import React, { Component } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Body from "./components/Boby.js";
import About from "./components/About";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserClass from "./components/UserClass.js";

const Applayout = () => {
  return (
    <>
      <Header />
      {/* if path is / */}
      {/* <Body /> */}
      {/* if path is /about */}
      {/* <About /> */}
      {/* if path is /contact */}
      {/* <Contact /> */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "userclass",
            element: <UserClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// const Applayout = () => {
//   return (
//     <>
//       <Header />
//       <Body />
//       <Footer />
//     </>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Applayout />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
