import { useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { StyledPagination, ButtonPrev, ButtonNext, Pages, Page, Page1 } from "./styles";
import {
  fetchArticlesByPage,
  fetchBlogsByPage,
  fetchSortedArticles,
  fetchSortedBlogs,
} from "app/features";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 0 });

  const handlePrev = () => {
    setRequestParams({
      page: requestParams.page - 12,
    });
  };

  const handleNext = () => {
    setRequestParams({
      page: requestParams.page + 12,
    });
  };

  useEffect(() => {
    dispatch(fetchArticlesByPage(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchBlogsByPage(requestParams.page));
  }, [dispatch, requestParams]);

  const handleFirstPage = () => {
    setRequestParams({
      page: requestParams.page,
    });
  };

  const handleSecondPage = () => {
    setRequestParams({
      page: requestParams.page + 12,
    });
  };

  const handleThirdPage = () => {
    setRequestParams({
      page: requestParams.page + 24,
    });
  };

  return (
    <StyledPagination>
      {requestParams.page === 0 ? (
        <ButtonPrev disabled>Prev</ButtonPrev>
      ) : (
        <ButtonPrev onClick={handlePrev}>Prev</ButtonPrev>
      )}

      <Pages>
        <Page1 onClick={handleFirstPage}>{(requestParams.page + 12 * 2) / 12 - 1}</Page1>
        <Page onClick={handleSecondPage}>{(requestParams.page + 12 * 2) / 12}</Page>
        <Page onClick={handleThirdPage}>{(requestParams.page + 12 * 2) / 12 + 1}</Page>
      </Pages>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </StyledPagination>
  );
};
