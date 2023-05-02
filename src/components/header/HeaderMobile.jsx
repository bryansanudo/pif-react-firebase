import { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const HeaderMobile = ({ activeLink }) => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        onClick={hideMenu}
        className={
          showMenu
            ? "absolute top-0 right-0 w-full h-[100vh] bg-[rgba(0,0,0,0.5)] transition-all duration-700"
            : ""
        }
      />
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
        <ul className="flex flex-col gap-6 text-3xl mr-6" onClick={hideMenu}>
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
    </>
  );
};

export default HeaderMobile;
