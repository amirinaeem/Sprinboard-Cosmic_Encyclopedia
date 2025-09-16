import React from "react";
import { Link } from "react-router-dom";
import { celestialObjects } from "../data";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {celestialObjects.map((obj) => (
        <Link key={obj.id} to={`/${obj.id}`}>
          {obj.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
