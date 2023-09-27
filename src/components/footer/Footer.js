import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import {FooterContainer,FooterLeftDescription,FooterLeftSocialWrapper,FooterLeftTitle,FooterLinksTitle,FooterLinksWrapper,FooterWrapperLeft,FooterWrapperRight,
} from "./Fotter.styled";

const Footer = () => {
  return (
    
      <FooterContainer>
        <FooterWrapperLeft>
          <FooterLeftTitle>About us</FooterLeftTitle>
          <FooterLeftDescription> Experience the future of e-commerce design with SHOPR. Limitlessdesign possibilities. </FooterLeftDescription>
          <FooterLeftSocialWrapper>
            <FaInstagram />
            <FiFacebook />
            <FiTwitter />
            <HiOutlineMail />
          </FooterLeftSocialWrapper>
        </FooterWrapperLeft>
        <FooterWrapperRight>
          <FooterLinksWrapper>
            <FooterLinksTitle>Information</FooterLinksTitle>
            <ul>
              <li>
                <a href="/" >Shipping Policy</a>
              </li>
              <li>
                <a href="/">Returns & Refunds</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Frequently asked</a>
              </li>
            </ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksTitle>Company</FooterLinksTitle>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>

              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Cookie Policy</a>
              </li>
            </ul>
          </FooterLinksWrapper>
        </FooterWrapperRight>
      </FooterContainer>
   
  );
};

export default Footer;