import { RootState } from "../store";

export const getSearchArticles = (state: RootState) => state.persistedReducer.searchArticles;
