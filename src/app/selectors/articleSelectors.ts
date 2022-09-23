import { RootState } from "../store";

export const getArticles = (state: RootState) => state.persistedReducer.article;
