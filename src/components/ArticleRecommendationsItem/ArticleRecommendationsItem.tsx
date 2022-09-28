import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IArticle } from "../../types";
import {
  Button,
  Description,
  MainDate,
  MainImage,
  StyledRecommendationsItem,
  Title,
} from "./styles";
import { addToFavorites } from "../../app/features/favoritesSlice";
import { useToggle } from "../../hooks/useToggle";
import { getUserInfo } from "../../app/selectors/userSelectors";

interface IProps {
  article: IArticle;
}

export const ArticleRecommendationsItem = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);
  const { isAuth } = useAppSelector(getUserInfo);

  const handleAddToLibrary = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
    toggleIsRead();
  };

  return (
    <StyledRecommendationsItem>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleAddToLibrary}>{isRead ? "Added to library" : "Read Later"}</Button>
      </Description>
    </StyledRecommendationsItem>
  );
};
