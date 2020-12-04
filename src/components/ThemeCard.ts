import styled from "styled-components";

export const ThemeCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.text}05;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const ThemeCardHeader = styled.h1<{ color: string }>`
  font-weight: 600;
  margin-bottom: 15px;
  color: ${(props) => props.color};
  flex: 1;
`;

export const ThemeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 80vw;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: auto;
  }
`;
