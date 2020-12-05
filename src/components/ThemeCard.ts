import styled, { keyframes } from "styled-components";
import { getBrightness } from "../core/utils";

export const ThemeCardOverlay = styled.div`
  position: relative;
`;

export const ThemeCard = styled.div<{ dimmed: boolean }>`
  padding: 15px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.text}05;
  box-shadow: 0px 13px 40px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: #1b1c1d;
  opacity: ${({ dimmed }) => (dimmed ? "0.5" : "1")};
  transition: 0.2s opacity ease-out 0s;
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
  align-self: center;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: auto;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90vw;
  }
`;

export const ThemeCopiedLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: black;
  z-index: 1;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 4px;
  text-align: center;
  animation: 0.2s labelAnimation ease-out;

  @keyframes labelAnimation {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;
