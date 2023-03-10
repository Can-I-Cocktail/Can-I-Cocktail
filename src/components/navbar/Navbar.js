import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Can I Cocktail?</h1>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;