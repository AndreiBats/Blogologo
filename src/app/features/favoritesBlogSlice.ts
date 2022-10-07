import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlog } from "types";

interface IFavoritesState {
  favoritesBlog: IBlog[];
}

const initialState: IFavoritesState = {
  favoritesBlog: [],
};

const favoritesBlogSlice = createSlice({
  name: "favoritesBlog",
  initialState,
  reducers: {
    addToFavoritesBlog(state, { payload }: PayloadAction<IBlog>) {
      const result = state.favoritesBlog.find((blog) => blog.id === payload.id);
      if (!result) state.favoritesBlog.push(payload);
    },
    removeFavoriteBlog(state, { payload }: PayloadAction<IBlog>) {
      state.favoritesBlog = state.favoritesBlog.filter((blog) => {
        return blog.id !== payload.id;
      });
    },
  },
});

export default favoritesBlogSlice.reducer;

export const { addToFavoritesBlog, removeFavoriteBlog } = favoritesBlogSlice.actions;
