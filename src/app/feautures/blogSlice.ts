import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { articleAPI } from "../../servicies/articleAPI";
import { IArticle } from "../../types";

interface BlogState {
  blogs: any[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogState = {
  blogs: [],
  isLoading: false,
  error: null,
};

const fetchBlogs = createAsyncThunk<
  IArticle[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, { rejectWithValue }) => {
  try {
    return await articleAPI.getAllBlogs();
  } catch (error) {
    const AxiosError = error as AxiosError;
    return rejectWithValue(AxiosError.message);
  }
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogSlice.reducer;

export { fetchBlogs };
