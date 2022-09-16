import { Button, StyledTabBar } from "./styles";

interface IProps {
  tab: string;
  setTab: any;
}

export const TabBar = ({ setTab }: IProps) => {
  return (
    <StyledTabBar>
      <Button
        onClick={() => {
          setTab("articles");
        }}
      >
        Articles
      </Button>
      <Button
        onClick={() => {
          setTab("blogs");
        }}
      >
        Blogs
      </Button>
    </StyledTabBar>
  );
};
