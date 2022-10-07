import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services/spaceFlyAPI";
import { IBlog } from "types";

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

const fetchBlogs = createAsyncThunk<IBlog[], undefined, { rejectValue: string }>(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getBlogs();
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const fetchSortedBlogs = createAsyncThunk<IBlog[], string, { rejectValue: string }>(
  "blogs/fetchSortedBlogs",
  async (value, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getSortedBlogs(value);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

const fetchBlogsByPage = createAsyncThunk<IBlog[], number, { rejectValue: string }>(
  "blogs/fetchBlogsByPage",
  async (page, { rejectWithValue }) => {
    try {
      return await spaceFlyAPI.getBlogsByPage(page);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  },
);

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

    builder.addCase(fetchSortedBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSortedBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchSortedBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchBlogsByPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogsByPage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchBlogsByPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogSlice.reducer;

export { fetchBlogs, fetchSortedBlogs, fetchBlogsByPage };
