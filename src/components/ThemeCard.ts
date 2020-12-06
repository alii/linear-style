import styled from "styled-components";

export const ThemeCardOverlay = styled.div`
  position: relative;
`;

export const ThemeCard = styled.div<{ dimmed: boolean }>`
  border-radius: 8px;
  padding: 15px 15px 20px;
  border: 2px solid ${props => props.theme.colors.text}05;
  box-shadow: 0 13px 40px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(
    130deg,
    ${props => props.theme.colors.lighterBackground},
    ${props => props.theme.colors.lighterBackground}0c
  );
  opacity: ${({ dimmed }) => (dimmed ? 0.5 : 1)};
  transition: 0.2s opacity ease-out 0s, transform ease-out 0.2s;

  &:hover {
    transform: scale(1.01) translateY(-4px);
  }
`;

export const ThemeCardHeader = styled.h1`
  font-weight: 600;
  margin-bottom: 15px;
  opacity: 0.5;
  flex: 1;
`;

export const ThemeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-self: center;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);

    ${ThemeCard} {
      width: 100%;
      text-align: center;
    }
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
