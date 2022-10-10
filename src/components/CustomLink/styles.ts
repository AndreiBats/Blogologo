import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const StyledCustomLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
  fill: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
  stroke: ${({ $isActive }) => ($isActive ? Color.Secondary : Color.Primary)};
`;
