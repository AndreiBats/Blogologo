import { useToggle } from "hooks";
import { CustomSelect } from "../index";
import { ButtonArticles, ButtonBlogs, StyledTabBar, TabItems } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const TabBar = ({ setTab }: IProps) => {
  const [isActive, asActiveToggle] = useToggle(true);

  const handleSetArticles = () => {
    setTab("articles");
    asActiveToggle();
  };

  const handleSetBlogs = () => {
    setTab("blogs");
    asActiveToggle();
  };

  return (
    <StyledTabBar>
      <TabItems>
        <ButtonArticles $isActive={isActive} onClick={handleSetArticles}>
          Articles
        </ButtonArticles>
        <ButtonBlogs $isActive={isActive} onClick={handleSetBlogs}>
          Blogs
        </ButtonBlogs>
      </TabItems>
    </StyledTabBar>
  );
};
