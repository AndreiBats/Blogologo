import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useDebounce } from "hooks/index";
import { IArticle } from "types";
import { ArticlesItem, Spinner } from "../index";
import { Description, StyledSearchList } from "./styles";
import { getSearchArticles } from "app/selectors";
import { fetchArticlesBySearch } from "app/features";

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
    <Description>Please, enter your request!</Description>
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
