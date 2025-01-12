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
            <MdEmail />
            mhrithik479@gmail.com
          </ContactItem>
          <ContactItem>
            <FaPhoneAlt />
            +91-7483229386
          </ContactItem>
        </ContactInfo>
        <FooterLinks>
          <Section>
            <SectionTitle>Pages</SectionTitle>
            <LinkList>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">About Me</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Social</SectionTitle>
            <LinkList>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Facebook</li>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Visit</SectionTitle>
            <LinkList className="address">
              <a>Bangalore, Karnataka</a>
            </LinkList>
          </Section>
        </FooterLinks>
      </FooterComp>
      <div className="bottom-footer">
        <p>
          © 2025-2026 All rights reserved | Designed and Developed by{" "}
          <a href="https://hruthik.onrender.com">Hruthik M</a>
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
  max-width: 1480px;
  margin: auto;
  padding: 2rem 3rem;
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

    @media (max-width: 479px) {
      font-size: 0.9rem;

      p {
        max-width: 90%;
        margin: auto;
      }
    }
  }

  @media (max-width: 762px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 479px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.div`
  padding: 8rem 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 479px) {
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

  @media (max-width: 991px) {
    text-align: left;
  }

  @media (max-width: 479px) {
    font-size: 3rem;
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

  max-width: 550px;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 2rem auto;

  @media (max-width: 991px) {
    text-align: left;
    margin: 2rem 0;
  }
`;

const BtnCont = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  overflow: hidden;
  margin-top: 1.5rem;

  @media (max-width: 991px) {
    text-align: left;
  }

  @media (max-width: 479px) {
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
  margin: auto;
  padding: 5rem 20px;

  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 479px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const ContactItem = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;

  @media (max-width: 479px) {
    font-size: 1.2rem;
  }
`;

const FooterLinks = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 479px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Section = styled.div`
  max-width: 200px;
  .address {
    text-align: left;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.3rem 0;
  text-align: left;

  @media (max-width: 479px) {
    font-size: 1.2rem;
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

    a {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 479px) {
      font-size: 1rem;
    }
  }
`;
