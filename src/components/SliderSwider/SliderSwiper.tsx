import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArticleRecommendations } from "../ArticleRecommendations/ArticleRecommendations";

export const SliderSwiper = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <ArticleRecommendations />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleRecommendations />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleRecommendations />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleRecommendations />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
