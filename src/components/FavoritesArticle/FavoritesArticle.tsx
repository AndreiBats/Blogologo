import { useAppDispatch } from "app/hooks";
import { IFavorites } from "types";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";
import { format } from "date-fns";
import { removeFavorite } from "app/features";

interface IProps {
  article: IFavorites;
}

export const FavoritesArticle = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const date = format(new Date(publishedAt), "do MMMM Y");
  const dispatch = useAppDispatch();

  const handleDeleteArticle = (event: any) => {
    event.preventDefault();
    dispatch(removeFavorite(article));
  };

  return (
    <StyledArticlesItem whileHover={{ scale: 1.05 }}>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{date}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleDeleteArticle}>Delete</Button>
      </Description>
    </StyledArticlesItem>
  );
};
