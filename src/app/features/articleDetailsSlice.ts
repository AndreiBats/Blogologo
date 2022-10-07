import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlyAPI } from "services/spaceFlyAPI";
import { IArticle } from "types";
import { getKeyWord } from "utils/keyword";

interface ArticleDetailsState {
  isLoading: boolean;
  error: null | string;
  articleDetails: IArticle;
  articleRecommendations: IArticle[];
}

const initialState: ArticleDetailsState = {
  isLoading: false,
  error: null,
  articleDetails: {
    id: 0,
    featured: false,
    title: "",
    url: "",
    imageUrl: "",
    newsSite: "",
    summary: "",
    publishedAt: "",
    launches: [
      {
        id: "",
        provider: "",
      },
    ],
    events: [
      {
        id: "",
        provider: "",
      },
    ],
  },
  articleRecommendations: [],
};

const fetchArticleDetailsByID = createAsyncThunk<
  { articleDetails: IArticle; articleRecommendations: any },
  string,
  { rejectValue: string }
>("articleDetails/fetchArticleDetailsByID", async (id, { rejectWithValue }) => {
  try {
    const articleDetails = await spaceFlyAPI.getArticleDetailByID(id);
    const keyWord = getKeyWord(articleDetails.title);
    const articleRecommendations = await spaceFlyAPI.getArticlesByKeyWord(keyWord);

    return { articleDetails, articleRecommendations };
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

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
      state.articleDetails = payload.articleDetails;
      state.articleRecommendations = payload.articleRecommendations;
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
