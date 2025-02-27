import { Heading } from "@/components/common";
import { CartItem, CartSubtotalPrice } from "@/components/eCommerece";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading>Your Cart</Heading>

      {/* Cart Items List */}
      <div className="mt-10 space-y-6 max-w-3xl mx-auto">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

        <CartSubtotalPrice />
      </div>
    </div>
  );
};
export default Cart;
