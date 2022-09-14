import styled from "styled-components";
import { Color } from "../../ui";

const StyledBlogsItem = styled.li`
  background-color: ${Color.White};
  max-width: 351px;
  box-shadow: 0px 12px 40px 9px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
`;

const Description = styled.div`
  padding: 32px;
`;

const MainDate = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};
`;

export { StyledBlogsItem, MainImage, MainDate, Title, Description };
