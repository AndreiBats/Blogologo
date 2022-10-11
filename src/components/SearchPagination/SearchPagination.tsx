import { fetchSearchArticles } from "app/features";
import { useAppDispatch } from "app/hooks";
import { useEffect, useState } from "react";
import { ButtonNext, ButtonPrev, Page, Page1, Pages, StyledPagination } from "./styles";

interface IProps {
  value: string;
}

export const SearchPagination = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({
    _title_contains: "",
    _start: 0,
    _limit: 12,
  });

  useEffect(() => {
    dispatch(fetchSearchArticles(requestParams));
  }, [dispatch, requestParams]);

  const handlePrev = () => {
    setRequestParams({
      _start: requestParams._start === 0 ? 0 : requestParams._start - +requestParams._limit,
      _title_contains: value,
      _limit: requestParams._limit,
    });
  };

  const handleNext = () => {
    setRequestParams({
      _start: requestParams._start + +requestParams._limit,
      _title_contains: value,
      _limit: requestParams._limit,
    });
  };

  const handleFirstPage = () => {
    setRequestParams({
      _start: requestParams._start,
      _title_contains: value,
      _limit: requestParams._limit,
    });
  };

  const handleSecondPage = () => {
    setRequestParams({
      _start: requestParams._start + +requestParams._limit,
      _title_contains: value,
      _limit: requestParams._limit,
    });
  };

  const handleThirdPage = () => {
    setRequestParams({
      _start: requestParams._start + +requestParams._limit * 2,
      _title_contains: value,
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
        <Page1 onClick={handleFirstPage}>{requestParams._start / +requestParams._limit + 1}</Page1>
        <Page onClick={handleSecondPage}>{requestParams._start / +requestParams._limit + 2}</Page>
        <Page onClick={handleThirdPage}>{requestParams._start / +requestParams._limit + 3}</Page>
      </Pages>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </StyledPagination>
  );
};
