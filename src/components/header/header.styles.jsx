import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileS } = device;

export const HeaderContainer = styled.header`
  ${FlexCenter}
  width: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  position: relative;
  z-index: 1000;

  & > div:first-child {
    ${FlexCenter}
    justify-content: space-between;
  }

  @media ${mobileS} {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  ${FlexCenter}
  width: 40%;

  ul {
    ${FlexCenter}
    justify-content: space-between;
    padding: 2rem 0;
    width: 100%;

    a {
      color: ${({ theme: { colors } }) => colors.greyViolet};
      transition: color 0.3s;

      &:hover {
        color: ${({ theme: { colors } }) => colors.violetDarker};
      }
    }
  }
`;
