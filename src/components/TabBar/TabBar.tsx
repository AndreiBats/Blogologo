import { CustomSelect } from "../index";
import { ButtonArticles, ButtonBlogs, StyledTabBar, TabItems } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const TabBar = ({ setTab }: IProps) => {
  const handleSetArticles = () => {
    setTab("articles");
  };

  const handleSetBlogs = () => {
    setTab("blogs");
  };

  return (
    <StyledTabBar>
      <TabItems>
        <ButtonArticles onClick={handleSetArticles}>Articles</ButtonArticles>
        <ButtonBlogs onClick={handleSetBlogs}>Blogs</ButtonBlogs>
      </TabItems>
      <CustomSelect />
    </StyledTabBar>
  );
};
