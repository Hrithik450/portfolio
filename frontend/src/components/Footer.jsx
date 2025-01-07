import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = ({ header }) => {
  return (
    <Container>
      {header && (
        <Header>
          <Title>
            Have projects in mind? <br />
            <span>
              Let’s work <Highlight>together</Highlight>
            </span>
          </Title>
          <Subtitle>
            I’m David Louis—a designer who works with startups looking to push
            creative boundaries
          </Subtitle>
          <BtnCont>
            <Button href="/contact">
              <span>Book a FREE Call</span>
              <RightIcon />
            </Button>
          </BtnCont>
        </Header>
      )}
      <FooterComp>
        <ContactInfo>
          <ContactItem>
            <Icon>
              <MdEmail />
            </Icon>
            hello@herison.com
          </ContactItem>
          <ContactItem>
            <Icon>
              <FaPhoneAlt />
            </Icon>
            +468-356-356
          </ContactItem>
        </ContactInfo>
        <FooterLinks>
          <Section>
            <SectionTitle>Pages</SectionTitle>
            <LinkList>
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About Me</li>
              <li>Blog</li>
              <li>Contact</li>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Social</SectionTitle>
            <LinkList>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Dribbble</li>
              <li>Facebook</li>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Visit</SectionTitle>
            <LinkList>
              <li>Barking Home Road-31 New York, USA</li>
            </LinkList>
          </Section>
        </FooterLinks>
      </FooterComp>
      <div className="bottom-footer">
        <p>
          © 2025-2026 All rights reserved | Designed and Developed by{" "}
          <a>Hruthik M</a>
        </p>
      </div>
    </Container>
  );
};

export default Footer;

const Animation = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 2rem 0;
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;

  .bottom-footer {
    font-size: 1.1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 0 0 0;
    a {
      cursor: pointer;
      color: blue;
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 450px) {
      font-size: 0.9rem;
    }
  }
`;

const Header = styled.div`
  padding: 8rem 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 450px) {
    padding: 4rem 20px;
  }
`;

const Title = styled.h1`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 30px;

  @media (max-width: 450px) {
    text-align: left;
  }
`;

const BtnCont = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  overflow: hidden;
  margin-top: 1.5rem;

  @media (max-width: 450px) {
    margin-top: 3rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  color: white;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  font-size: 3rem;
  white-space: nowrap;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }
`;

const RightIcon = styled(FaArrowRight)`
  color: black;
  border-radius: 50%;
  background: white;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FooterComp = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 5rem 20px;

  @media (max-width: 450px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 1rem 20px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const ContactItem = styled.div`
  margin: 1rem 20px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 1.2rem;
`;

const FooterLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;

const Section = styled.div`
  max-width: 200px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0;
  text-align: left;

  @media (max-width: 450px) {
    text-align: center;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    text-align: left;
    margin: 1rem 0;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 450px) {
      text-align: center;
    }
  }
`;
