import { ROUTE } from "../../routes";
import { Button, StyledArticlesBlogs } from "./styles";

export const ArticlesBlogs = () => {
  return (
    <StyledArticlesBlogs>
      <Button to={`/${ROUTE.ARTICLES}`}>Articles</Button>
      <Button to={`/${ROUTE.BLOGS}`}>Blogs</Button>
    </StyledArticlesBlogs>
  );
};
