import { ArticlesBlogs, BlogsList, CustomSelect } from "../../components";
import { StyledBlogsList } from "./style";

export const BlogsPage = () => {
  return (
    <StyledBlogsList>
      <ArticlesBlogs />
      <CustomSelect />
      <BlogsList />
    </StyledBlogsList>
  );
};
