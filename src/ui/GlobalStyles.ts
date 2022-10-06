import { createGlobalStyle } from "styled-components";
import { Color } from "ui";
import { Reset } from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${Reset}

${theme}

body {   
    font-family: "Inter", sans-serif;
    background-color: ${Color.ExtraLight};  
    overflow-y: visible;  
}



`;
