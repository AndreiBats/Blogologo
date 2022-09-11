import React from "react";

import {
  Description,
  MainDate,
  MainImage,
  StyledArticlesItem,
  Title,
} from "./styles";

export const ArticlesItem = () => {
  return (
    <StyledArticlesItem>
      <MainImage>
        <img src="../assets/overlay.jpg" alt="" />
      </MainImage>
      <Description>
        <MainDate>21.03.2022</MainDate>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nam
        </Title>
      </Description>
    </StyledArticlesItem>
  );
};
