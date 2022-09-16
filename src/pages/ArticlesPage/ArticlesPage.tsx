import { ArticlesBlogs, ArticlesList, CustomSelect } from "../../components";
import { StyledArticlesPage } from "./styles";

export const ArticlesPage = () => {
  return (
    <StyledArticlesPage>
      <ArticlesBlogs />
      <CustomSelect />
      <ArticlesList />
    </StyledArticlesPage>
  );
};
