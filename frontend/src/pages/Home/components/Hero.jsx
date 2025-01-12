import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <Content>
          <Heading>
            <div className="heading-1 overflow-hidden">
              <h1>Software Developer</h1>
            </div>
            <div className="heading-2 overflow-hidden">
              <h1>Crafting Softwares</h1>
            </div>
            <div className="heading-3 overflow-hidden">
              <h1>That People Love</h1>
            </div>
          </Heading>
          <Subheading>
            <p>
              I'm Hruthik M — A developer who works with startups looking to
              push creative boundaries and create unique user experiences.
            </p>
          </Subheading>
          <BtnCont>
            <Button href="/contact">
              <span>Book a FREE Call</span>
              <RightIcon />
            </Button>
            <Button
              className="play-btn"
              href="https://youtube.com/@mhrithik479?si=B4xlNyPRb1VLUJ-a"
            >
              <FaYoutube />
              <h1>Watch Now</h1>
            </Button>
          </BtnCont>
        </Content>
        <ImageContainer>
          <ProfileImage
            src="https://res.cloudinary.com/duozomapm/image/upload/v1736669260/myimage1.7_n7ltv9.jpg"
            alt="David Louis"
            loading="lazy"
          />
        </ImageContainer>
      </div>
    </HeroSection>
  );
};

export default Hero;

const Animation = keyframes`
  from {
    transform: translate3d(0px, 300px, 0px) rotateZ(25deg);
  }
  to {
    transform: translate3d(0px, 0px, 0px) rotateZ(0deg);
  }
`;

const TextAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const HeroSection = styled.section`
  max-width: 1280px;
  margin: auto auto 1rem auto;
  height: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 0.75fr;
    grid-template-rows: auto;
    padding: 10rem 1.5rem 1.5rem 1.5rem;
    color: white;
    overflow: hidden;

    @media (max-width: 991px) {
      row-gap: 3rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }

    @media (max-width: 479px) {
      row-gap: 3rem;
      flex-direction: column;
    }
  }
`;

const Content = styled.div``;

const Heading = styled.h1`
  .overflow-hidden {
    overflow: hidden;
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: bold;
    color: white;
  }

  .heading-1 {
    h1 {
      font-size: 4rem;
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${TextAnimation} 500ms linear;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  }

  .heading-2 {
    h1 {
      animation: ${TextAnimation} 500ms linear;
      animation-fill-mode: forwards;
      animation-delay: 150ms;
      opacity: 0;
    }
  }

  .heading-3 {
    h1 {
      animation: ${TextAnimation} 500ms linear;
      animation-fill-mode: forwards;
      animation-delay: 300ms;
      opacity: 0;
    }
  }

  @media (max-width: 479px) {
    .overflow-hidden {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

const Subheading = styled.div`
  overflow: hidden;
  margin: 1.5rem 0;
  p {
    max-width: 470px;
    animation: ${TextAnimation} 500ms linear;
    animation-fill-mode: forwards;
    animation-delay: 479ms;
    opacity: 0;
    font-size: 1.1rem;
    color: darkgray;
  }
`;

const Button = styled.a`
  animation: ${TextAnimation} 500ms linear;
  animation-fill-mode: forwards;
  animation-delay: 600ms;
  opacity: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #ff00ff, #ff7300);
  color: white;
  padding: 0 0.5rem;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  font-size: 2.5rem;
  white-space: nowrap;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-size: 1.2rem;
    padding: 1rem 0.5rem;
  }
`;

const BtnCont = styled.div`
  overflow: hidden;
  margin-top: 1.5rem;

  display: inline-flex;
  flex-direction: column;
  gap: 1rem;

  .play-btn {
    flex: 1;
    border: 1px solid white;
    background: rgba(255, 255, 255, 0.1);
    animation: ${TextAnimation} 500ms linear;
    animation-fill-mode: forwards;
    animation-delay: 750ms;
    opacity: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    border-radius: 50px;
    gap: 0.5rem;

    svg {
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
      font-size: 2.5rem;
      color: red;
    }

    h1 {
      font-size: 1.5rem;
      padding: 0.7rem 0.5rem;
    }
  }
`;

const RightIcon = styled(FaArrowRight)`
  color: black;
  border-radius: 50%;
  background: white;
  padding: 0.7rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  animation: ${Animation} 600ms linear;
  padding: 25px;
  position: relative;
  max-width: 470px;
  background: url("https://cdn.prod.website-files.com/61f03747d8d407ed117df27f/61f11c12ccb99e089078fc33_Main%20Image%20BG.png")
    no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 991px) {
    grid-row-start: 2;
  }

  @media (max-width: 479px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
