import { createGlobalStyle } from "styled-components";

import { FlexCenter } from "./utils.styles.jsx";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    ${FlexCenter}
    flex-direction: column;
    font-size: 1.8rem;
    width: 100vw;
    font-family: 'Karla', sans-serif;
    background: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.violetDarker};
}

#root {
    width: 100%;
    ${FlexCenter}
    flex-direction: column;
}

a{
    text-decoration: none;
}

a:link,
a:visited{
    color: unset;
}

ul, li {
    list-style: none;
}

button {
    font-family: inherit;
}

h1, h2, h3, h4, h5 {    
    font-family: "DM Serif Display", serif;
    font-weight: 400;
}
`;

export default GlobalStyles;
