import React from "react";
import styled, { keyframes } from "styled-components";
import { MdHome, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import ProjectCard from "./components/ProjectCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

const object = {
  theme: "dark",
  title: "Hruthik M",
  sizing: {
    minWidth: "290px",
  },
  NavItems: [
    { title: "Home", type: "normal", href: "/", icon: <MdHome /> },
    { title: "Services", type: "normal", href: "/services", icon: <MdHome /> },
    {
      title: "Projects",
      type: "normal",
      href: "/projects",
      icon: <MdMessage />,
    },
    {
      title: "About Me",
      type: "normal",
      href: "/about",
      icon: <FaUser />,
    },
    {
      title: "Blog",
      type: "normal",
      href: "/blogs",
      icon: <FaUser />,
    },
    {
      name: "Contact Me",
      type: "button",
      href: "/contact",
      icon: <IoMdLogIn />,
    },
  ],
};

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

const chunkArray = (array, chunkSize) => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};

const chunkedProjects = chunkArray(projects, 2);

const Projects = () => {
  return (
    <ProjectSection>
      <Navbar object={object} />
      <Container>
        <Title>
          <span>Projects</span> I have done
        </Title>

        <Grid>
          {chunkedProjects &&
            chunkedProjects.map((chunk, chnidx) => (
              <div className="sub-grid" key={`chn-${chnidx}`}>
                {chunk &&
                  chunk.map((project, idx) => (
                    <ProjectCard
                      project={project}
                      ClassProp={`Card-${chnidx * 2 + idx + 1}`}
                      key={`pjt-${idx}`}
                    />
                  ))}
              </div>
            ))}
        </Grid>
      </Container>
      <Footer header={true} />
    </ProjectSection>
  );
};

export default Projects;

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProjectSection = styled.section`
  background-color: black;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  height: auto;
  padding: 12rem 4rem 0 4rem;

  @media (max-width: 479px) {
    padding: 4rem 1rem 0 1rem;
  }
`;

const Title = styled.h1`
  animation: ${Animation} 1000ms linear;
  color: white;
  text-align: center;
  margin: 2rem 0;
  font-size: 4rem;

  span {
    background: linear-gradient(90deg, #ff00ff, #ff7300);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 479px) {
    font-size: 3rem;
    text-align: left;
    margin: 6rem 0 4rem 0;
  }
`;

const Grid = styled.div`
  .sub-grid {
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;

    @media (max-width: 479px) {
      margin: 2rem 0;
      gap: 2rem;
    }
  }
`;
