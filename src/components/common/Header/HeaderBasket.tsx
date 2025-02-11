import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";

interface BasketProps {
  cartItemCount: number;
}

const Basket = ({ cartItemCount }: BasketProps) => {
  return (
    <NavLink
      to="/cart"
      className="relative text-white hover:text-blue-400 transition"
    >
      <ShoppingCart size={26} />
      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartItemCount}
        </span>
      )}
    </NavLink>
  );
};

export default Basket;
