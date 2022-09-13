import { ArticlesList } from "../../components/ArticlesList/ArticlesList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import {
  ArticlesNews,
  ButtonArticles,
  ButtonNews,
  StyledHomePage,
} from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <ArticlesNews>
        <ButtonArticles>Articles</ButtonArticles>
        <ButtonNews>News</ButtonNews>
      </ArticlesNews>
      <CustomSelect />
      <ArticlesList />
    </StyledHomePage>
  );
};
