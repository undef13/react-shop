import React from "react";

import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div>
      <span>React shop | </span>
      <Link to="/cart"><span>5 items ($210)</span></ Link>
    </div>
  )
}

export default Header;