import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link to={"/"} className="text-2xl font-bold text-blue-500">
              Our eCom
            </Link>
            <p className="mt-2 text-gray-400">
              Your go-to place for amazing products at great prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/" className="hover:text-blue-400 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className="hover:text-blue-400 transition"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="hover:text-blue-400 transition"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Our eCom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
