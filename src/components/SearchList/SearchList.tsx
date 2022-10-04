import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesBySearch } from "../../app/features/articlesSearchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSearchArticles } from "../../app/selectors/articlesSearchSelectors";
import { useDebounce } from "../../hooks/useDebounce";
import { IArticle } from "../../types";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { Spinner } from "../Spinner/Spinner";
import { StyledSearchList } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchList = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, searchArticles } = useAppSelector(getSearchArticles);
  const debounceValue = useDebounce(value, 1000);

  useEffect((): void => {
    if (debounceValue) {
      value !== ""
        ? dispatch(fetchArticlesBySearch(debounceValue))
        : dispatch(fetchArticlesBySearch("@"));
    }
  }, [debounceValue, dispatch, value]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return searchArticles.length === 0 ? (
    <h3>nothing</h3>
  ) : (
    <StyledSearchList>
      {searchArticles.map((article: IArticle) => {
        return (
          <Link to={`/article/${article.id}`} key={article.id}>
            <ArticlesItem article={article} />
          </Link>
        );
      })}
    </StyledSearchList>
  );
};
