import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const projects = [
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. Project 3Lorem dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. ",
    link: "https://yourwebsite.com/project1",
  },
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ac6bd803221a913321d_Projects%20Image%205-p-800.jpeg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. Project 3Lorem dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. ",
    link: "https://yourwebsite.com/project2",
  },
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ab5eefeeca19d60e5e9_Projects%20Image%204.jpg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. Project 3Lorem dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. ",
    link: "https://yourwebsite.com/project3",
  },
];

const Welcome = ({ userName }) => {
  return (
    <Container>
      <SubContainer>
        <MainTitle>Hruthik M</MainTitle>

        <Grid>
          <div className="left">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1736669260/myimage1.7_n7ltv9.jpg"
              alt="Welcome"
            />
          </div>
          <div className="right">
            <h2>
              Welcome, <span>{userName}!</span>
            </h2>
            <p>
              Welcome to my Personal Brand, a hub for developers and tech
              enthusiasts! Here, you'll find valuable project source code
              bundles to kickstart your next big idea, alongside insightful
              blogs sharing my latest experiences and project journeys. Explore,
              learn, and innovate with me!
            </p>
            <div className="btn-wrapper">
              <button href="https://yourwebsite.com/get-started">
                Let's Get Started
              </button>
            </div>
          </div>
        </Grid>

        <ProjectDiv>
          <h2>Checkout Our Recent Bundles!</h2>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <p>{project.title}</p>
                  <a href={project.link}>Buy Now</a>
                </div>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectDiv>

        <Header>
          <Title>
            Have projects in mind? <br />
            <span>Let’s work together</span>
          </Title>
          <Subtitle>
            I’m David Louis—a designer who works with startups looking to push
            creative boundaries
          </Subtitle>
          <BtnCont>
            <Button href="/contact">
              <span>Book a FREE Call</span>
            </Button>
          </BtnCont>
          <Footer>
            © 2025-2026 All rights reserved | Designed and Developed by Hruthik
            M
          </Footer>
        </Header>
      </SubContainer>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  background-color: #ba2d0b;
  background-image: linear-gradient(
    319deg,
    #ba2d0b 0%,
    #fe7f2d 37%,
    #ffbf46 100%
  );

  padding: 5rem 1rem;
  line-height: 1.4;
  color: #333;
`;

const SubContainer = styled.div`
  background: white;
  box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.7);
  max-width: 550px;
  margin: auto;
  border-radius: 20px;
`;

const MainTitle = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  padding: 1rem 1rem 1rem 1rem;
`;

const Grid = styled.div`
  padding: 0 1rem 2rem 1rem;

  .left {
    max-width: 350px;
    margin: 1rem auto;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid white;

    img {
      width: 100%;
      display: block;
      height: auto;
    }

    @media (max-width: 479px) {
      max-width: 100%;
      margin: 1rem auto;
    }
  }

  .right {
    h2 {
      text-align: center;
      color: #333;
      font-size: 2rem;

      @media (max-width: 479px) {
        text-align: left;
      }
    }

    p {
      text-align: left;
      font-size: 1.1rem;
      padding: 1rem 0.5rem;
      color: black;

      @media (max-width: 479px) {
        padding: 1rem 0rem;
      }
    }

    .btn-wrapper {
      text-align: center;
      margin: 0 0.5rem;

      @media (max-width: 479px) {
        text-align: left;
        margin: 1rem 0 0 0;
      }

      button {
        border: none;
        padding: 1rem 2rem;
        text-align: center;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-size: 1.3rem;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
`;

const ProjectDiv = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  padding: 2rem 1rem;
  h2 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    color: black;
  }
`;

const ProjectsGrid = styled.div`
  margin-top: 30px;
`;

const ProjectCard = styled.div`
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  display: flex;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 2rem 0;
  border-radius: 10px;

  .image-container {
    max-height: 160px;
    max-width: 160px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid white;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .project-content {
    padding: 0 1rem;
    p {
      color: white;
      margin-bottom: 1rem;
    }

    a {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      display: block;
      text-align: center;
      margin: 1.5rem 0 0 0;
      font-size: 1rem;
      font-weight: 800;
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
  }
`;

const Header = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  padding: 2rem 20px 0 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: black;
`;

const Subtitle = styled.p`
  max-width: 550px;
  margin: auto;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 1rem auto;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
`;

const BtnCont = styled.div`
  overflow: hidden;
  margin-top: 1.5rem;
  text-align: center;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #ff00ff, #ff7300);
  color: white;
  padding: 0 0.5rem;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  font-size: 2.5rem;
  white-space: nowrap;
  gap: 0.5rem;

  span {
    font-size: 1.2rem;
    padding: 1rem 0.5rem;
  }
`;

const Footer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  padding: 1rem 0;
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;
  color: black;
`;
