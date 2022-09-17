import { Button, StyledTabBar } from "./styles";

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
      <Button onClick={handleSetArticles}>Articles</Button>
      <Button onClick={handleSetBlogs}>Blogs</Button>
    </StyledTabBar>
  );
};
