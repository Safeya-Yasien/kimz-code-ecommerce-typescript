import { IProduct } from "@models/product";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";

const Product = ({ id, title, price, img }: IProduct) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl m-4">
      <div className="relative">
        <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={img}
            alt={title}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition duration-300"></div>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2" title={title}>
          {title}
        </h2>
        <p className="text-gray-700 text-base">Price: {price} EGP</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
