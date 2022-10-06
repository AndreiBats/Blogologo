import { useToggle } from "hooks/useToggle";
import { CustomSelectArticle, CustomSelectBlog } from "../index";
import { Button, StyledTabBar, TabItems } from "./styles";

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
        <Button onClick={handleSetArticles}>Articles</Button>
        <Button onClick={handleSetBlogs}>Blogs</Button>
      </TabItems>
      {isActive ? <CustomSelectArticle /> : <CustomSelectBlog />}
    </StyledTabBar>
  );
};
