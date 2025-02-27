import { Trash2 } from "lucide-react";
import { TProduct } from "@/types";
import { memo } from "react";

type TCartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    img,
    price,
    max,
    quantity = 1,
    changeQuantityHandler,
    removeItemHandler,
  }: TCartItemProps) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white w-full">
        {/* Product Image */}
        <img
          src={img}
          alt="Sample Product"
          className="w-20 h-20 object-cover rounded-lg border"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 font-medium">
            ${(price * quantity).toFixed(2)}
            {/* ${price.toFixed(2)} */}
          </p>

          {/* Quantity Selector */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-gray-500 text-sm">Qty:</span>
            <select
              value={quantity ?? 1}
              onChange={changeQuantity}
              className="border p-1 rounded text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {renderOptions}
            </select>
          </div>
        </div>

        {/* Remove Button */}
        <button
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => removeItemHandler(id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    );
  }
);

export default CartItem;
