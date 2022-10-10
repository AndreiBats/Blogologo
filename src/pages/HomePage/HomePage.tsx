import { useState } from "react";
import { TabBar, ArticlesList, BlogsList, Pagination } from "components";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<string>("articles");
  const [value, setValue] = useState("");

  return (
    <StyledHomePage>
      <TabBar tab={tab} setTab={setTab} />
      {tab === "articles" ? <ArticlesList /> : <BlogsList />}
      <Pagination />
    </StyledHomePage>
  );
};
