import styled from "styled-components";
import { Code, DocumentAdd } from "../components/icons";

export function Navbar() {
  return (
    <StyledNavbar>
      <a href="https://github.com/alii/linear-style/blob/main/README.md">
        <DocumentAdd /> Submit
      </a>
      <a href="https://github.com/alii/linear-style">
        <Code /> GitHub
      </a>
    </StyledNavbar>
  );
}

export const StyledNavbar = styled.div`
  @media only screen and (max-width: 600px) {
    text-align: center;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  a {
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    color: ${props => props.theme.colors.text};
    align-items: center;
    transition: 100ms ease-out;
    margin: 0 10px;
    opacity: 0.6;

    &:hover {
      color: ${props => props.theme.colors.text};
      opacity: 1;
    }

    svg {
      height: 18px;
      width: 18px;
      margin-right: 10px;
    }
  }
`;
