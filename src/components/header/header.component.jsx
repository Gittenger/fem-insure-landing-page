import React from "react";

import Container from "../container/container.component";
import Button from "../Button/Button.component";

import Logo from "../../assets/logo.svg";
import { HeaderContainer, NavContainer } from "./header.styles.jsx";

const Header = () => (
  <HeaderContainer>
    <Container>
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
            <Button content="view plans" type="dark" />
          </li>
        </ul>
      </NavContainer>
    </Container>
  </HeaderContainer>
);

export default Header;
