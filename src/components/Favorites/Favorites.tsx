import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { getFavoriteArticle } from "../../app/selectors/getFavoriteArticle";
import { IArticle } from "../../types";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { StyledFavorites } from "./styles";

export const Favorites = () => {
  const { favorites } = useAppSelector(getFavoriteArticle);

  return (
    <StyledFavorites>
      {favorites.length !== 0 ? (
        favorites.map((article: IArticle) => {
          return (
            <Link to={`/article/${article.id}`}>
              <ArticlesItem key={article.id} article={article} />;
            </Link>
          );
        })
      ) : (
        <h2>Empty</h2>
      )}
    </StyledFavorites>
  );
};
