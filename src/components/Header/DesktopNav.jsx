import logo from "../../assets/imgs/logo-enhanced.png";
import { Link, NavLink } from "react-router-dom";
function DesktopNav() {
  return (
    <ul className="hidden md:flex gap-10 text-[24px] font- items-center logo z-10">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/wedding-and-events">Wedding & Events</NavLink>
      </li>
      <li>
        <NavLink to="/rose-bouquet">Rose Bouquet</NavLink>
      </li>
      <li>
        <Link to="/">
          <img src={logo} alt="La Vie Rose Logo" className="w-35 mx-10" />
        </Link>
      </li>
      <li>
        <NavLink to="/decor-hire">Decor Hire</NavLink>
      </li>
      <li>
        <NavLink to="/our-story">Our Story</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact</NavLink>
      </li>
    </ul>
  );
}

export default DesktopNav;
