import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@/store/products/productsSlice";
import { useParams } from "react-router";
import { useEffect } from "react";

const useProducts = () => {
  const params = useParams();
  const productPrefix = params.prefix;
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const promise = dispatch(
      actGetProductsByCatPrefix(params.prefix as string)
    );

    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    };
  }, [dispatch, params.prefix]);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id),
    isAuthenticated: userAccessToken ? true : false,
  }));

  return { productsFullInfo, productPrefix, loading, error };
};
export default useProducts;
