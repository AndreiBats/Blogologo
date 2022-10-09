import { useAppSelector } from "app/hooks";
import { getFavoriteArticle } from "app/selectors";
import { FavoritesArticle } from "components";
import { Link } from "react-router-dom";
import { IFavorites } from "types";
import { Description, StyledFavoritesPage } from "./styles";

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
        <Description>There is nothing to show you!</Description>
      )}
    </StyledFavoritesPage>
  );
};
