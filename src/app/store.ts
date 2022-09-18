import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./feautures/articleSlice";
import blogReducer from "./feautures/blogSlice";
import articleDetailsReducer from "./feautures/articleDetailsSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    blog: blogReducer,
    articleDetails: articleDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
