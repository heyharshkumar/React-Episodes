import React, { Component } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Body from "./components/Boby.js";

// Header
//     -Logo(left side)
//     -Nav list (rigth side)
//     -Cart

// Body
//    - Search Bar
//    - RestrauntList
//         -RestrauntCard (many cards)
//            -Image
//            -Name
//            -Rating
//            -Cuisines

// Footer

// }

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
