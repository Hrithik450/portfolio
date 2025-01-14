import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const projects = [
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam.",
    link: "https://yourwebsite.com/project1",
  },
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ac6bd803221a913321d_Projects%20Image%205-p-800.jpeg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam.",
    link: "https://yourwebsite.com/project2",
  },
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ab5eefeeca19d60e5e9_Projects%20Image%204.jpg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam.",
    link: "https://yourwebsite.com/project3",
  },
];

const Welcome = ({ userName }) => {
  return (
    <Container>
      <MainTitle>
        Greetings from <span>Hruthik M!</span>
      </MainTitle>

      <Grid>
        <div className="left">
          <Image
            src="https://res.cloudinary.com/duozomapm/image/upload/v1736837316/Screenshot_2025-01-14_122706_aq7xmi.png"
            alt="Welcome"
          />
        </div>
        <div className="right">
          <h2>
            Welcome, <span>{userName}!</span>
          </h2>
          <p>
            Welcome to my Personal Brand, a hub for developers and tech
            enthusiasts! Here, you'll find valuable project source code bundles
            to kickstart your next big idea, alongside insightful blogs sharing
            my latest experiences and project journeys. Explore, learn, and
            innovate with me!
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
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  color: #333;
  line-height: 1.4;
`;

const MainTitle = styled.h1`
  text-align: center;
  color: #333;
  font-size: 3.5rem;
  padding: 0 1rem;

  @media (max-width: 479px) {
    font-size: 2.5rem;
    text-align: left;

    span {
      display: block;
    }
  }
`;

const Grid = styled.div`
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 0rem;
  }

  .left {
    margin: 2rem auto;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid white;

    @media (max-width: 479px) {
      margin: 1rem auto;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: #333;
      font-size: 2.5rem;

      span {
        @media (max-width: 479px) {
          display: block;
        }
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
      width: 100%;
      text-align: left;
      margin: 1rem 0.5rem;

      @media (max-width: 479px) {
        margin: 1rem 0rem;
      }

      button {
        border: none;
        display: block;
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
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  padding: 2rem 1rem 4rem 1rem;
  h2 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2.5rem;
    color: white;

    @media (max-width: 479px) {
      text-align: left;
    }
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 762px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  background: white;
  gap: 1rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 762px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr 1.5fr;
  }

  .image-container {
    max-height: 160px;
    max-width: 160px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid white;

    @media (max-width: 479px) {
      max-height: 100%;
      max-width: 100%;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .project-content {
    p {
      color: black;
      margin-bottom: 1rem;
    }

    a {
      background: #007bff;
      font-size: 1.1rem;
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const Header = styled.div`
  padding: 2rem 20px;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 479px) {
    padding: 4rem 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: white;

  @media (max-width: 479px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  max-width: 550px;
  margin: auto;
  font-size: 1.1rem;
  font-weight: 300;
  margin: 1rem auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 479px) {
    margin: 2rem 0;
    text-align: left;
  }
`;

const BtnCont = styled.div`
  overflow: hidden;
  margin-top: 1.5rem;
  text-align: center;

  @media (max-width: 479px) {
    text-align: left;
    margin-top: 3rem;
  }
`;

const Button = styled.a`
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
