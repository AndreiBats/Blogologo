import { ArticlesBlogs } from "../../components/ArticlesBlogs/ArticlesBlogs";
import { ArticlesList } from "../../components/ArticlesList/ArticlesList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
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
