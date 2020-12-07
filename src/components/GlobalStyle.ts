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
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
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
