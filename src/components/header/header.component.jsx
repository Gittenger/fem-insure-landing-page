import React from "react";

import Container from "../container/container.component";

import Logo from "../../assets/logo.svg";
import { HeaderContainer, NavContainer } from "./header.styles.jsx";

const Header = () => (
  <Container>
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <NavContainer>
        <ul>
          <li>
            <a href="#">How we work</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <button>ViewPlans</button>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  </Container>
);

export default Header;
