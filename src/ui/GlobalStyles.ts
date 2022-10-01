import { createGlobalStyle } from "styled-components";
import { Color } from ".";
import { Reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
${Reset}

body {
   
    font-family: "Inter", sans-serif;
    background-color: ${Color.ExtraLight};    
}


`;
