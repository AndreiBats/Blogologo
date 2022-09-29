import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "../../services/services";
import { IArticle, IBlog } from "../../types";

interface BlogDetailsState {
  isLoading: boolean;
  error: null | string;
  blogDetails: IBlog;
}

const initialState: BlogDetailsState = {
  isLoading: false,
  error: null,
  blogDetails: {},
};

const fetchBlogDetailsByID = createAsyncThunk<IArticle, string>(
  "articleDetails/fetchArticleDetailsByID",
  async (id) => {
    return await spaceFlyAPI.getArticleDetailByID(id);
  },
);

const blogDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogDetailsByID.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogDetailsByID.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogDetails = payload;
    });
    builder.addCase(fetchBlogDetailsByID.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export default blogDetailsSlice.reducer;

export { fetchBlogDetailsByID };
