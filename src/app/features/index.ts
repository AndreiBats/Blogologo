import { fetchArticleDetailsByID } from "./articleDetailsSlice";
import { fetchArticles, fetchSortedArticles, fetchArticlesByPage } from "./articleSlice";
import { fetchArticlesBySearch } from "./articlesSearchSlice";
import { fetchBlogDetailsByID } from "./blogDetailsSlice";
import { fetchBlogs, fetchSortedBlogs, fetchBlogsByPage } from "./blogSlice";
import { addToFavoritesBlog, removeFavoriteBlog } from "./favoritesBlogSlice";
import { addToFavorites, removeFavorite } from "./favoritesSlice";
import { changeTheme, fetchSignInUser } from "./userSlice";
import { fetchSearchArticles } from "./articleSlice";

export {
  fetchArticleDetailsByID,
  fetchArticles,
  fetchSortedArticles,
  fetchArticlesByPage,
  fetchArticlesBySearch,
  fetchBlogDetailsByID,
  fetchBlogs,
  fetchSortedBlogs,
  fetchBlogsByPage,
  addToFavoritesBlog,
  removeFavoriteBlog,
  addToFavorites,
  removeFavorite,
  changeTheme,
  fetchSignInUser,
  fetchSearchArticles,
};
