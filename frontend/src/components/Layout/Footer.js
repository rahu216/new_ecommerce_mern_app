import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">All Copyright reserved @Copyright</h3>
      <p className="text-center mx-3 ">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/policy">Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
