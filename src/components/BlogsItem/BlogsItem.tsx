import { IBlog } from "../../types";
import { Button, Description, MainDate, MainImage, StyledBlogsItem, Title } from "./styles";

interface IProps {
  blog: IBlog;
}

export const BlogsItem = ({ blog }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  return (
    <StyledBlogsItem>
      <MainImage src={imageUrl} alt={title} />
      <Description>
        <MainDate>{publishedAt}</MainDate>
        <Title>{title}</Title>
        <Button>Read Later</Button>
      </Description>
    </StyledBlogsItem>
  );
};
