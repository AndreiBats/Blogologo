import React from "react";
import { StyledFooter, ExpDate, ThemeToggle } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <ExpDate>©2022 Blogolog</ExpDate>
      <ThemeToggle type="button">Dark theme</ThemeToggle>
    </StyledFooter>
  );
};
