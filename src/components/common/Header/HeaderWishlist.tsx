import { NavLink } from "react-router";
import { Heart } from "lucide-react";

const HeaderWishlist = () => {
  const wishlistItemCount = 3;

  return (
    <NavLink
      to="/wishlist"
      className="relative text-white hover:text-blue-400 transition"
    >
      <Heart size={26} />
      {wishlistItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {wishlistItemCount}
        </span>
      )}
    </NavLink>
  );
};

export default HeaderWishlist;
