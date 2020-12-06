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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  a {
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    color: ${(props) => props.theme.colors.text}5c;
    align-items: center;
    transition: 200ms ease-out 0s;
    margin: 0 10px;

    &:hover {
      color: ${(props) => props.theme.colors.text}ff;
    }

    svg {
      height: 18px;
      width: 18px;
      margin-right: 10px;
    }
  }
`;
