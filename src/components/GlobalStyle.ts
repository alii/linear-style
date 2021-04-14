import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html { font-family: 'Inter', sans-serif; }

    @supports (font-variation-settings: normal) {
      html { font-family: 'Inter var', sans-serif; }
    }

    :root {
      --bg: #F7F7F7;
      --text: #2f2f2f;
      --alt-bg: #DDDDDD;
      --accent: #8327c9;
      --input-bg: #ffffff;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #121212;
        --text: #cccccc;
        --alt-bg: #1b1c1d;
        --accent: #848CD0;
        --input-bg: #171717;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--bg);
      color: var(--text);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    div.app {
      padding: 5vw 0;
      display: flex;
      flex-direction: column;
      width: 80vw;

      @media only screen and (max-width: 600px) {
        width: 90vw;
      }
    }
`;
