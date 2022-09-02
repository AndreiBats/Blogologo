import { createGlobalStyle } from "styled-components";
import { Color } from "../config";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
   
    font-family: "Inter", sans-serif;
    background-color: ${Color.ExtraLight};    
}
`;
