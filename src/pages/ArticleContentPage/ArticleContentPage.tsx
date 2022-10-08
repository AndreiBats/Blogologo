import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Slider, Spinner } from "components";
import { ROUTE } from "routes";
import { StyledArticleContentPage, Title, Description, MainImage, ButtonHome } from "./styles";
import { getDetailsArticle } from "app/selectors";
import { fetchArticleDetailsByID } from "app/features";

export const ArticleContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, articleDetails } = useAppSelector(getDetailsArticle);

  useEffect(() => {
    id && dispatch(fetchArticleDetailsByID(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledArticleContentPage>
      <Link to={ROUTE.HOME}>
        <ButtonHome>Home / Post: {articleDetails.id}</ButtonHome>
      </Link>
      <Title>{articleDetails.title}</Title>
      <MainImage src={articleDetails.imageUrl} />
      <Description>{articleDetails.summary}</Description>
      <Slider />
    </StyledArticleContentPage>
  );
};
