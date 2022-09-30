import { useAppSelector } from "../../app/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelectors";
import { IArticle } from "../../types";
import { Slider } from "../index";
import { StyledArticleRecommendations } from "./styles";

export const ArticleRecommendations = () => {
  return (
    <StyledArticleRecommendations>
      <Slider />
    </StyledArticleRecommendations>
  );
};
