import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F1582A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle} exact>
        About
      </NavLink>
    </nav>
  );
};
export default Header;
