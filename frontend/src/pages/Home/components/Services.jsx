import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLaptop } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { GrBundle } from "react-icons/gr";

const Services = () => {
  const services = [
    {
      title: "Web Developer",
      description:
        "Empowering Startups with cutting-edge web solutions, I design and develop responsive, user-friendly websites that ensure seamless digital experiences.",
      icon: <FaLaptop style={{ color: "blue" }} />,
    },
    {
      title: "Content Creator",
      description:
        "Crafting compelling content across platforms, I specialize in storytelling, engaging audiences, and delivering impactful messages to elevate brands.",
      icon: <ImYoutube style={{ color: "red" }} />,
    },
    {
      title: "Bundle Manager",
      description:
        "Streamline your digital presence with Bundle Manager: we create, manage, and sell personalized website bundles to amplify your brand.",
      icon: <GrBundle style={{ color: "lightgreen" }} />,
    },
  ];

  return (
    <ServicesSection>
      <Title>
        <h1>
          Look at my <span>services</span>
        </h1>
      </Title>
      <Subtitle>
        If you are looking for someone who will help you to build your digital
        web presence then congratulations!
      </Subtitle>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <CardIcon>{service.icon}</CardIcon>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </ServicesSection>
  );
};

export default Services;

const Animation = keyframes`
  from {
    transform: scale(0.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ServicesSection = styled.section`
  max-width: 1280px;
  margin: auto;
  height: auto;
  color: #fff;
  padding: 6rem 20px;
  text-align: center;

  @media (max-width: 479px) {
    padding: 40px 20px;
  }
`;

const Title = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  margin-bottom: 10px;

  h1 {
    font-size: 4rem;
    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 479px) {
      font-size: 3rem;
      text-align: left;
    }
  }
`;

const Subtitle = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  font-size: 1.2rem;
  margin: 1rem 0 4rem 0;
  color: darkgray;

  @media (max-width: 479px) {
    text-align: left;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 762px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  background-color: #1c1c1c;
  padding: 4rem 2rem;
  text-align: left;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  flex-basis: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #ff00ff, #ff7300);
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin: 1.5rem 0;

  @media (max-width: 479px) {
    font-size: 1.8rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  color: #aaa;
`;
