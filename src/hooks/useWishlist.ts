import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetWishlist,
  cleanWishlistProductsFullInfo,
} from "@/store/wishlist/wishlistSlice";
import { useEffect } from "react";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo } = useAppSelector((state) => state.wishlist);
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(cleanWishlistProductsFullInfo());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));

  return { records };
};

export default useWishlist;
