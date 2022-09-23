import { format } from "date-fns";
import { IArticle } from "../../types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticlesItem = (article: IProps) => {
  return (
    <StyledArticlesItem>
      <MainImage src={article.article.imageUrl} alt="mainphoto" />
      <Description>
        <MainDate>{article.article.publishedAt}</MainDate>
        <Title>{article.article.title}</Title>
        <Button>Read Later</Button>
      </Description>
    </StyledArticlesItem>
  );
};
