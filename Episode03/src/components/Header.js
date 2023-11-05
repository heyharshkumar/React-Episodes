import { useState } from "react";

const Tittle = () => (
  <a href="/">
    <img
      className="logo"
      alt="pic"
      src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
    ></img>
  </a>
);

// Composing component
const Header = () => {
  // const [tittle, Settittle] = useState("Food Villa");
  return (
    <div className="header">
      <Tittle />

      {/* this is for understanding the useState varible */}
      {/* <h1>{tittle}</h1>
      <button
        onClick={function () {
          Settittle("new Food");
        }}
      >
        searchTxt
      </button> */}

      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
