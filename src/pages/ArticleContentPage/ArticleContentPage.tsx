import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleDetailsByID } from "../../app/feautures/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelectors";

import { StyledArticleContentPage, Title, Description, MainImage } from "./styles";

export const ArticleContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticle);

  useEffect(() => {
    dispatch(fetchArticleDetailsByID(id!));
  }, [dispatch, id]);

  return (
    <StyledArticleContentPage>
      <Title>{details.title}</Title>
      <MainImage src={details.imageUrl} />
      <Description>{details.summary}</Description>
    </StyledArticleContentPage>
  );
};
