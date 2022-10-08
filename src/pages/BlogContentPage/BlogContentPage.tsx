import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Slider, Spinner } from "components";
import { ROUTE } from "routes";
import { Description, MainImage, StyledArticleContentPage, Title, ButtonHome } from "./styles";
import { getDetailsArticle } from "app/selectors";
import { fetchArticleDetailsByID } from "app/features";

export const BlogContentPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { isLoading, error, articleDetails: details } = useAppSelector(getDetailsArticle);

  useEffect(() => {
    dispatch(fetchArticleDetailsByID(id!));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledArticleContentPage>
      <Link to={ROUTE.HOME}>
        <ButtonHome>Home / Post: {details.id}</ButtonHome>
      </Link>

      <Title>{details.title}</Title>
      <MainImage src={details.imageUrl} />
      <Description>{details.summary}</Description>
      <Slider />
    </StyledArticleContentPage>
  );
};
