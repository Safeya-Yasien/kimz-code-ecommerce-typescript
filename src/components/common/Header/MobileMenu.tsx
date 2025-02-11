import { NavLink } from "react-router";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 space-y-3 shadow-lg">
      <NavLink
        to="/"
        className="block text-white hover:text-blue-400 transition"
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/categories"
        className="block text-white hover:text-blue-400 transition"
        onClick={() => setIsOpen(false)}
      >
        Categories
      </NavLink>
      <NavLink
        to="/about-us"
        className="block text-white hover:text-blue-400 transition"
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink>
      <hr className="border-gray-600" />
      <NavLink
        to="/login"
        className="block text-white hover:text-blue-400 transition"
        onClick={() => setIsOpen(false)}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="block text-white hover:text-blue-400 transition"
        onClick={() => setIsOpen(false)}
      >
        Register
      </NavLink>
    </nav>
  );
};

export default MobileMenu;
