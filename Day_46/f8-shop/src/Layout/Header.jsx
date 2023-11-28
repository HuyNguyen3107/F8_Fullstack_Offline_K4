import React from "react";
import myPicture from "../assets/images/idolkorea.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="avatar">
        <Link to={`/`}>
          <img src={myPicture} alt="" />
        </Link>
      </div>
      <div className="cart-icon">
        <Link to={"/cart"}>
          <i className="pi pi-shopping-bag"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
