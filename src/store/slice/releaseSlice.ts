import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movies, releaseState } from "../../types/types";
import AxiosInstance from "../../config/AxiosInstance";

const initialState: releaseState = {
  data: [],
  loading: "idle",
  error: null,
};
const apiKey = process.env.REACT_APP_API_KEY;
const releaseUrl = "https://api.themoviedb.org/3/movie/upcoming";

export const ReleasData = createAsyncThunk("ReleaseMovie", async () => {
  try {
    const res = await AxiosInstance.get(`${releaseUrl}?api_key=${apiKey}`);
    const result: Movies[] = res.data.results;
    return result;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
});
export const releaseSlice = createSlice({
  name: "release",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ReleasData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(ReleasData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(ReleasData.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default releaseSlice.reducer;
