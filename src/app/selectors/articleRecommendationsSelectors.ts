import { RootState } from "../store";

export const getArticlesRecommendations = (state: RootState) => state.persistedReducer.article;
