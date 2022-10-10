import { useState } from "react";
import { TabBar, ArticlesList, BlogsList, Pagination, CustomSelect } from "components";
import { StyledHomePage, Tabs } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<string>("articles");
  const [value, setValue] = useState("");

  return (
    <StyledHomePage>
      <Tabs>
        <TabBar tab={tab} setTab={setTab} />
        <CustomSelect setValue={setValue} />
      </Tabs>

      {tab === "articles" ? <ArticlesList /> : <BlogsList />}
      <Pagination value={value} />
    </StyledHomePage>
  );
};
