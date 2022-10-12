import { addToFavorites } from "app/features";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { space } from "assets";
import { format } from "date-fns";
import { useToggle } from "hooks/index";
import { IBlog } from "types";
import { Button, Description, MainDate, MainImage, StyledBlogsItem, Title } from "./styles";

interface IProps {
  blog: IBlog;
}

export const BlogsItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const date = format(new Date(publishedAt), "do MMMM Y");
  const dispatch = useAppDispatch();
  const [isRead, toggleIsRead] = useToggle(false);
  const { isAuth } = useAppSelector(getUserInfo);

  const handleAddToLibrary = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(addToFavorites(blog));
    toggleIsRead();
  };
  return (
    <StyledBlogsItem whileHover={{ scale: 1.05 }}>
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
    </StyledBlogsItem>
  );
};
