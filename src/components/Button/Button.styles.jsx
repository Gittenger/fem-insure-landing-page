import styled, { css } from "styled-components";

const DarkStyles = css`
  border: ${({ theme: { colors } }) => `${colors.violetDarker} 2px solid`};
  background: transparent;

  &:hover {
    border: transparent 2px solid;
    background: ${({ theme: { colors } }) => colors.violetDarker};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

const LightStyles = css`
  border: ${({ theme: { colors } }) => `${colors.white} 2px solid`};
  color: ${({ theme: { colors } }) => colors.white};
  background: transparent;

  &:hover {
    border: transparent 2px solid;
    background: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.violetDarker};
  }
`;

const getStyles = ({ type }) =>
  type === "dark" ? DarkStyles : type === "light" ? LightStyles : DarkStyles;

export const CustomButton = styled.button`
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s;

  ${getStyles}
`;
