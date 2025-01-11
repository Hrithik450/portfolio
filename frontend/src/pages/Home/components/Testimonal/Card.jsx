import React from "react";
import styled from "styled-components";

const TestimonialCard = ({ slide }) => {
  return (
    <Card>
      <Stars>★★★★★</Stars>
      <Heading>{slide && slide.title}</Heading>
      <Quote>{slide && slide.description}</Quote>
      <Profile>
        <Avatar src="https://via.placeholder.com/50" alt="Pritom Rani" />
        <ProfileInfo>
          <Name>{slide && slide.name}</Name>
          <Role>{slide && slide.role}</Role>
        </ProfileInfo>
      </Profile>
    </Card>
  );
};

export default TestimonialCard;

const Card = styled.div`
  position: relative;
  background-color: #212121;
  color: #ffffff;
  padding: 3rem;
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #ff00ff, #ff7300);
  }

  @media (max-width: 479px) {
    padding: 1.5rem;
  }
`;

const Stars = styled.div`
  color: #ff9800;
  font-size: 2rem;
`;

const Heading = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 10px 0;

  @media (max-width: 479px) {
    font-size: 1.8rem;
  }
`;

const Quote = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  color: #bdbdbd;
  margin: 2rem 0;

  @media (max-width: 479px) {
    font-size: 1.2rem;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Avatar = styled.img`
  flex: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Role = styled.span`
  font-size: 1rem;
  color: #bdbdbd;

  @media (max-width: 479px) {
    font-size: 1.2rem;
  }
`;
