import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaPenNib,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { MdDesignServices, MdHome, MdMessage } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";
import { GrLogin } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import Blog1 from "./Blogs/Blog1";
import Timer from "../../../components/Timer";

const object = {
  theme: "dark",
  title: "Hruthik M",
  sizing: {
    minWidth: "290px",
  },
  NavItems: [
    { title: "Home", type: "normal", href: "/", icon: <MdHome /> },
    {
      title: "Services",
      type: "normal",
      href: "/services",
      icon: <MdDesignServices />,
    },
    {
      title: "Projects",
      type: "normal",
      href: "/projects",
      icon: <FaProjectDiagram />,
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
      icon: <FaPenNib />,
    },
    {
      name: "Contact Me",
      type: "button",
      href: "/contact",
      icon: <IoChatbubblesOutline />,
    },
  ],
};

const project = {
  id: 1,
  title: "College Management System",
  tags: ["Design", "Branding"],
  src: "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg",
  techStack: ["MERN", "Framer Motion"],
  liveDemo: "https://superflow.co",
  github: "https://superflow.co",
  sections: [
    [
      { title: "Overview:" },
      {
        p: "Managing college operations can often be challenging due to the vast amount of data and processes involved. To address these challenges, I developed a College Management System website using the MERN Stack.",
      },
      {
        p: "This system allows colleges to manage placement data efficiently through features like:",
      },
      {
        ul: [
          "Login Authentication",
          "Role-Based Access Control",
          "Admin Panel for Placement Data",
          "Interactive Dashboards",
          "Responsive Design",
        ],
      },
      {
        p: "The project is designed to streamline college operations while providing a user-friendly experience for both students and administrators.",
      },
    ],
    [
      { title: "Key Features:" },
      {
        ol: [
          {
            strong: "Login Authentication:",
            ul: [
              "Secure login for students, faculty, and administrators.",
              "Protected routes to ensure data security.",
            ],
          },
          {
            strong: "Role-Based Access Control (RBAC):",
            ul: [
              "Different user roles (Admin, Student, Faculty) with access restricted based on roles.",
              "Admins manage placement data, while students view relevant placement opportunities.",
            ],
          },
          {
            strong: "Admin Panel for Placement Data:",
            ul: [
              "Admins can easily add, update, and delete placement-related data (e.g., companies, job descriptions, deadlines).",
              "Manage records of students placed in various companies.",
            ],
          },
          {
            strong: "Interactive Dashboards:",
            ul: [
              "Students: View personalized placement stats and eligible companies.",
              "Admins: Monitor overall placement statistics, student participation, and job trends.",
            ],
          },
        ],
      },
      {
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos totam ex excepturi velit cumque quasi corrupti autem similique sapiente pariatur?",
      },
      {
        ul: [
          "Secure login for students, faculty, and administrators.",
          "Protected routes to ensure data security.",
        ],
      },
    ],
    [
      { title: "Technical Stack:" },
      {
        p: "This project is built using the MERN Stack, leveraging its flexibility and scalability:",
      },
      {
        ol: [
          {
            strong: "Frontend:",
            ul: [
              "React.js: Used for its component-based architecture and dynamic UI updates.",
              "React Router: For seamless navigation between pages.",
              "Axios: For API requests.",
            ],
          },
          {
            strong: "Backend:",
            ul: [
              "Node.js & Express.js: Created secure RESTful APIs for handling authentication, role-based access, and placement data operations.",
            ],
          },
          {
            strong: "Database:",
            ul: [
              "MongoDB: Used as a NoSQL database to store user data, placement records, and admin details.",
              "Mongoose: For schema modeling and database interaction.",
            ],
          },
          {
            strong: "Other Tools:",
            ul: [
              "JWT (JSON Web Tokens): For secure authentication.",
              "BCrypt.js: For hashing user passwords.",
              "Cloudinary: To store images (e.g., student resumes or company logos).",
            ],
          },
        ],
      },
    ],
    [
      {
        title: "Architecture and Workflow:",
      },
      {
        src: "https://res.cloudinary.com/duozomapm/image/upload/v1736274839/Workflow_wxhske.png",
      },
      {
        ol: [
          {
            strong: "Login:",
            ul: [
              "Users log in via their credentials.",
              "Authentication is handled using JWTs.",
            ],
          },
          {
            strong: "Role-Based Routing:",
            ul: [
              "Admins can access placement management panels.",
              "Students can view eligible placements via their dashboard.",
            ],
          },
          {
            strong: "Placement Management:",
            ul: ["Admins can add/edit placement opportunities in real time."],
          },
          {
            strong: "Data Visualization:",
            ul: [
              "Dashboards display statistics like total placements, companies visited, and student participation rates.",
            ],
          },
        ],
      },
    ],
    [
      {
        title: "Challenges Solved:",
      },
      {
        ol: [
          {
            strong: "Building Grid Layout",
            ul: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate magnam quidem sapiente, deserunt esse doloremque eligendi autem nam! Dignissimos, repellendus.",
            ],
          },
          {
            strong: "Responsive-ness for all devices",
            ul: [
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, enim! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolor?",
            ],
          },
        ],
      },
    ],
    [
      { title: "Architecture and Workflow:" },
      { p: "Authentication Middleware:" },
      {
        src: "https://res.cloudinary.com/duozomapm/image/upload/v1736275746/Screenshot_2025-01-08_002812_okep88.png",
      },
      { p: "Placement Data Schema:" },
      {
        src: "https://res.cloudinary.com/duozomapm/image/upload/v1736275887/Screenshot_2025-01-08_003055_lmifsf.png",
      },
    ],
    [
      { title: "Future Scope:" },
      {
        ol: [
          {
            strong: "Add Notifications:",
            ul: [
              "Email notifications for students about new placement opportunities.",
            ],
          },
          {
            strong: "Integrate Chat Functionality:",
            ul: ["A direct communication channel between students and admins."],
          },
          {
            strong: "Analytics Dashboard:",
            ul: [
              "More advanced analytics to predict placement trends and success rates.",
            ],
          },
        ],
      },
    ],
    [
      { title: "Conclusion:" },
      {
        p: "The College Management System showcases my ability to build scalable, user-friendly applications using the MERN Stack. It solves a real-world problem and demonstrates skills in authentication, database management, and responsive design.",
      },
      {
        ul: [
          "GitHub Repository: View Code",
          "Live Demo: Try It Here",
          "Contact Me: +91-7483229386",
        ],
      },
    ],
  ],
  Nextproject: 3,
  NextProjects: [
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
  ],
};

const ProjectBlog = () => {
  return (
    <>
      <Navbar object={object} />

      <ProjectBlogSection>
        <Container>
          <Header>
            <div className="header">
              <div className="header-left">
                {project.tags &&
                  project.tags.map((tag, tagidx) => (
                    <span className="tags" key={`${tag}-${tagidx}`}>
                      {tag}
                    </span>
                  ))}
              </div>
              <a className="header-right" href={`/blog/${project.id}`}>
                <h3>Blog</h3>
                <FaExternalLinkAlt />
              </a>
            </div>
            <h1>{project.title && project.title}</h1>
          </Header>

          <Content>
            <div className="image-wrapper">
              <img src={project.src && project.src} alt="Design Example" />
            </div>
            <div>
              <InfoGrid>
                <Grid1 className="info-grid">
                  <h3>
                    Get the complete <span>source code</span> of the project
                  </h3>
                  <div className="sub-grid-1">
                    <div className="image">
                      <img
                        src="https://res.cloudinary.com/duozomapm/image/upload/v1737303272/Screenshot_2025-01-19_215349-removebg-preview_ceqk7i.png"
                        alt="special offer"
                      />
                    </div>
                    <div className="price">
                      <p>Up to 30% off</p>
                      <h2>
                        ₹699
                        <span>₹999</span>
                      </h2>
                    </div>
                  </div>
                  <div className="navigations">
                    <a className="button btn-1">Claim Offer</a>
                    <a className="button">
                      <Timer
                        localStorageKey={"day"}
                        duration={24 * 60 * 60 * 1000}
                      />
                    </a>
                  </div>
                </Grid1>

                <Grid2 className="info-grid">
                  <h3>
                    Get 4 personalized <span>1:1</span> weekly project
                    explanation calls
                  </h3>
                  <div className="sub-grid-2">
                    <div className="image">
                      <img
                        src="https://res.cloudinary.com/duozomapm/image/upload/v1737301098/Screenshot_2025-01-19_202637-removebg-preview_rw33qg.png"
                        alt="special offer"
                      />
                    </div>
                    <div className="price">
                      <p>Up to 50% off</p>
                      <h2>
                        ₹999
                        <span>/week</span>
                      </h2>
                    </div>
                  </div>
                  <div className="navigations nav-2">
                    <a className="button btn-1">Grab 1:1</a>
                    <a className="button">
                      <Timer
                        localStorageKey={"week"}
                        duration={7 * 24 * 60 * 60 * 1000}
                      />
                    </a>
                  </div>
                </Grid2>

                <Grid3 className="info-grid">
                  <h3>
                    View the <span>Live</span> Demo or watch{" "}
                    <span>Youtube</span> for tutorial
                  </h3>
                  <div className="grid3-nav">
                    <a className="btn-1 button">Visit the website</a>
                    <a className="button">Watch on youtube</a>
                  </div>
                </Grid3>
              </InfoGrid>
            </div>
          </Content>
        </Container>
      </ProjectBlogSection>

      <TextSection>
        <Blog1 />
      </TextSection>

      <MoreSection>
        <h2>
          You <span>Might</span> Also Like
        </h2>
        <Grid>
          <div className="sub-grid">
            {project.NextProjects &&
              project.NextProjects.map((project, idx) => (
                <ProjectCard project={project} key={`pjt-${idx}`} />
              ))}
          </div>
        </Grid>
      </MoreSection>

      <FooterSection>
        <Footer header={true} />
      </FooterSection>
    </>
  );
};

export default ProjectBlog;

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

const FooterSection = styled.div`
  position: relative;
  background-color: #2b4162;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
`;

const ProjectBlogSection = styled.section`
  background-color: #2b4162;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10rem 0 2rem 0;
  color: #333;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 991px) {
    padding: 10rem 2rem 1rem 2rem;
  }

  @media (max-width: 479px) {
    padding: 10rem 1rem 1rem 1rem;
  }
`;

const Header = styled.header`
  text-align: left;
  margin-bottom: 2rem;

  h1 {
    animation: ${Animation} 1000ms ease-in-out;
    font-size: 4rem;
    color: white;

    @media (max-width: 479px) {
      font-size: 3rem;
      margin: 1rem 0;
    }
  }

  .tags {
    animation: ${Animation} 1000ms ease-in-out;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.2rem 1rem;
    border-radius: 20px;
    margin-right: 0.5rem;
    font-size: 1.2rem;

    @media (max-width: 479px) {
      font-size: 1rem;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-right {
      animation: ${Animation} 1000ms ease-in-out;
      cursor: pointer;
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      padding: 0.2rem 1rem;
      border-radius: 20px;
      color: white;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;

const Content = styled.div`
  .image-wrapper {
    animation: ${Animation} 1000ms ease-in-out;
    height: 500px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  .info-grid {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    background-color: #2b4162;
    background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
    flex: 1;
    text-align: center;
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid white;
    color: white;
  }

  .navigations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .btn-1 {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
    }
  }

  .button {
    display: block;
    background-color: transparent;
    border: 1px solid white;
    width: 100%;
    padding: 0.7rem 0;
    border-radius: 5px;
    outline: none;
    font-weight: 800;
    font-size: 1.1rem;
    color: white;
    margin: 0.5rem 0 0 0;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4%);
    }
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 762px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;

const Grid1 = styled.div`
  h3 {
    text-align: left;
    margin-left: 1rem;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .sub-grid-1 {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    margin: 0.5rem 0;

    .price {
      max-width: max-content;
      padding: 0.5rem;
      p {
        max-width: max-content;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        text-align: left;
        color: white;
        font-weight: 800;
        background: linear-gradient(90deg, #ff00ff, #ff7300);
      }
      h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        span {
          display: inline-block;
          margin: 0 0 0 0.4rem;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.6);
          position: relative;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 1px;
            background: white;
          }
        }
      }
    }
  }
`;

const Grid2 = styled.div`
  h3 {
    text-align: left;
    margin-left: 1rem;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .sub-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    margin: 0.5rem 0;

    .price {
      max-width: max-content;
      padding: 0.5rem;
      p {
        max-width: max-content;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        text-align: left;
        color: white;
        font-weight: 800;
        background: linear-gradient(90deg, #ff00ff, #ff7300);
      }
      h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        span {
          display: inline-block;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.6);
          position: relative;
        }
      }
    }
  }

  .nav-2 {
    margin: -0.5rem 0 0 0;
  }
`;

const Grid3 = styled.div`
  h3 {
    text-align: left;
    margin-left: 1rem;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .grid3-nav {
    margin: 2rem 0;
    display: grid;
    gap: 0.5rem;

    .btn-1 {
      background: #2f1c6a;
    }
  }
`;

const TextSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .text-section {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    color: #333;

    @media (max-width: 762px) {
      padding: 1rem;
    }
  }

  @media (max-width: 991px) {
    padding: 0 2rem;
  }

  @media (max-width: 479px) {
    padding: 0 1rem;
  }
`;

const Section = styled.section`
  h2 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    color: black;
    font-size: 2.5rem;
    margin: 3rem 0 1rem 0;

    @media (max-width: 479px) {
      font-size: 2rem;
      margin: 2rem 0 1rem 0;
    }
  }

  .iamge-wrapper {
    padding: 0 2rem;
    height: auto;
    width: 100%;
  }

  img {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  ul {
    padding: 0 2rem;
    list-style-type: disc;
    margin: 1rem 0 1rem 1.5rem;
  }

  ul li {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p,
  ol,
  ul {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 1.2rem;
    margin: 1rem 0;
    white-space: pre-line;
    padding: 0 2rem;
    line-height: 1.5;

    @media (max-width: 479px) {
      padding: 0 1rem;
    }
  }
`;

const Button = styled.a`
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  .next-btn {
    background: linear-gradient(90deg, #ff00ff, #ff7300);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    cursor: pointer;
    gap: 1rem;

    h2 {
      color: white;
      @media (max-width: 479px) {
        font-size: 1.1rem;
      }
    }

    svg {
      color: #ff7300;
      padding: 0.5rem;
      background: white;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const MoreSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem 2rem;

  h2 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 4rem;
    text-align: center;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 991px) {
      text-align: left;
    }

    @media (max-width: 479px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 479px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

const Grid = styled.div`
  .sub-grid {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 479px) {
      margin: 2rem 0;
    }
  }
`;
