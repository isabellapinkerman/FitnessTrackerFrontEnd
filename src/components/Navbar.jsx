import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="Navbar">
        <h2>Fitness Tracker</h2>
        <div className="dropDownMenu">
          <Link to={"/"}>
            <button className="navButton">Home</button>
          </Link>
          <Link to={"/routines"}>
            <button className="navButton">Routines</button>
          </Link>
          <Link to={"/myRoutines"}>
            <button className="navButton">My Routines</button>
          </Link>
          <Link to={"/activities"}>
            <button className="navButton">Activities</button>
          </Link>
          <Link to={"/login"}>
            <button className="navButton">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="navButton">Register</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
