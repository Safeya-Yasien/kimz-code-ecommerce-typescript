import { memo, useState } from "react";
import { Heart, HeartOff, Loader2 } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";
import { TProduct } from "@/types";
import { actLikeToggle } from "@/store/wishlist/wishlistSlice";

const Product = memo(
  ({ id, title, price, img, max, quantity, isLiked }: TProduct) => {
    const dispatch = useAppDispatch();

    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [imageSrc, setImageSrc] = useState(img);

    const addToCartHandler = () => {
      setIsBtnDisabled(true);
      dispatch(addToCart(id));

      setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);
    };

    const likeToggleHandler = (id: number) => {
      dispatch(actLikeToggle(id));
    };

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
        {/* Product Image */}
        <div className="w-full h-48 rounded-md">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain"
            onError={() =>
              setImageSrc(
                "https://via.placeholder.com/500x300?text=Image+Not+Found"
              )
            }
          />
        </div>

        {/* Product Info */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">
              {typeof price === "number"
                ? `$${price.toFixed(2)}`
                : "Price not available"}
            </p>
          </div>

          {/* Wishlist Button */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
            onClick={() => likeToggleHandler(id)}
          >
            {isLiked ? (
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            ) : (
              <HeartOff className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>

        {/* Quantity Notice */}
        <p
          className={`mt-2 text-sm font-semibold ${
            quantityReachedToMax ? "text-red-500" : "text-gray-600"
          }`}
        >
          {quantityReachedToMax
            ? "You reached the limit"
            : `You can add ${currentRemainingQuantity} item(s)`}
        </p>

        {/* Add to Cart Button */}
        <button
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          disabled={isBtnDisabled || quantityReachedToMax}
          onClick={addToCartHandler}
        >
          {isBtnDisabled ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    );
  }
);

export default Product;
