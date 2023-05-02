import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const HeaderDesktop = ({ activeLink }) => {
  return (
    <>
      <div className="hidden md:flex justify-between mx-10">
        <ul className="flex gap-6 text-2xl mr-6">
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/login">
              Login
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/register">
              Resgister
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-6 text-2xl ">
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/user-profile">
              <div className="flex items-center gap-2">
                <FaUserCircle size={22} />
                <span>Hi, hola</span>
              </div>
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/order-history">
              My Orders
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/logout">
              Logout
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/cart">
              <span className="flex gap-2 text-white relative hover:text-primary active:text-blue-500 ">
                Cart
                <FaShoppingCart size={20} />
                <p className="absolute top-[-1rem] right-[-1rem] font-medium text-white">
                  0
                </p>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderDesktop;
