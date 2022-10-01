import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { StyledSlider, Slide } from "./styles";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { useAppSelector } from "../../app/hooks";
import { getDetailsArticle } from "../../app/selectors/articleDetailsSelectors";
import { Link } from "react-router-dom";

export const Slider = () => {
  const { articleRecommendations } = useAppSelector(getDetailsArticle);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <StyledSlider ref={ref} className="keen-slider">
      {articleRecommendations.map((article) => {
        return (
          <Slide className="keen-slider__slide number-slide1">
            <Link to={`/article/${article.id}`}>
              <ArticlesItem article={article} key={article.id} />
            </Link>
          </Slide>
        );
      })}
    </StyledSlider>
  );
};
