import { useState } from "react";
import { Trash2 } from "lucide-react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 19.99; // Static price for now

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white w-full">
      {/* Product Image */}
      <img
        src="https://via.placeholder.com/80"
        alt="Sample Product"
        className="w-20 h-20 object-cover rounded-lg border"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">Sample Product</h3>
        <p className="text-gray-600 font-medium">
          ${(price * quantity).toFixed(2)}
        </p>

        {/* Quantity Selector */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-gray-500 text-sm">Qty:</span>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-1 rounded text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Remove Button */}
      <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;
