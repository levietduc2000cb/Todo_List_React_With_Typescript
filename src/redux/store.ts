import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post.reducer";

const store = configureStore({
  reducer: {
    postReducer: postReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
