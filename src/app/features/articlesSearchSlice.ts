import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services/spaceFlyAPI";
import { IArticle } from "types";

interface ArticlesState {
  searchArticles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  searchArticles: [],
  isLoading: false,
  error: null,
};

const fetchArticlesBySearch = createAsyncThunk<IArticle[], string, { rejectValue: string }>(
  "articlesSearch/fetchArticlesBySearch",
  async (word, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getArticlesBySearch(word);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const articlesSearchSlice = createSlice({
  name: "articlesSearch",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticlesBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticlesBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchArticles = payload;
    });
    builder.addCase(fetchArticlesBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSearchSlice.reducer;

export { fetchArticlesBySearch };
