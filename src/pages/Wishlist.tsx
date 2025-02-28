import { GridList, Heading } from "@/components/common";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@/store/wishlist/wishlistSlice";
import { useEffect } from "react";
import { TProduct } from "@/types";
import { Product } from "@/components/eCommerece";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo } = useAppSelector((state) => state.wishlist);
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading>Your Wishlist</Heading>

      <GridList<TProduct>
        records={records}
        renderItem={(record) => <Product key={record.id} {...record} />}
        emptyMessage="No items found."
      />

      {/* if there is no items */}
      {/* <div className="flex flex-col items-center justify-center text-center mt-20">
        <h3 className="text-xl font-semibold text-gray-700">
          Your Wishlist is Empty
        </h3>
        <p className="text-gray-500 mt-2">
          Looks like you haven’t added any favorites yet.
        </p>

        <Link
          to="/categories"
          className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Browse Categories
        </Link>
      </div> */}
    </div>
  );
};

export default Wishlist;
