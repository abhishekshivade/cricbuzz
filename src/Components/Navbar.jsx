import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Assets/cb_logo.svg";

function NavBar() {
  return (
    <div className="flex bg-emerald-600 h-16 text-white justify-between items-center">
      {/* <NavLink to="/"> */}
      {/* <Link> */}
      {/* <a href="/"> */}
        <img src={Logo} className="w-50 mx-5 w-1/12" alt="cb_logo" />
      {/* </a> */}
      {/* </Link> */}
      {/* </NavLink> */}
      <div className="flex gap-5 w-2/5 items-center">
        <NavLink
          to="/"
          className="p-1 hover:border-2 hover:rounded-xl hover:font-semibold"
        >
          Live Score
        </NavLink>
        <NavLink
          to="/teams"
          className="p-1 hover:border-2 hover:rounded-xl hover:font-semibold"
        >
          Teams
        </NavLink>
        <NavLink
          to="/stats"
          className="p-1 hover:border-2 hover:rounded-xl hover:font-semibold"
        >
          Stats
        </NavLink>
        <NavLink
          to="/about"
          className="p-1 hover:border-2 hover:rounded-xl hover:font-semibold"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="p-1 hover:border-2 hover:rounded-xl hover:font-semibold"
        >
          Contact Us
        </NavLink>
        <NavLink to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:w-7 hover:h-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
