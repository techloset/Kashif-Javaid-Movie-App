import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./slice/popularSlice";
import searchReducer from "./slice/searchslice";
import trendingReducer from "./slice/trendingslice";
import movieReducer from "./slice/movieslice";
import releasReducer from "./slice/releaseSlice";
export const store = configureStore({
  reducer: {
    popular: popularReducer,
    trending: trendingReducer,
    release: releasReducer,
    movie: movieReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
