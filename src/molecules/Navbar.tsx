import styled from "styled-components";
import { Code, DocumentAdd } from "../icons";

export function Navbar() {
  return (
    <StyledNavbar>
      <a href="https://github.com/alii/linear-style">
        <DocumentAdd /> Submit Theme
      </a>
      <a href="https://github.com/alii/linear-style">
        <Code /> GitHub
      </a>
    </StyledNavbar>
  );
}

export const StyledNavbar = styled.div`
  a {
    padding: 10px;
    padding-left: 0;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    color: ${(props) => props.theme.colors.text}5c;
    align-items: center;
    margin-right: 25px;

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
