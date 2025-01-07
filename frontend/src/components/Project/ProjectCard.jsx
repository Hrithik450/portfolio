import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, ClassProp }) => {
  return (
    <CardSection>
      <Card className={`${ClassProp} Card`}>
        <ImageContainer>
          <img src={project.image} alt={project.title} />
        </ImageContainer>
        <Content>
          <Tags>
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </Tags>
          <h3>{project.title}</h3>
          <Details>
            <p>
              <strong>Industry:</strong>
              {project.industry}
            </p>
            <p>
              <strong>Location:</strong>
              {project.location}
            </p>
          </Details>
          <ViewProjectButton>
            <p>VIEW PROJECT</p>
            <RightIcon />
          </ViewProjectButton>
        </Content>
      </Card>
    </CardSection>
  );
};

export default ProjectCard;

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

const CardSection = styled.section`
  flex: 1;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2%);
  }

  .Card {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  .Card-1 {
    animation: ${Animation} 1000ms linear;
  }

  .Card-2 {
    animation: ${Animation} 1000ms linear;

    @media (max-width: 450px) {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 40%;
    }
  }
`;

const Card = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Content = styled.div`
  padding: 2rem 0;

  h3 {
    font-size: 2rem;
    color: white;
    margin: 1rem 0;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 1rem;
    padding: 0.2rem 1rem;
    border-radius: 20px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 2rem 0;
  font-size: 0.9rem;
  color: white;

  p {
    margin: 0.3rem 0;
    font-size: 1.3rem;
  }

  strong {
    color: rgba(255, 255, 255, 0.6);
    display: block;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 450px) {
    max-width: 100%;
  }
`;

const ViewProjectButton = styled.a`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0rem;
  font-size: 1.3rem;
  border: none;
  background-color: transparent;

  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const RightIcon = styled(FaArrowRight)`
  border-radius: 50%;
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  font-size: 2rem;
  padding: 0.5rem;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
