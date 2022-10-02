import { css } from "styled-components";

export const theme = css`
  html[theme="light"] {
    --primary: #6c1bdb;
    --primaryLight: "#912EF2";
    --secondary: "#313037";
    --medium: "#98989B";
    --light: "#C1C1C3";
    --extraLight: "#EAEAEB";
    --red: "#FD3419";
    --white: "#FFFFFF";
    --gray: "#F3F3F3";
  }

  html[theme="dark"] {
    --primary: #6c1bdb;
    --primaryLight: "#912EF2";
    --secondary: "#FFFFFF";
    --medium: "#98989B";
    --light: "#C1C1C3";
    --extraLight: "#EAEAEB";
    --red: "#FD3419";
    --white: "#FFFFFF";
    --gray: "#F3F3F3";
  }
`;
