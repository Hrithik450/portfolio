import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import ProjectCard from "./ProjectCard";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import { MdHome, MdMessage } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

const NextProjects = [
  {
    title: "Masterbase Webdesign",
    tags: ["Design", "Branding"],
    industry: "FinTech",
    location: "Los Angeles, USA",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg",
  },
  {
    title: "Space Webflow Template",
    tags: ["Design", "Development"],
    industry: "FinTech",
    location: "Los Angeles, USA",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ac6bd803221a913321d_Projects%20Image%205-p-800.jpeg",
  },
];

const object = {
  theme: "dark",
  title: "Portfolio",
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

const ProjectBlog = () => {
  return (
    <>
      <Navbar object={object} />
      <ProjectBlogSection>
        <Container>
          <Header>
            <div>
              <span className="tags">Design</span>
              <span className="tags">Branding</span>
            </div>
            <h1>College Management System</h1>
          </Header>

          <Content>
            <div className="image-wrapper">
              <img
                src="https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg"
                alt="Design Example"
              />
            </div>
            <div>
              <InfoGrid>
                <div>
                  Tech Stack
                  <span>MERN</span>
                  <span>Framer Motion</span>
                </div>
                <div>
                  Live Demo <br />
                  <a href="https://superflow.co">www.superflow.co</a>
                </div>
                <div>
                  Git Hub <br />
                  <a href="https://superflow.co">www.superflow.co</a>
                </div>
              </InfoGrid>
            </div>
          </Content>
        </Container>
      </ProjectBlogSection>

      <TextSection>
        <div className="text-section">
          <Section>
            <h2>What is the project?</h2>
            <p>
              Managing college operations can often be challenging due to the
              vast amount of data and processes involved. To address these
              challenges, I developed a College Management System website using
              the MERN Stack.
            </p>
            <p>
              This system allows colleges to manage placement data efficiently
              through features like:
            </p>
            <p>
              <ul>
                <li>Login Authentication</li>
                <li>Role-Based Access Control</li>
                <li>Admin Panel for Placement Data</li>
                <li>Interactive Dashboards</li>
                <li>Responsive Design</li>
              </ul>
            </p>
            <p>
              The project is designed to streamline college operations while
              providing a user-friendly experience for both students and
              administrators.
            </p>
          </Section>

          <Section>
            <h2>Key Features</h2>
            <p>
              <ol>
                <li>
                  <strong>Login Authentication:</strong>
                  <ul>
                    <li>
                      Secure login for students, faculty, and administrators.
                    </li>
                    <li>Protected routes to ensure data security.</li>
                  </ul>
                </li>
                <li>
                  <strong>Role-Based Access Control (RBAC):</strong>
                  <ul>
                    <li>
                      Different user roles (Admin, Student, Faculty) with access
                      restricted based on roles.
                    </li>
                    <li>
                      Admins manage placement data, while students view relevant
                      placement opportunities.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Admin Panel for Placement Data:</strong>
                  <ul>
                    <li>
                      Admins can easily add, update, and delete
                      placement-related data (e.g., companies, job descriptions,
                      deadlines).
                    </li>
                    <li>
                      Manage records of students placed in various companies.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Interactive Dashboards:</strong>
                  <ul>
                    <li>
                      Students: View personalized placement stats and eligible
                      companies.
                    </li>
                    <li>
                      Admins: Monitor overall placement statistics, student
                      participation, and job trends.
                    </li>
                  </ul>
                </li>
              </ol>
            </p>
          </Section>

          <Section>
            <h2>Tech Stack</h2>
            <p>
              This project is built using the MERN Stack, leveraging its
              flexibility and scalability:
            </p>
            <p>
              <ol>
                <li>
                  <strong>Frontend:</strong>
                  <ul>
                    <li>
                      React.js: Used for its component-based architecture and
                      dynamic UI updates.
                    </li>
                    <li>
                      React Router: For seamless navigation between pages.
                    </li>
                    <li>Axios: For API requests.</li>
                  </ul>
                </li>

                <li>
                  <strong>Backend:</strong>
                  <ul>
                    <li>
                      Node.js & Express.js: Created secure RESTful APIs for
                      handling authentication, role-based access, and placement
                      data operations.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Database:</strong>
                  <ul>
                    <li>
                      MongoDB: Used as a NoSQL database to store user data,
                      placement records, and admin details.
                    </li>
                    <li>
                      Mongoose: For schema modeling and database interaction.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Other Tools:</strong>
                  <ul>
                    <li>JWT (JSON Web Tokens): For secure authentication.</li>
                    <li>BCrypt.js: For hashing user passwords.</li>
                    <li>
                      Cloudinary: To store images (e.g., student resumes or
                      company logos).
                    </li>
                  </ul>
                </li>
              </ol>
            </p>
          </Section>

          <Section>
            <h2>Architecture and Workflow</h2>

            <div className="image-wrapper">
              <img src="https://res.cloudinary.com/duozomapm/image/upload/v1736274839/Workflow_wxhske.png" />
            </div>

            <p>
              <ol>
                <li>
                  <strong>Login:</strong>
                  <ul>
                    <li>Users log in via their credentials.</li>
                    <li>Authentication is handled using JWTs.</li>
                  </ul>
                </li>

                <li>
                  <strong>Role-Based Routing:</strong>
                  <ul>
                    <li>Admins can access placement management panels.</li>
                    <li>
                      Students can view eligible placements via their dashboard.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Placement Management:</strong>
                  <ul>
                    <li>
                      Admins can add/edit placement opportunities in real time.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Data Visualization:</strong>
                  <ul>
                    <li>
                      Dashboards display statistics like total placements,
                      companies visited, and student participation rates.
                    </li>
                  </ul>
                </li>
              </ol>
            </p>
          </Section>

          <Section>
            <h2>Development Process</h2>
            <p>Challenges Faced:</p>
            <p>
              <ol>
                <li>
                  <strong>Implementing Role-Based Access Control:</strong>
                  <ul>
                    <li>
                      Solved by creating custom middleware to differentiate user
                      roles.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Handling Large Placement Data:</strong>
                  <ul>
                    <li>
                      Used efficient MongoDB queries to fetch, sort, and filter
                      data dynamically.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Making the Application Responsive:</strong>
                  <ul>
                    <li>
                      Leveraged CSS Grid and Media Queries for a seamless
                      mobile-first experience.
                    </li>
                  </ul>
                </li>
              </ol>

              <strong>Unique Solutions:</strong>
              <ul>
                <li>Custom Hooks for fetching and managing API data.</li>
                <li>
                  Reusable Components for forms and tables to improve code
                  maintainability.
                </li>
              </ul>
            </p>
          </Section>

          <Section>
            <h2>Code Snippets</h2>
            <p>Authentication Middleware:</p>
            <div className="image-wrapper">
              <img src="https://res.cloudinary.com/duozomapm/image/upload/v1736275746/Screenshot_2025-01-08_002812_okep88.png" />
            </div>

            <p>Placement Data Schema:</p>
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/duozomapm/image/upload/v1736275887/Screenshot_2025-01-08_003055_lmifsf.png"
                alt=""
              />
            </div>
          </Section>

          <Section>
            <h2>Future Scope</h2>
            <p>
              <ol>
                <li>
                  <strong>Add Notifications:</strong>
                  <ul>
                    <li>
                      Email notifications for students about new placement
                      opportunities.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Integrate Chat Functionality:</strong>
                  <ul>
                    <li>
                      A direct communication channel between students and
                      admins.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Analytics Dashboard:</strong>
                  <ul>
                    <li>
                      More advanced analytics to predict placement trends and
                      success rates.
                    </li>
                  </ul>
                </li>
              </ol>
            </p>
          </Section>

          <Section>
            <h2>Conclusion</h2>
            <p>
              The College Management System showcases my ability to build
              scalable, user-friendly applications using the MERN Stack. It
              solves a real-world problem and demonstrates skills in
              authentication, database management, and responsive design.
            </p>

            <p>
              <ul>
                <li>
                  GitHub Repository: <a>View Code</a>
                </li>
                <li>
                  Live Demo: <a>Try It Here</a>
                </li>
                <li>
                  Contact Me: <a>+91-7483229386</a>
                </li>
              </ul>
            </p>
          </Section>
        </div>

        <Button>
          <div className="next-btn">
            <h2>VIEW NEXT PROJECT</h2>
            <FaArrowRight />
          </div>
        </Button>
      </TextSection>

      <MoreSection>
        <h2>
          You <span>Might</span> Also Like
        </h2>
        <Grid>
          <div className="sub-grid">
            {NextProjects &&
              NextProjects.map((project, idx) => (
                <ProjectCard project={project} key={`pjt-${idx}`} />
              ))}
          </div>
        </Grid>
      </MoreSection>

      <Footer header={true} />
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

const Grid = styled.div`
  .sub-grid {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;

    @media (max-width: 450px) {
      margin: 2rem 0;
      gap: 2rem;
    }
  }
`;

const ProjectBlogSection = styled.section`
  background: black;
`;

const MoreSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 0 2rem 0;

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

    @media (max-width: 450px) {
      text-align: left;
      font-size: 3rem;
    }
  }

  @media (max-width: 450px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10rem 0 0 0;
  color: #333;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 450px) {
    padding: 10rem 1rem 1rem 1rem;
  }
`;

const Button = styled.a`
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);

  .next-btn {
    background: linear-gradient(90deg, #ff00ff, #ff7300);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 1rem 0;
    cursor: pointer;
    gap: 1rem;

    h2 {
      color: white;
      @media (max-width: 450px) {
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

const TextSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .text-section {
    padding: 2rem;
    color: #333;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 450px) {
    padding: 0 1rem;

    .text-section {
      padding: 1rem;
    }
  }
`;

const Header = styled.header`
  text-align: left;
  margin-bottom: 2rem;

  h1 {
    animation: ${Animation} 1000ms ease-in-out;
    font-size: 4rem;
    color: white;

    @media (max-width: 450px) {
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

    @media (max-width: 450px) {
      font-size: 1rem;
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
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;

  div {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    flex: 1;
    text-align: center;
    padding: 1rem;
    background-color: #f9f9f9;
    font-size: 1.1rem;

    span {
      display: block;
      font-weight: bold;
      margin-top: 0.5rem;
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

  @media (max-width: 450px) {
    flex-direction: column;
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

    @media (max-width: 450px) {
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

  p {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 1.2rem;
    margin: 1rem 0;
    white-space: pre-line;
    padding: 0 2rem;
    line-height: 1.5;

    @media (max-width: 450px) {
      padding: 0 1rem;
    }
  }
`;
