import { StyledFooter, CopyRight, ThemeToggle } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <CopyRight>©2022 Blogolog</CopyRight>
      <ThemeToggle type="button">Dark theme</ThemeToggle>
    </StyledFooter>
  );
};
