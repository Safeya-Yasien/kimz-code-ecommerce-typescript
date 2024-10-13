import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const getCartTotalQuantitySelector = createSelector(
    (state: RootState) => state.cart.items,
    (items) => {
      const totalQuantity = Object.values(items).reduce(
        (acc, item) => acc + item,
        0
      );
      return totalQuantity;
    }
  );
  


  export { getCartTotalQuantitySelector };