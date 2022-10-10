import styled from "styled-components";
import { Color } from "ui";

const StyledArticleContentPage = styled.div`
  margin: 0 15px;
`;

const ButtonHome = styled.button`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: ${Color.Secondary};
  background-color: ${Color.ExtraLight};
`;

const Title = styled.h3`
  margin-bottom: 48px;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  align-items: center;
  color: ${Color.Secondary};
`;

const MainImage = styled.img`
  width: 100%;
  margin-bottom: 48px;
`;

const Description = styled.p`
  margin-bottom: 48px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${Color.Secondary};
`;

export { StyledArticleContentPage, Title, Description, MainImage, ButtonHome };
