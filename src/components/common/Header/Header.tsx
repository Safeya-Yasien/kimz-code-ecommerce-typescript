import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import HeaderBasket from "./HeaderBasket";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 3; // Replace with dynamic state later

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 px-8 lg:px-16">
        <Link
          to={"/"}
          className="text-3xl font-bold text-white flex items-center"
        >
          <span>Our</span>
          <span className="ml-2 text-blue-500">eCom</span>
        </Link>

        <div className="flex items-center space-x-4 md:hidden">
          <HeaderBasket cartItemCount={cartItemCount} />
          <button
            className="text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-white hover:text-blue-400 transition">
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className="text-white hover:text-blue-400 transition"
          >
            Categories
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-white hover:text-blue-400 transition"
          >
            About
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-white hover:text-blue-400 transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="text-white hover:text-blue-400 transition"
          >
            Register
          </NavLink>
          <HeaderBasket cartItemCount={cartItemCount} />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
