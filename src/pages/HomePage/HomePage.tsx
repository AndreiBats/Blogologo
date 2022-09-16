import { ArticlesBlogs, ArticlesList, CustomSelect } from "../../components";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <ArticlesBlogs />
      <CustomSelect />
      <ArticlesList />
    </StyledHomePage>
  );
};
