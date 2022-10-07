import { useAppSelector } from "app/hooks";
import { getFavoriteBlog } from "app/selectors/favoritesBlogSelectors";
import { getFavoriteArticle } from "app/selectors/favoritesSelectors";
import { FavoritesArticle, FavoritesBlog } from "components";
import { Link } from "react-router-dom";
import { IArticle, IBlog } from "types";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);
  const { favoritesBlog } = useAppSelector(getFavoriteBlog);

  return (
    <StyledFavoritesPage>
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
    </StyledFavoritesPage>
  );
};
