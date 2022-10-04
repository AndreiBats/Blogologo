import styled from "styled-components";
import { Color, Media } from "../../ui";

const StyledArticlesItem = styled.li`
  background-color: ${Color.White};
  max-width: 351px;
  box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  position: relative;
  height: 400px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.5s;
  }

  ${Media.Medium} {
    height: 320px;
    margin: 0 auto;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;

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
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};
  margin-bottom: 8px;

  ${Media.Medium} {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};
  margin-bottom: 16px;

  ${Media.Medium} {
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  color: ${Color.White};
  background-color: ${Color.Primary};
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.5s;
  }

  ${Media.Medium} {
    padding: 8px;
  }
`;

export { StyledArticlesItem, MainImage, MainDate, Title, Description, Button };
