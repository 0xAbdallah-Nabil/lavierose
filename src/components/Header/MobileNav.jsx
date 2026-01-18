import { Link, NavLink } from "react-router-dom";
function MobileNav({ setIsOpen }) {
  return (
    <div className="md:hidden bg-black border-t border-gray-700 z-50 relative">
      <ul className="flex flex-col items-center gap-6 py-6 text-lg">
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/service-package">Service Package</NavLink>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/decor-hire">Decor Hire</NavLink>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/photo-gallery">Photo Gallery</NavLink>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
