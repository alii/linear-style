import styled from "styled-components";

export const ColorDisplay = styled.div.attrs<{ color: string }>(props => {
  return {
    style: {
      background: props.color,
      border: props.color,
    },
  };
})`
  min-width: 150px;
  border-radius: 3px;
  margin-top: 3px;
  height: 20px;
`;
