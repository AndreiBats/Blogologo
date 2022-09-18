import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./feautures/articleSlice";
import blogReducer from "./feautures/blogSlice";
import articleDetailsReducer from "./feautures/articleDetailsSlice";
import blogDetailsReducer from "./feautures/blogDetailsSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    blog: blogReducer,
    articleDetails: articleDetailsReducer,
    blogDetails: blogDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
