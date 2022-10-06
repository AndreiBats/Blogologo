import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services/services";
import { IArticle } from "types";

interface ArticleState {
  articles: IArticle[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: null,
};

const fetchArticles = createAsyncThunk<IArticle[], undefined, { rejectValue: string }>(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getArticles();
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const fetchArticlesByPage = createAsyncThunk<IArticle[], number, { rejectValue: string }>(
  "articles/fetchArticlesByPage",
  async (page, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getArticlesByPage(page);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const fetchSortedArticles = createAsyncThunk<IArticle[], string, { rejectValue: string }>(
  "articles/fetchSortedArticles",
  async (value, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getSortedArticles(value);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchArticlesByPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticlesByPage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticlesByPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchSortedArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSortedArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchSortedArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articleSlice.reducer;

export { fetchArticles, fetchSortedArticles, fetchArticlesByPage };
