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
        padding: 5vw 0;
        display: flex;
        flex-direction: column;
    }

    h1.title {
        text-align: center;
        margin-bottom: 0.4em;
        font-weight: 800;
        font-size: 65px;
        color: white;
        
    }

    span.subtitle {
        text-align: center;
        margin-bottom: 50px;
        color: #8A8F98;
        font-weight: 500;
        font-size: 22px;
    }
    
    input {
      margin-bottom: 25px;
      padding: 10px 20px;
      background: transparent;
      border: 3px solid ${(props) => props.theme.colors.lighterBackground};
      border-radius: 5px;
      font-family: 'Inter var', sans-serif;
      color: ${(props) => props.theme.colors.text};
    }
    
    label {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.colors.text}6c;
      font-size: 12px;
      
      input {
        margin-top: 5px;
      }
    }
`;
