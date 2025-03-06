import { TProduct } from "@/types";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { actPlaceOrder } from "@/store/orders/ordersSlice";
import { clearCartAfterPlaceOrder } from "@/store/cart/cartSlice";

type TCartSubtotalPriceProps = {
  products: TProduct[];
  userAccessToken: string | null;
};

const CartSubtotalPrice = ({
  products,
  userAccessToken,
}: TCartSubtotalPriceProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    return quantity && typeof quantity === "number"
      ? accumulator + price * quantity
      : accumulator;
  }, 0);

  const handleConfirmOrder = () => {
    setLoading(true);
    setError(null);

    dispatch(actPlaceOrder(subtotal))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowConfirmModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 border-t mt-6 text-lg font-semibold bg-white rounded-lg shadow-sm">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      {/* Show error message if order fails */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Show confirm order button only if user is authenticated */}
      {userAccessToken && (
        <button
          className="mt-4 w-full bg-green-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-green-600 transition"
          onClick={() => setShowConfirmModal(true)}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Confirm Order"}
        </button>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Your Order</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to place this order?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                onClick={handleConfirmOrder}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSubtotalPrice;
