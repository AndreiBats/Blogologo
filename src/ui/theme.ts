import { css } from "styled-components";

export const theme = css`
  html[theme="light"] {
    --primary: #6c1bdb;
    --primaryLight: #912ef2;
    --secondary: #313037;
    --medium: #98989b;
    --light: #c1c1c3;
    --extraLight: #eaeaeb;
    --red: #fd3419;
    --white: #ffffff;
    --gray: #f3f3f3;
  }

  html[theme="dark"] {
    --primary: #6c1bdb;
    --primaryLight: #912ef2;
    --secondary: #ffffff;
    --medium: #98989b;
    --light: #98989b;
    --extraLight: #313037;
    --red: #fd3419;
    --white: #98989b;
    --gray: #f3f3f3;
  }
`;
