import { format } from "date-fns";
import { useAppDispatch } from "../../app/hooks";
import { IArticle } from "../../types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";
import { addToFavorites } from "../../app/features/favoritesSlice";

interface IProps {
  article: IArticle;
}

export const ArticlesItem = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const dispatch = useAppDispatch();

  const onChange = (event: any) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
  };

  return (
    <StyledArticlesItem>
      <MainImage src={imageUrl} alt={article.title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={onChange}>Read Later</Button>
      </Description>
    </StyledArticlesItem>
  );
};
