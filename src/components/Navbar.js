import React, { useState } from "react";
import Logo from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navbar = ({ links }) => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <nav className=" shadow-md w-full top-0 left-0 mb-20">
        <div className="navbar-container md:flex justify-between  bg-yellow-50  items-center   text-yellow-900 py-4 md:px-10 px-7 ">
          <div className="navbar-left cursor-pointer shrink-0">
            <Logo className="text-5xl" />
            <sub className="font-bold ">Expensify</sub>
          </div>

          <div
            onClick={() => {
              setOpen(!open);
            }}
            className=" text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </div>

          <div
            className={`navbar-right cursor-pointer md:static absolute bg-yellow-50 left-0 md:z-auto z-[999] md:w-auto w-full md:pl-0 pl-9
           transition-all duration-500 ease-in ${
             open ? "opacity-100 top-[84px]" : "top-[-490px]"
           } md:opacity-100 `}
          >
            <div className="navbar-navigation">
              <ul className="md:flex md:items-center md:pb-0 pb-4 sh">
                {links.map((link) => {
                  return (
                    <li
                      key={link.name}
                      className="md:ml-8 text-xl md:my-0  hover:bg-amber-100 md:hover:bg-yellow-50 rounded-3xl pl-4 py-4 md:py-0 md:mr-0 mr-6"
                    >
                      <NavLink
                        to={link.link}
                        className="hover:text-orange-600 duration-500"
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  );
                })}
                <div className="navbar-login-signup shrink-0">
                  <button
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className=" bg-orange-800 text-white py-2 px-6 rounded md:ml-8 hover:bg-orange-600 duration-500 shadow md:my-0 my-7 "
                  >
                    Get Started !
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
