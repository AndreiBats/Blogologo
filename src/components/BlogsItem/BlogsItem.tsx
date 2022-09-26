import { addToFavorites } from "../../app/features/favoritesSlice";
import { useAppDispatch } from "../../app/hooks";
import { useToggle } from "../../hooks/useToggle";
import { IBlog } from "../../types";
import { Button, Description, MainDate, MainImage, StyledBlogsItem, Title } from "./styles";

interface IProps {
  blog: IBlog;
}

export const BlogsItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);

  const handleAddToLibrary = (event: any): void => {
    event.preventDefault();
    dispatch(addToFavorites(blog));
    toggleIsRead();
  };
  return (
    <StyledBlogsItem>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleAddToLibrary}>{isRead ? "Added to library" : "Read Later"}</Button>
      </Description>
    </StyledBlogsItem>
  );
};
