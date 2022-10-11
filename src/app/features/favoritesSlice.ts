import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavorites } from "types";

interface IFavoritesState {
  favorites: IFavorites[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IFavorites>) {
      const result = state.favorites.find((article) => article.id === payload.id);
      if (!result) state.favorites.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<IFavorites>) {
      state.favorites = state.favorites.filter((article) => {
        return article.id !== payload.id;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFavorite } = favoritesSlice.actions;
