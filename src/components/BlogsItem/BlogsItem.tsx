import { IBlog } from "../../types";
import { Description, MainDate, MainImage, StyledBlogsItem, Title } from "./styles";

interface IProps {
  blog: IBlog;
}

export const BlogsItem = (blog: IProps) => {
  return (
    <StyledBlogsItem>
      <MainImage src={blog.blog.imageUrl} alt="mainphoto" />
      <Description>
        <MainDate>{blog.blog.publishedAt}</MainDate>
        <Title>{blog.blog.title}</Title>
      </Description>
    </StyledBlogsItem>
  );
};
