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

  const handleAddToLibrary = (event: any): void => {
    event.preventDefault();
    dispatch(addToFavorites(article));
    toggleIsRead();
  };

  return (
    <StyledArticlesItem>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleAddToLibrary}>{isRead ? "Added to library" : "Read Later"}</Button>
      </Description>
    </StyledArticlesItem>
  );
};
