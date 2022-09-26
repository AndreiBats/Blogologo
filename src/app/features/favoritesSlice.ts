import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

interface IFavoritesState {
  favorites: IArticle[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IArticle>) {
      const result = state.favorites.find((article) => article.id === payload.id);
      if (!result) state.favorites.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<IArticle>) {
      state.favorites = state.favorites.filter((article) => {
        return article.id !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFavorite } = favoritesSlice.actions;
