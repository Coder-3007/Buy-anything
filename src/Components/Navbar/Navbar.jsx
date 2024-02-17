import React, { useState } from "react";
import "./Navbar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navlogo">
        <img className="logo" src={logo} alt="" />
        <p>BUY ANYTHING</p>
      </div>

      <ul className="navmenu">
        {/* using onclick function through usestate */}
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {/* applying ternary operator */}
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navlogincart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/Cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="navcartcount">0</div>
      </div>
    </div>
  );
};

export default Navbar;
