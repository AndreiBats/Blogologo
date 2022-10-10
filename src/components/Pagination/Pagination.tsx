import { useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { StyledPagination, ButtonPrev, ButtonNext, Pages, Page, Page1 } from "./styles";
import { fetchArticlesByPage, fetchBlogsByPage } from "app/features";

interface IProps {
  value: string;
}

export const Pagination = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({
    _start: 0,
    _sort: value,
    _limit: "12",
  });

  const handlePrev = () => {
    setRequestParams({
      _start: requestParams._start - 12,
      _sort: requestParams._sort,
      _limit: requestParams._limit,
    });
  };

  const handleNext = () => {
    setRequestParams({
      _start: requestParams._start + 12,
      _sort: requestParams._sort,
      _limit: requestParams._limit,
    });
  };

  useEffect(() => {
    dispatch(fetchArticlesByPage(requestParams));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchBlogsByPage(requestParams));
  }, [dispatch, requestParams]);

  const handleFirstPage = () => {
    setRequestParams({
      _start: requestParams._start,
      _sort: requestParams._sort,
      _limit: requestParams._limit,
    });
  };

  const handleSecondPage = () => {
    setRequestParams({
      _start: requestParams._start + 12,
      _sort: requestParams._sort,
      _limit: requestParams._limit,
    });
  };

  const handleThirdPage = () => {
    setRequestParams({
      _start: requestParams._start + 24,
      _sort: requestParams._sort,
      _limit: requestParams._limit,
    });
  };

  return (
    <StyledPagination>
      {requestParams._start === 0 ? (
        <ButtonPrev disabled>Prev</ButtonPrev>
      ) : (
        <ButtonPrev onClick={handlePrev}>Prev</ButtonPrev>
      )}

      <Pages>
        <Page1 onClick={handleFirstPage}>{(requestParams._start + 12 * 2) / 12 - 1}</Page1>
        <Page onClick={handleSecondPage}>{(requestParams._start + 12 * 2) / 12}</Page>
        <Page onClick={handleThirdPage}>{(requestParams._start + 12 * 2) / 12 + 1}</Page>
      </Pages>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </StyledPagination>
  );
};
