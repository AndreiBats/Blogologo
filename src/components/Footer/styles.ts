import styled from "styled-components";
import { Color } from "../../ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
`;

const ExpDate = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const FooterToggle = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { StyledFooter, FooterToggle, ExpDate };
