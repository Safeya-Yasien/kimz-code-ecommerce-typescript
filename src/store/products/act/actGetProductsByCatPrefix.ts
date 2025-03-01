import { TProduct } from "@/types";
import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@services/axios-global";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`,
        { signal }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByCatPrefix;
