import styled from "styled-components";

export const SearchInput = styled.input`
  margin-top: 5px;
  outline: none;
  margin-bottom: 25px;
  padding: 10px 20px;
  background: transparent;
  border: 3px solid ${props => props.theme.colors.lighterBackground};
  border-radius: 5px;
  font-family: "Inter var", sans-serif;
  color: ${props => props.theme.colors.text};
`;

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text}6c;
  font-size: 12px;
`;
