import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../../Project/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Masterbase Webdesign",
    tags: ["Design", "Branding"],
    industry: "FinTech",
    location: "Los Angeles, USA",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg",
  },
  {
    id: 2,
    title: "Space Webflow Template",
    tags: ["Design", "Development"],
    industry: "FinTech",
    location: "Los Angeles, USA",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ac6bd803221a913321d_Projects%20Image%205-p-800.jpeg",
  },
  {
    id: 3,
    title: "Fianceo 3d Assets",
    tags: ["Development", "Branding"],
    industry: "FinTech",
    location: "Los Angeles, USA",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ab5eefeeca19d60e5e9_Projects%20Image%204.jpg",
  },
  {
    id: 4,
    title: "Booster Branding",
    tags: ["Branding", "Development"],
    industry: "FinTech",
    location: "Los Angeles, USA",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120a9f6b4ab8023d3518c1_Projects%20Image%203.jpg",
  },
];

const SelectedProjects = () => {
  return (
    <Container>
      <div className="left-container">
        <Header>
          <h1>
            Popular <span>Projects</span>
          </h1>
          <p>
            Over the years, I've partnered with startups of all sizes and
            various stages to create some truly unique products. Here are a few
            that I feel were the most challenging yet rewarding.
          </p>
        </Header>
        <Grid>
          {projects
            .filter((_, idx) => idx % 2 === 0)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </Grid>
      </div>
      <div className="right-container">
        <Grid>
          {projects
            .filter((_, idx) => idx % 2 !== 0)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </Grid>
        <BtnCont>
          <Button href="/projects">
            <span>View All Projects</span>
            <RightIcon />
          </Button>
        </BtnCont>
      </div>
    </Container>
  );
};

export default SelectedProjects;

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
  max-width: 1280px;
  padding: 8rem 1rem;
  margin: auto;
  height: auto;

  display: flex;
  gap: 3rem;

  .left-container {
    flex-basis: 100%;
  }

  .right-container {
    padding-top: 6rem;
    flex-basis: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 2rem 1rem;

    .right-container {
      padding-top: 0;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;

  h1 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 4rem;
    color: black;
    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 450px) {
      font-size: 3rem;
    }
  }

  p {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 1.5rem;
    color: #555;
    margin: 2rem 0;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BtnCont = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  overflow: hidden;
  margin: 1rem 0;
  text-align: center;
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
  font-size: 3.5rem;
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
