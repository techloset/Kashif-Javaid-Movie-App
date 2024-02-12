import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movies, PopularState } from "../../types/types";
import AxiosInstance from "../../config/AxiosInstance";
const initialState: PopularState = {
  data: [],
  loading: "idle",
  error: null,
};
const apiKey = process.env.REACT_APP_API_KEY;
const popular = `https://api.themoviedb.org/3/movie/popular`;
export const popularData = createAsyncThunk("popularImg", async () => {
  try {
    const res = await AxiosInstance.get(`${popular}?api_key=${apiKey}`);
    const result: Movies[] = res.data.results;
    return result;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
});
export const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(popularData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(popularData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(popularData.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default popularSlice.reducer;
