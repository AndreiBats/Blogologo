import { useEffect, useState } from "react";
import { fetchArticlesByPage } from "../../app/features/articleSlice";
import { fetchBlogsByPage } from "../../app/features/blogSlice";
import { useAppDispatch } from "../../app/hooks";
import { StyledPagination, ButtonPrev, ButtonNext } from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 24 });

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

  return (
    <StyledPagination>
      <ButtonPrev onClick={handlePrev}>Prev</ButtonPrev>
      <ul>
        <li>{}</li>
        <li>{}</li>
        <li>{}</li>
      </ul>
      <ButtonNext onClick={handleNext}>Next</ButtonNext>
    </StyledPagination>
  );
};
