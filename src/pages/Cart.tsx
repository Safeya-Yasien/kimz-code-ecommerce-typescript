import { Heading } from "@/components/common";
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerece";
import { Loading } from "@/components/feedback";
import useCart from "@/hooks/useCart";

import { Link } from "react-router";

const Cart = () => {
  const { products, removeItemHandler, changeQuantityHandler, loading, error } =
    useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Your Cart" />

      <Loading error={error} status={loading}>
        {/* Cart Items List */}
        {products.length ? (
          <div className="mt-10 space-y-6 max-w-3xl mx-auto">
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />

            <CartSubtotalPrice products={products} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            {/* Message */}
            <h2 className="text-xl font-semibold text-gray-700">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mt-2">
              Looks like you haven’t added anything yet.
            </p>

            {/* Button to Browse Products */}
            <Link
              to="/categories"
              className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </Loading>
    </div>
  );
};
export default Cart;
