import { addToFavoritesBlog } from "app/features/favoritesBlogSlice";
import { useAppDispatch } from "app/hooks";
import { useToggle } from "hooks/index";
import { IBlog } from "types";
import { Button, Description, MainDate, MainImage, StyledBlogsItem, Title } from "./styles";

interface IProps {
  blog: IBlog;
}

export const BlogsItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);

  const handleAddToLibrary = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavoritesBlog(blog));
    toggleIsRead();
  };
  return (
    <StyledBlogsItem whileHover={{ scale: 1.1 }}>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleAddToLibrary}>{isRead ? "Added to library" : "Read Later"}</Button>
      </Description>
    </StyledBlogsItem>
  );
};
