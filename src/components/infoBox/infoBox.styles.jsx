import styled, { css } from "styled-components";

const leftStyles = css`
  align-items: flex-start;
  text-align: left;
`;

const rightStyles = css`
  align-items: flex-end;
  text-align: right;
`;

const centerStyles = css`
  align-items: center;
  text-align: center;
`;

const getAlignment = ({ alignment }) =>
  alignment === "left"
    ? leftStyles
    : alignment === "right"
    ? rightStyles
    : alignment === "center"
    ? centerStyles
    : leftStyles;

export const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  ${getAlignment}
`;
