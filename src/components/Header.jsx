import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const activeLink = ({ isActive }) =>
  isActive
    ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-white"
    : ``;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const hideMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-black w-full text-white">
      <div className="w-full h-24 max-w-[1200px] mx-auto p-4 flex justify-between items-center ">
        <div className="text-white w-[20%]">
          <Link to="/">
            <h2>
              e<span className="text-primary">Shop</span>.
            </h2>
          </Link>
        </div>

        <nav className="w-[80%] ">
          <div
            onClick={hideMenu}
            className={
              showMenu
                ? "absolute top-0 right-0 w-full h-[100vh] bg-[rgba(0,0,0,0.5)] transition-all duration-700"
                : ""
            }
          />
          {/* desktop */}

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

          {/* mobile */}
          <div className="absolute right-6 top-6 md:hidden ">
            <HiOutlineMenuAlt3
              className="text-5xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div
            className={
              showMenu
                ? "flex flex-col p-8 fixed inset-0 right-1/2 bg-black/40 backdrop-blur-xl gap-8 "
                : "hidden"
            }
          >
            <ul
              className="flex flex-col gap-6 text-3xl mr-6"
              onClick={hideMenu}
            >
              <li className="flex justify-between items-center">
                <Link to="/">
                  <h2>
                    e<span className="text-orange-500">Shop</span>.
                  </h2>
                </Link>
              </li>
              <NavLink className={activeLink} to="/">
                <li className="hover:text-primary  duration-400">Home</li>
              </NavLink>
              <NavLink className={activeLink} to="/contact">
                <li className="hover:text-primary  duration-400">Contact Us</li>
              </NavLink>
              <NavLink className={activeLink} to="/login">
                <li className="hover:text-primary  duration-400">Login</li>
              </NavLink>
              <NavLink className={activeLink} to="/register">
                <li className="hover:text-primary  duration-400">Resgister</li>
              </NavLink>
            </ul>
            <ul className="flex flex-col gap-6 text-2xl" onClick={hideMenu}>
              <NavLink className={activeLink} to="/user-profile">
                <li className="hover:text-primary  duration-400">
                  <div className="flex items-center gap-2">
                    <FaUserCircle size={22} />
                    <span>Hi, hola</span>
                  </div>
                </li>
              </NavLink>
              <NavLink className={activeLink} to="/order-history">
                <li className="hover:text-primary  duration-400">My Orders</li>
              </NavLink>
              <NavLink className={activeLink} to="/logout">
                <li className="hover:text-primary  duration-400">Logout</li>
              </NavLink>
              <li className="hover:text-primary  duration-400">
                <NavLink className={activeLink} to="/cart">
                  <span className="flex gap-2 text-white relative hover:text-primary active:text-blue-500 ">
                    Cart
                    <FaShoppingCart size={20} />
                    <p className="absolute top-[-1rem] left-[6rem] font-medium text-white">
                      0
                    </p>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
