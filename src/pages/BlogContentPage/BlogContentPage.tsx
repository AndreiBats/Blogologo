import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchArticleDetailsByID } from "../../app/features/articleDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelectors";
import { Spinner } from "../../components";
import { ROUTE } from "../../routes";
import { Description, MainImage, StyledArticleContentPage, Title, ButtonHome } from "./styles";

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
    </StyledArticleContentPage>
  );
};
