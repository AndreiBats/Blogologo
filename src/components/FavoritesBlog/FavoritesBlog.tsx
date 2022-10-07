import { useAppDispatch } from "app/hooks";
import { IBlog } from "types";
import { Button, Description, MainDate, MainImage, StyledBlogsItem, Title } from "./styles";
import { removeFavoriteBlog } from "app/features/favoritesBlogSlice";

interface IProps {
  blog: IBlog;
}

export const FavoritesBlog = ({ blog }: IProps) => {
  const { imageUrl, title, publishedAt } = blog;
  const dispatch = useAppDispatch();

  const handleDeleteBlog = (event: any) => {
    event.preventDefault();
    dispatch(removeFavoriteBlog(blog));
  };

  return (
    <StyledBlogsItem>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button onClick={handleDeleteBlog}>Delete</Button>
      </Description>
    </StyledBlogsItem>
  );
};
