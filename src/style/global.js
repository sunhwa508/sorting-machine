import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;  
    text-decoration:none;
    box-sizing: border-box;
    font-family: "Press Start 2P", cursive;
  }
  body {
    box-sizing: border-box;
    background-color: #000;
  }
`;

export default GlobalStyle;
