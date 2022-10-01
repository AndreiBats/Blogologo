import { RootState } from "../store";

export const getDetailsArticle = (state: RootState) => state.persistedReducer.articleDetails;
