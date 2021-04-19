import React from "react";
import { Link } from "react-router-dom";

{
  /* This a header component and here we can navigate throught all main routes  */
}
const Header = () => {
  return (
    <nav>
      <img
        src="https://i.ibb.co/VBSK5pS/logo.png"
        alt="Triangle logo"
        className="header_logo"
      />
      <ul className="nav-links">
        <Link to={"/"} className="navStyle">
          <li>Home</li>
        </Link>
        <Link to={"/triangle"} className="navStyle">
          <li>Draw Triangle</li>
        </Link>
        <Link to={"/triangleContent"} className="navStyle">
          <li>Triangles</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Header;
