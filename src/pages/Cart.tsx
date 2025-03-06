import { Heading } from "@/components/common";
import { CartItemList, CartSubtotalPrice } from "@/components/eCommerece";
import { Loading, LottieHandler } from "@/components/feedback";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const {
    products,
    removeItemHandler,
    changeQuantityHandler,
    loading,
    error,
    userAccessToken,
    placeOrderStatus,
  } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading title="Your Cart" />

      <Loading error={error} status={loading} type="cart">
        {products.length ? (
          <div className="mt-10 space-y-6 max-w-3xl mx-auto">
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />

            {/* Pass products to calculate subtotal & handle order confirmation */}
            <CartSubtotalPrice
              products={products}
              userAccessToken={userAccessToken}
            />
          </div>
        ) : placeOrderStatus === "succeeded" ? (
          <LottieHandler
            type="success"
            message="Your cart is empty. Start shopping now!"
          />
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
