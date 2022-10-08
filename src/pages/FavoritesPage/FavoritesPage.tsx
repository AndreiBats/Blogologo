import { useAppSelector } from "app/hooks";
import { getFavoriteArticle } from "app/selectors";
import { FavoritesArticle } from "components";
import { Link } from "react-router-dom";
import { IFavorites } from "types";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);

  return (
    <StyledFavoritesPage>
      {favorites.length !== 0 ? (
        favorites.map((article: IFavorites) => {
          return (
            <Link to={`/article/${article.id}`} key={article.id}>
              <FavoritesArticle article={article} />
            </Link>
          );
        })
      ) : (
        <h2>Empty</h2>
      )}
    </StyledFavoritesPage>
  );
};
