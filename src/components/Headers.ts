import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.4em;
  font-weight: 800;
  font-size: 65px;
  color: ${props => props.theme.colors.text};
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.text}c0;
  font-weight: 500;
  font-size: 22px;
`;

export const LearnMore = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  color: ${p => p.theme.colors.text}c0;
  font-weight: 500;
  font-size: 18px;
`;

export const Link = styled.a`
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
  font-weight: bold;
`;
