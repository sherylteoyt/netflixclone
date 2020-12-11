import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *before, *:after {
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialised;
        -mox-osx-font-smoothing: grayscale;
        background-color: black;
        color: #33333;
        font-size: 16px;
    }
`;
