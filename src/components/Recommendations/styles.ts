import styled from "styled-components";
import { Color, Media } from "ui";

const StyledRecommendations = styled.li`
  position: relative;
  height: 400px;
  max-width: 351px;
  border-radius: 16px;
  box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  background-color: ${Color.White};

  ${Media.Medium} {
    height: 320px;
    margin: 0 auto;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;

  ${Media.Medium} {
    height: 160px;
  }
`;

const Description = styled.div`
  padding: 32px;

  ${Media.Medium} {
    padding: 16px;
  }
`;

const MainDate = styled.h3`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};

  ${Media.Medium} {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};

  ${Media.Medium} {
    font-size: 14px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${Color.Primary};
  color: ${Color.White};

  ${Media.Medium} {
    padding: 8px;
  }
`;

export { StyledRecommendations, MainImage, MainDate, Title, Description, Button };
