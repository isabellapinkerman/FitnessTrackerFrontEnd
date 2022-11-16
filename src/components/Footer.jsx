import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {

    return(
    <>
        <Outlet />
        <div id="Footer">
        <Link><div>Home</div></Link>
        <Link><div>Routines</div></Link>
        <Link><div>Activities</div></Link>
        <div>
            {localStorage.getItem('token') ? 
            <div>My Routines</div> : null }
        </div>
        </div>
    </>
    )
}

export default Footer;