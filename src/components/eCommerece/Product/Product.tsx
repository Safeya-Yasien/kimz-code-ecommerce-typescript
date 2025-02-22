import { useState } from "react";
import { Heart, HeartOff, Loader2 } from "lucide-react";

type ProductProps = {
  title: string;
  price: number;
  img: string;
};

const Product = ({ title, price, img }: ProductProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [quantityReachedToMax] = useState(false);
  const currentRemainingQuantity = 5;
  const [imageSrc, setImageSrc] = useState(img);

  const likeToggleHandler = () => setIsLiked((prev) => !prev);

  const addToCartHandler = () => {
    setIsBtnDisabled(true);
    setTimeout(() => setIsBtnDisabled(false), 2000);
  };

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-4">
      {/* Product Image */}
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover rounded-md"
        onError={() =>
          setImageSrc(
            "https://via.placeholder.com/500x300?text=Image+Not+Found"
          )
        }
      />

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">
          {typeof price === "number"
            ? `$${price.toFixed(2)}`
            : "Price not available"}
        </p>

        {/* Wishlist Button */}
        <div
          className="mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
          onClick={likeToggleHandler}
        >
          {isLiked ? (
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          ) : (
            <HeartOff className="w-6 h-6 text-gray-500" />
          )}
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
          disabled={isBtnDisabled}
          onClick={addToCartHandler}
        >
          {isBtnDisabled ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
