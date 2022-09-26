import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleDetailsByID } from "../../app/features/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelectors";
import { Spinner } from "../../components";
import { Description, MainImage, StyledArticleContentPage, Title, ButtonHome } from "./styles";

export const BlogContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, details } = useAppSelector(getDetailsArticle);

  useEffect(() => {
    dispatch(fetchArticleDetailsByID(id!));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledArticleContentPage>
      <ButtonHome>Home / Post: {details.id}</ButtonHome>
      <Title>{details.title}</Title>
      <MainImage src={details.imageUrl} />
      <Description>{details.summary}</Description>
    </StyledArticleContentPage>
  );
};
