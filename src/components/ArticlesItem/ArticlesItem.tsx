import { format } from "date-fns";
import { useAppDispatch } from "../../app/hooks";
import { IArticle } from "../../types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";
import { addToFavorites, removeFavorite } from "../../app/features/favoritesSlice";
import { useToggle } from "../../hooks/useToggle";

interface IProps {
  article: IArticle;
}

export const ArticlesItem = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);

  const handleReadLater = (event: any) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
    toggleIsRead();
  };

  const handleAlreadyRead = (event: any) => {
    event.preventDefault();
    dispatch(removeFavorite(article));
    toggleIsRead();
  };

  return (
    <StyledArticlesItem>
      <MainImage src={imageUrl} alt={article.title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        {isRead ? (
          <Button onClick={handleReadLater}>Added to List</Button>
        ) : (
          <Button onClick={handleAlreadyRead}>Read Later</Button>
        )}
      </Description>
    </StyledArticlesItem>
  );
};
