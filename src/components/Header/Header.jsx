import "./style.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo-enhanced.png";
import { useState } from "react";
import DesktopNav from "./DesktopNav.jsx";
import BurgerIcons from "./BurgerIcons.jsx";
import Overlay from "./Overlay.jsx";
import MobileNav from "./MobileNav.jsx";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" absolute bg-transparent text-white  z-50  top-0 w-full shadow-lg">
      <div className="max-w-[80%] mx-auto flex items-center md:justify-center justify-between px-4 py-4">
        <Link to="/" className="md:hidden z-10">
          <img src={logo} alt="La Vie Rose Logo" className="w-35 mx-10" />
        </Link>
        <Overlay />

        <DesktopNav />

        <BurgerIcons setIsOpen={setIsOpen} isOpen={isOpen} className="z-10" />
      </div>

      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Header;
