import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ArticleState {
  articles: any[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: null,
};

const fetchArticles = createAsyncThunk("articles/fetchArticles", async () => {
  return fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=20&_sort=title"
  ).then((articles) => articles.json());
});

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
    builder.addCase(fetchArticles.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default articleSlice.reducer;

export { fetchArticles };
