import { format } from "date-fns";
import { useAppDispatch } from "../../app/hooks";
import { IArticle } from "../../types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticlesItem = (article: IProps) => {
  const dispatch = useAppDispatch();

  const onChange = (event: any) => {
    console.log(event);
    // e.preventDefault();
    // dispatch(addToFavotires(article));
  };
  return (
    <StyledArticlesItem>
      <MainImage src={article.article.imageUrl} alt="mainphoto" />
      <Description>
        <MainDate>{article.article.publishedAt}</MainDate>
        <Title>{article.article.title}</Title>
        <Button onClick={onChange}>Read Later</Button>
      </Description>
    </StyledArticlesItem>
  );
};
