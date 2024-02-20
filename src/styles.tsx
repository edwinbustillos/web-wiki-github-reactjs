import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        background-color: #22272e;
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-style: normal;
    }

    body {
        background-color: #22272e;
        color: #fff;
    }
`;