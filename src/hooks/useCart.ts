import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetOrderStatus } from "@/store/orders/ordersSlice";
import { useCallback, useEffect } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());

    return () => {
      promise.abort();
      dispatch(cleanCartProductsFullInfo());
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }), [dispatch]);
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return {
    products,
    changeQuantityHandler,
    removeItemHandler,
    loading,
    error,
    userAccessToken,
    placeOrderStatus,
  };
};
export default useCart;
