import styled from "styled-components";

export const ColorDisplay = styled.div<{ color: string }>`
  min-width: 150px;
  background: ${props => props.color};
  border-radius: 3px;
  border: 2px solid ${props => props.color}cc;
  margin-top: 3px;
  height: 20px;
`;
