import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const cartItemCount = Object.values(items).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return cartItemCount;
  }
);

const getWishlistTotalQuantitySelector = createSelector(
  (state: RootState) => state.wishlist.itemsId,
  (itemsId) => {
    // const wishlistItemCount = Object.values(items).reduce;
    console.log("whitelist items count", itemsId);
  }
);

export { getCartTotalQuantitySelector, getWishlistTotalQuantitySelector };
