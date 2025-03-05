import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import HeaderBasket from "./HeaderBasket";
import HeaderWishlist from "./HeaderWishlist";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { authLogout } from "@/store/auth/authSlice";
import { actGetWishlist } from "@/store/wishlist/wishlistSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { accessToken, user } = useAppSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(authLogout());
    navigate("/login");
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("productsIds"));
    }
  }, [dispatch, accessToken]);

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
          <HeaderBasket />
          <HeaderWishlist />
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
          {accessToken ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="text-white font-medium hover:text-blue-400 transition"
              >
                {user?.firstName} {user?.lastName}
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-500 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
          <HeaderBasket />
          <HeaderWishlist />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
