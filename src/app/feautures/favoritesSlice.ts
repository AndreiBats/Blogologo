import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

interface IFavoritesState {
  favorites: IArticle;
}

const initialState: IFavoritesState = {
  favorites: {},
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IArticle>) {},
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites } = favoritesSlice.actions;
