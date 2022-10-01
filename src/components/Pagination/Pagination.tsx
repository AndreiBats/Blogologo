import { useEffect, useState } from "react";
import { fetchArticlesByPage } from "../../app/features/articleSlice";
import { StyledPagination, ButtonPrev, ButtonNext } from "./styles";

export const Pagination = () => {
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
    fetchArticlesByPage(requestParams.page);
  }, [requestParams]);

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
