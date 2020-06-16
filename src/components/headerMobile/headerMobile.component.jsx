import React from "react";

import Container from "../container/container.component";

import Logo from "../../assets/logo.svg";
import { HeaderMobileContainer } from "./headerMobile.styles.jsx";

const HeaderMobile = () => (
  <HeaderMobileContainer>
    <Container>
      <div>
        <img src={Logo} alt="" />
      </div>
      <button>Toggle</button>
    </Container>
  </HeaderMobileContainer>
);

export default HeaderMobile;
