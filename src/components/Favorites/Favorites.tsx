import { Link } from "react-router-dom";
import { removeFavorite } from "../../app/features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getFavoriteArticle } from "../../app/selectors/getFavoriteArticle";
import { IArticle } from "../../types";
import { FavoritesArticle } from "../FavoritesArticle/FavoritesArticle";
import { StyledFavorites } from "./styles";

export const Favorites = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);

  return (
    <StyledFavorites>
      {favorites.length !== 0 ? (
        favorites.map((article: IArticle) => {
          return (
            <Link to={`/article/${article.id}`} key={article.id}>
              <FavoritesArticle article={article} />;
            </Link>
          );
        })
      ) : (
        <h2>Empty</h2>
      )}
    </StyledFavorites>
  );
};
