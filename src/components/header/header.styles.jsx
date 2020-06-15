import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

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
