import { RootState } from "../store";

export const getFavoriteArticle = (state: RootState) => state.persistedReducer.favorites;
