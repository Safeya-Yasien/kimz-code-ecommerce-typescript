import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      console.log("singal dnfsdfsf:", { signal });

      const response = await axios.get<TResponse>("/category", { signal });
      console.log("API Response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
