import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

function handleClick(){
  localStorage.removeItem("token")
  navigate('/')
  location.reload()
}

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
          <Link to={"/activities"}>
            <button className="navButton">Activities</button>
          </Link>
          <div>
          {!localStorage.getItem('token') ? (
            <div><Link to={"/login"}>
            <button className="navButton">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="navButton">Register</button>
          </Link></div>
          ) : (
            <div>
              <Link to={"/myRoutines"}>
            <button className="navButton">My Routines</button>
          </Link>
                <button className="navButton" onClick={handleClick}>LogOut</button>
              </div>
          )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
