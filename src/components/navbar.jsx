import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Counters{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <a className="navbar-brand" href="#">
        <h3 className="navbar-brand ">COUNTER APP</h3>
      </a>
      <div></div>
    </nav>
  );
};

export default Navbar;
