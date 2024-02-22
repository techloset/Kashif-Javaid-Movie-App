import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movies, movieState } from "../../types/types";
import AxiosInstance from "../../config/AxiosInstance";
const initialState: movieState = {
  data: null,
  loading: "idle",
  error: null,
};
export const movieData = createAsyncThunk(
  "/Movie",
  async ({ movieId }: { movieId: string }, thunkApi) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
      const res = await AxiosInstance.get(`${movieUrl}?api_key=${apiKey}`);
      console.log("res", res);
      const result: Movies = res.data;
      return result;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);
export const MovieSlice = createSlice({
  name: "Movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(movieData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(movieData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(movieData.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export default MovieSlice.reducer;
