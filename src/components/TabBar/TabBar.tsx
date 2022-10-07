import { useToggle } from "hooks/useToggle";
import { CustomSelectArticle, CustomSelectBlog } from "../index";
import { ButtonArticles, ButtonBlogs, StyledTabBar, TabItems } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const TabBar = ({ setTab }: IProps) => {
  const [isActive, toggleIsActive] = useToggle(false);

  const handleSetArticles = () => {
    setTab("articles");
    toggleIsActive();
  };

  const handleSetBlogs = () => {
    setTab("blogs");
    toggleIsActive();
  };

  return (
    <StyledTabBar>
      <TabItems>
        <ButtonArticles onClick={handleSetArticles}>Articles</ButtonArticles>
        <ButtonBlogs onClick={handleSetBlogs}>Blogs</ButtonBlogs>
      </TabItems>
      {isActive ? <CustomSelectArticle /> : <CustomSelectBlog />}
    </StyledTabBar>
  );
};
