import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src=" " alt="" />
      <li className="navitems">
        <a href="#">Home</a>
      </li>
      <li className="navitems">
        <a href="#">About</a>
      </li>
      <li className="navitems">
        <a href="#">Games</a>
      </li>
      <li className="navitems">
        <a href="#">Competition</a>
      </li>
      <button className="btn">Register</button>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Navbar;
