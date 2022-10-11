import { format } from "date-fns";
import { addToFavorites } from "app/features";
import { useToggle } from "hooks/index";
import { getUserInfo } from "app/selectors";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { IArticle } from "types";
import { space } from "assets";
import { Button, Description, MainDate, MainImage, StyledArticlesItem, Title } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticlesItem = ({ article }: IProps) => {
  const { imageUrl, title, publishedAt } = article;
  const date = format(new Date(publishedAt), "do MMMM Y");
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);
  const { isAuth } = useAppSelector(getUserInfo);

  const handleAddToLibrary = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(article));
    toggleIsRead();
  };

  return (
    <StyledArticlesItem whileHover={{ scale: 1.05 }}>
      <MainImage src={imageUrl.endsWith(".jpg") ? imageUrl : space} alt={title} />
      <Description>
        <MainDate>{date}</MainDate>
        <Title>{title}</Title>
        {isAuth ? (
          <Button onClick={handleAddToLibrary}>{isRead ? "Added to library" : "Read Later"}</Button>
        ) : (
          <></>
        )}
      </Description>
    </StyledArticlesItem>
  );
};
