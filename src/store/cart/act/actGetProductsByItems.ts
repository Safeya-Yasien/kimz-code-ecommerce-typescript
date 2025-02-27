import { RootState } from "@/store/store";
import { TProduct } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      // MockAPI.io not support multiple ids
      //   const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      //   const response = await axios.get<TResponse>(
      //     `/products?${concatenatedItemsId}`
      //   );

      const response = await axios.get<TResponse>(
        "https://67bb3e0bfbe0387ca1398bac.mockapi.io/products"
      );

      const filteredProducts = response.data.filter((product) =>
        itemsId.includes(product.id.toString())
      );

      return filteredProducts;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductsByItems;
