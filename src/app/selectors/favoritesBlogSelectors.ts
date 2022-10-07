import { RootState } from "../store";

export const getFavoriteBlog = (state: RootState) => state.persistedReducer.favoritesBlog;
