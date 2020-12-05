import styled from "styled-components";
import { getBrightness } from "../core/utils";

export const ThemeCard = styled.div`
  padding: 15px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.text}05;
  box-shadow: 0px 13px 40px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: #1b1c1d;
`;

export const ThemeCardHeader = styled.h1<{ color: string }>`
  font-weight: 600;
  margin-bottom: 15px;
  color: ${(props) =>
    getBrightness(props.color) < 50 ? props.theme.colors.text : props.color};
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
