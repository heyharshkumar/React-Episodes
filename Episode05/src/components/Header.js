import { useState } from "react";
import { Link } from "react-router-dom";
import contact from "./Contact";
import Logo from "../assets/img/foodie-removebg-preview.png";

const Tittle = () => (
  <a href="/">
    <img className="logo" alt="pic" src={Logo} />
  </a>
);

const Header = () => {
  const [isloggedIn, setisloggedIn] = useState(false);
  return (
    <div className="header">
      <Tittle />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME </Link>
          </li>

          <li>
            <Link to="/about">ABOUT </Link>
          </li>

          <li>
            <Link to="/contact">CONTACT </Link>
          </li>

          <li>CART</li>
        </ul>
      </div>
      {isloggedIn ? (
        <button onClick={() => setisloggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setisloggedIn(true)}>LogOut</button>
      )}
      ;
    </div>
  );
};

export default Header;
