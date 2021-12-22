import styled from "styled-components";

export const ThemeCardOverlay = styled.div`
  position: relative;
`;

export const ThemeCard = styled.div.attrs<{ dimmed: boolean; background: string }>(p => {
  return {
    style: {
      background: `linear-gradient(130deg, ${p.background}2c, ${p.theme.colors.alternateBackground})`,
      opacity: p.dimmed ? 0.5 : 1,
    },
  };
})`
  border-radius: 8px;
  padding: 15px;
  border: 1px solid ${props => props.theme.colors.alternateBackground};
  box-shadow: 0 10px 40px ${props => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: 0.2s opacity ease-out 0s, transform ease-out 0.2s;

  &:hover {
    transform: scale(1.01) translateY(-4px);
  }
`;

export const ThemeCardHeader = styled.h1`
  font-weight: 600;
  margin-bottom: 15px;
  opacity: 0.7;
  flex: 1;
  text-align: center;
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

  background: ${props => props.theme.colors.alternateBackground};
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
