import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button, StyledTabBar, TabItems } from "./styles";

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
        <Button onClick={handleSetArticles}>Articles</Button>
        <Button onClick={handleSetBlogs}>Blogs</Button>
      </TabItems>
      <CustomSelect />
    </StyledTabBar>
  );
};
