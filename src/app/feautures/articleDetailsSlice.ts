import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "../../services/services";
import { IArticle } from "../../types";

interface ArticleDetailsState {
  isLoading: boolean;
  error: null | string;
  details: any;
}

const initialState: ArticleDetailsState = {
  isLoading: false,
  error: null,
  details: {},
};

const fetchArticleDetailsByID = createAsyncThunk<IArticle, string>(
  "articleDetails/fetchArticleDetailsByID",
  async (id) => {
    return await spaceFlyAPI.getArticleDetailByID(id);
  },
);

const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleDetailsByID.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticleDetailsByID.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
    });
    builder.addCase(fetchArticleDetailsByID.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export default articleDetailsSlice.reducer;

export { fetchArticleDetailsByID };
