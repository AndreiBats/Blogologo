import { useState } from "react";
import { TabBar, ArticlesList, CustomSelect, BlogsList } from "../../components";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<string>("articles");

  return (
    <StyledHomePage>
      <TabBar tab={tab} setTab={setTab} />
      <CustomSelect />
      {tab === "articles" ? <ArticlesList /> : <BlogsList />}
    </StyledHomePage>
  );
};
