import { Heading } from "@/components/common";
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerece";
import { Loading, LottieHandler } from "@/components/feedback";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { products, removeItemHandler, changeQuantityHandler, loading, error } =
    useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Your Cart" />

      <Loading error={error} status={loading} type="cart">
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
          <LottieHandler
            type="empty"
            message="Your cart is empty. Start shopping now!"
          />
        )}
      </Loading>
    </div>
  );
};
export default Cart;
