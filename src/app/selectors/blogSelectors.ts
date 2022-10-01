import { RootState } from "../store";

export const getBlogs = (state: RootState) => state.persistedReducer.blog;
