import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HeaderContainer = styled.header`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
`;

export const NavContainer = styled.nav`
  ${FlexCenter}
  width: 40%;

  ul {
    ${FlexCenter}
    justify-content: space-between;
    padding: 2rem 0;
    width: 100%;
  }
`;
