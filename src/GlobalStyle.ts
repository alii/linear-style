import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html { font-family: 'Inter', sans-serif; }

    @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div.app {
        padding: 10vw 0;
    }

    h1.title {
        text-align: center;
        margin-bottom: 50px;
        font-weight: 800;
        font-size: 500%;
    }
`;
