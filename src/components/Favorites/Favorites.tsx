import { Link } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { IArticle, IBlog } from "types";
import { FavoritesArticle, FavoritesBlog } from "../index";
import { StyledFavorites } from "./styles";
import { getFavoriteArticle } from "app/selectors/favoritesSelectors";
import { getFavoriteBlog } from "app/selectors/favoritesBlogSelectors";

export const Favorites = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);
  const { favoritesBlog } = useAppSelector(getFavoriteBlog);

  return (
    <StyledFavorites>
      {favorites.length !== 0 ? (
        favorites.map((article: IArticle) => {
          return (
            <Link to={`/article/${article.id}`} key={article.id}>
              <FavoritesArticle article={article} />
            </Link>
          );
        })
      ) : (
        <h2>Empty</h2>
      )}

      {favoritesBlog.length !== 0 ? (
        favoritesBlog.map((blog: IBlog) => {
          return (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <FavoritesBlog blog={blog} />
            </Link>
          );
        })
      ) : (
        <h2></h2>
      )}
    </StyledFavorites>
  );
};
