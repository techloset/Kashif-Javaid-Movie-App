import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movies, SearcheState } from "../../types/types";
import AxiosInstance from "../../config/AxiosInstance";
const initialState: SearcheState = {
  data: [],
  loading: "idle",
  error: null,
};
export const searchData = createAsyncThunk(
  "/search",
  async ({ query }: { query: string }) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;
      const res = await AxiosInstance.get(URL);
      const result: Movies[] = res.data.results;
      return result;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
);
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(searchData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(searchData.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default searchSlice.reducer;
