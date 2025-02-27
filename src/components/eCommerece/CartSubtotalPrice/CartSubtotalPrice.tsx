import { TProduct } from "@/types";

type TCartSubtotalPriceProps = { products: TProduct[] };

const CartSubtotalPrice = ({ products }: TCartSubtotalPriceProps) => {
  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className="flex justify-between items-center p-4 border-t mt-6 text-lg font-semibold bg-white rounded-lg shadow-sm">
      <span>Subtotal:</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
  );
};
export default CartSubtotalPrice;
