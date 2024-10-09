import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@types/product";
import axios from "axios";

type TResponse = IProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        `${import.meta.env.VITE_BASE_URL}/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }

      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export default actGetProductsByCatPrefix;
