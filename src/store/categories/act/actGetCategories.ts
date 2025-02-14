import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import axios from "@services/axios-global";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/category");
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
