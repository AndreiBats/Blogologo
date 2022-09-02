import styled from "styled-components";
import { Color } from "../../config";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
`;

const ExpDate = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};
`;

const FooterToggle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};
`;

export { StyledFooter, FooterToggle, ExpDate };
