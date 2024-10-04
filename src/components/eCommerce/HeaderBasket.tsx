import BasketIcon from "../../assets/svg/cart.svg?react";

const HeaderBasket = () => {
  return (
    <div className="relative">
      <BasketIcon />
      <div
        className="absolute bg-blue-600 w-5 h-5 rounded-full flex items-center justify-center 
        text-white font-semibold -top-3 -right-3"
      >
        1
      </div>
    </div>
  );
};

export default HeaderBasket;
