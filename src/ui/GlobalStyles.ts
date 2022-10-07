import { createGlobalStyle } from "styled-components";
import { Color } from "ui";
import { reset } from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${reset}

${theme}

body {   
    font-family: "Inter", sans-serif;
    background-color: ${Color.ExtraLight};  
    overflow: scroll;
}
`;
