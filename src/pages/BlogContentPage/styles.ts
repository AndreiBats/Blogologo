import styled from "styled-components";
import { Color } from "../../ui";

const StyledArticleContentPage = styled.div`
  margin: 0 15px;
`;

const ButtonHome = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: ${Color.ExtraLight};
  margin-bottom: 20px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  align-items: center;
  color: ${Color.Secondary};
  margin-bottom: 48px;
`;

const MainImage = styled.img`
  width: 100%;
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${Color.Secondary};
  margin-bottom: 48px;
`;

export { StyledArticleContentPage, Title, Description, MainImage, ButtonHome };
