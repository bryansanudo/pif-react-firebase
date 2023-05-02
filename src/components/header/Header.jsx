import { Link } from "react-router-dom";

import HeaderDesktop from "@/components/header/HeaderDesktop";
import HeaderMobile from "@/components/header/HeaderMobile";

const activeLink = ({ isActive }) =>
  isActive
    ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-white"
    : ``;

const Header = () => {
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
          {/* desktop */}

          <HeaderDesktop activeLink={activeLink} />
          <HeaderMobile activeLink={activeLink} />

          {/* mobile */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
