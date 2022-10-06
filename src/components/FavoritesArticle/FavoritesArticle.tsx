import { useAppDispatch } from "app/hooks";
import { IArticle } from "types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";
import { removeFavorite } from "app/features/favoritesSlice";

interface IProps {
  article: IArticle;
}

export const FavoritesArticle = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const dispatch = useAppDispatch();

  const handleDeleteArticle = (event: any) => {
    event.preventDefault();
    dispatch(removeFavorite(article));
  };

  return (
    <StyledArticlesItem>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleDeleteArticle}>Delete</Button>
      </Description>
    </StyledArticlesItem>
  );
};
