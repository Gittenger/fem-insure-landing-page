import React from "react";

import Container from "../container/container.component";

import Logo from "../../assets/logo.svg";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import BgPattern from "../../assets/bg-pattern-footer-desktop.svg";
import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  BackgroundImg,
} from "./footer.styles.jsx";

const Footer = () => (
  <FooterContainer>
    <Container>
      <FooterTop>
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="#">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="#">
              <Pinterest />
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram />
            </a>
          </li>
        </ul>
      </FooterTop>
      <FooterBottom>
        <div>
          <h6>Our Company</h6>
          <ul>
            <li>
              <a href="#">How we work</a>
            </li>
            <li>
              <a href="#">Why insure?</a>
            </li>
            <li>
              <a href="#">View Plans</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Help me</h6>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Contact</h6>
          <ul>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Live chat</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Others</h6>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
        </div>
      </FooterBottom>
      <BackgroundImg imgSrc={BgPattern} />
    </Container>
  </FooterContainer>
);

export default Footer;
