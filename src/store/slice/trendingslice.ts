import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movies, trendingState } from "../../types/types";
import AxiosInstance from "../../config/AxiosInstance";
const initialState: trendingState = {
  data: [],
  loading: "idle",
  error: null,
};
const apiKey = process.env.REACT_APP_API_KEY;
const trendingApi = "https://api.themoviedb.org/3/trending/movie/day";

export const trendingData = createAsyncThunk("trendingimg", async () => {
  try {
    const res = await AxiosInstance.get(`${trendingApi}?api_key=${apiKey}`);
    const result: Movies[] = res.data.results;
    return result;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
});

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(trendingData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(trendingData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(trendingData.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default trendingSlice.reducer;
