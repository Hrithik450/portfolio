import React from "react";
import { MdHome, MdMessage } from "react-icons/md";
import { FaArrowRight, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import styled, { keyframes } from "styled-components";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

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

const BlogPage = () => {
  const Blog = {
    id: 1,
    title: "Master Responsive Layouts with This Simple Fix!",
    tags: ["Coding", "Web Design"],
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1736439463/Copy_of_AI_s_Strangest_Creations_6_wmucg9.png",
    techStack: ["MERN", "Framer Motion"],
    liveDemo: "https://superflow.co",
    github: "https://superflow.co",
    sections: [
      [
        {
          p: "Have you ever spent hours trying to make a perfectly responsive layout using Flexbox, only to see it act unpredictably? Well, let me tell you about my struggle today. I thought I had everything figured out... until I didn’t.",
        },
        {
          p: "I was working on a simple card layout — three cards in a row, perfectly spaced out. It looked beautiful on desktop screens, and I thought, 'Yeah, this is going to be easy to make responsive.' But then... disaster struck.",
        },
      ],
      [
        { title: "The Problem" },

        {
          p: "Initially, I used Flexbox to arrange three cards in a row. Each card was styled with flex-basis: 100% for larger screens, and justify-content: space-between ensured proper spacing between the cards. This worked perfectly on screens wider than 1024px. (You can see the code below)",
        },
        {
          src: "https://res.cloudinary.com/duozomapm/image/upload/v1736441163/Screenshot_2025-01-09_222445_whe0h3.png",
        },
        {
          p: "Note:- I used styled-components library for styling purpose. But, It doesn't matter, Because the lines of codes are same for even normal or tailwind css",
        },
        {
          p: "As soon as I added flex-wrap: wrap for screens smaller than 991 pixels, I thought, 'This will make one card wrap to the next row when the space gets too tight.' Instead... all three cards decided to jump to their own rows!",
        },
        {
          src: "https://res.cloudinary.com/duozomapm/image/upload/v1736442929/Screenshot_2025-01-09_225442_b4efcg.png",
        },
        {
          p: "Now, I don’t know about you, but this wasn’t what I signed up for. And it got worse! Every little tweak I made only seemed to break something else. At this point, I was pulling my hair out!",
        },
        {
          p: "If you were in my position. How would you approach this problem? and How fast you would have solved it!! Let me know in the comment section.",
        },
      ],
      [
        { title: "The Realization" },
        {
          p: "So after spending hours fiddling with flex-basis, justify-content, and align-items, I realized: maybe Flexbox isn’t the right tool for this job. And that’s when I thought of CSS Grid.",
        },
        { p: "Why grid?" },
        {
          p: "Grid is built for layouts like this! It gives you precise control over rows and columns. So, I scrapped the Flexbox code and switched to Grid. Let me show you how it worked.",
        },
      ],
      [
        {
          title: "The Solution:",
        },
        {
          p: "Here’s what I did. For desktop screens, I defined my grid like this: grid-template-columns: 1fr 1fr 1fr;. This created three equally spaced columns. Simple, right?",
        },
        {
          p: "Then, for screens smaller than 991 pixels, I switched to two columns using grid-template-columns: 1fr 1fr;. Now, just one card wraps to the next row when space gets tight.",
        },
        {
          p: "And finally, for mobile screens, I used grid-template-columns: 1fr; so each card occupies its own row.",
        },
        {
          src: "https://res.cloudinary.com/duozomapm/image/upload/v1736445397/Screenshot_2025-01-09_233451_balvtq.png",
        },
      ],
      [
        {
          title: "Why Grid Worked Better?",
        },
        { p: " Here’s why CSS Grid worked so well for this problem:" },
        {
          ol: [
            {
              strong: "Precise Control:",
              ul: [
                "I could define exactly how many cards should appear in each row using grid-template-columns. No more guessing with flex-basis or dealing with wrapping issues.",
              ],
            },
            {
              strong: "Automatic Responsiveness:",
              ul: [
                "The 1fr unit distributes space equally, making layouts balanced without manual width calculations.",
              ],
            },
            {
              strong: "Simple Gaps:",
              ul: [
                "The gap property made it super easy to add spacing between rows and columns without fiddling with margins. This may not play an important factor, As this property also works well in flex-box too!",
              ],
            },
            {
              strong: "Cleaner Code:",
              ul: [
                "Switching to Grid eliminated a lot of unnecessary complexity.",
              ],
            },
          ],
        },
      ],
      [
        { title: "When to Choose Grid Over Flexbox:" },
        {
          p: "Eventually Flexbox is excellent for one-dimensional layouts. But, Grid shines in scenarios requiring precise two-dimensional control (rows and columns). Use Grid when:",
        },
        {
          ul: [
            "You need consistent control over the number of items in a row at different breakpoints.",
            "Wrapping behavior in Flexbox creates unexpected results.",
            "Your layout involves both rows and columns with predictable alignment.",
          ],
        },
      ],
      [
        { title: "Final Thoughts:" },
        {
          p: "So, what’s the moral of the story? Sometimes, it’s not about fixing your Flexbox — it’s about choosing the right tool for the job. CSS Grid was a lifesaver for this layout, and I think it might save you some frustration too.",
        },
        {
          p: "Before we wrap up, if you're interested in reading similar type of articles, make sure to check out my website. I'll leave the link in the description below, but just a heads-up—the website is currently under a bit of construction. If you've faced any similar challenges or have any related problems, feel free to reach out to me via email. I’d be happy to make a video on it, and hopefully, it can be valuable and helpful to others who are struggling with the same issue. Thanks for watching, and I will see you in my next video!😊",
        },
      ],
    ],
    Nextblog: 3,
  };

  return (
    <>
      <Navbar object={object} />

      <ProjectBlogSection>
        <Container>
          <Header>
            <div className="header">
              <div className="header-left">
                {Blog.tags &&
                  Blog.tags.map((tag, tagidx) => (
                    <span className="tags" key={`${tag}-${tagidx}`}>
                      {tag}
                    </span>
                  ))}
              </div>
              <a className="header-right" href="#">
                <h4>Youtube</h4>
                <FaExternalLinkAlt />
              </a>
            </div>
            <h1>{Blog.title && Blog.title}</h1>
          </Header>

          <Content>
            <div className="image-wrapper">
              <img src={Blog.src && Blog.src} alt="Design Example" />
            </div>
            <div>
              <InfoGrid>
                <div>
                  Today's Sponser Ad
                  {/* {Blog.techStack &&
                    Blog.techStack.map((stack, stackidx) => (
                      <span key={`stack-${stackidx}`}>{stack}</span>
                    ))} */}
                </div>
                <div>
                  Today's Sponser Ad
                  <br />
                  {/* <a href={Blog.liveDemo && Blog.liveDemo}>View Website</a> */}
                </div>
                <div>
                  Today's Sponser Ad
                  <br />
                  {/* <a href="https://superflow.co">www.superflow.co</a> */}
                </div>
              </InfoGrid>
            </div>
          </Content>
        </Container>
      </ProjectBlogSection>

      <TextSection>
        <div className="text-section">
          {Blog.sections &&
            Blog.sections.map((section, sidx) => (
              <Section key={`sec-${sidx}`}>
                <h2>{section[0].title}</h2>
                {section &&
                  section.map((para, pidx) =>
                    para.ol ? (
                      <ol key={`ol-${pidx}`}>
                        {para.ol.map((olItem, olIndex) => (
                          <li key={`li-${olIndex}`}>
                            <strong>{olItem.strong}</strong>
                            {olItem.ul && (
                              <ul>
                                {olItem.ul.map((ulItem, ulIndex) => (
                                  <li key={`ul-${ulIndex}`}>{ulItem}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ol>
                    ) : para.ul ? (
                      <ul key={`ul-${pidx}`}>
                        {para.ul.map((ulItem, ulIndex) => (
                          <li key={`ul-item-${ulIndex}`}>{ulItem}</li>
                        ))}
                      </ul>
                    ) : para.src ? (
                      <div className="image-wrapper" key={`ul-${pidx}`}>
                        <img src={para.src && para.src} />
                      </div>
                    ) : (
                      <p key={`ul-${pidx}`}>{para.p && para.p}</p>
                    )
                  )}
              </Section>
            ))}
        </div>

        <Button href={`/blog/${Blog.Nextblog}`}>
          <div className="next-btn">
            <h2>VIEW NEXT BLOG</h2>
            <FaArrowRight />
          </div>
        </Button>
      </TextSection>

      <Footer header={true} />
    </>
  );
};

export default BlogPage;

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

const ProjectBlogSection = styled.section`
  background: black;
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

const Header = styled.header`
  text-align: left;
  margin-bottom: 2rem;

  h1 {
    animation: ${Animation} 1000ms ease-in-out;
    font-size: 4rem;
    color: white;

    @media (max-width: 450px) {
      font-size: 2.5rem;
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
      font-size: 0.8rem;
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
    border: 1px solid white;
    overflow: hidden;

    @media (max-width: 450px) {
      height: auto;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
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

const TextSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 5rem 0;

  .text-section {
    padding: 2rem;
    color: #333;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 450px) {
    padding: 0 1rem 5rem 1rem;

    .text-section {
      padding: 1rem;
    }
  }
`;

const Section = styled.section`
  h2 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    color: black;
    font-size: 2rem;
    margin: 3rem 0 1rem 0;

    @media (max-width: 450px) {
      font-size: 1.5rem;
      margin: 2rem 0 1rem 0;
    }
  }

  .image-wrapper {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    margin: 0 2rem;
    height: auto;
    width: auto;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2%);
    }

    img {
      height: auto;
      width: auto;

      @media (max-width: 450px) {
        width: 100%;
      }
    }
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
    font-size: 1rem;
    margin: 1rem 0;
    white-space: pre-line;
    padding: 0 2rem;
    line-height: 1.5;

    @media (max-width: 450px) {
      padding: 0 0 0 1rem;
    }
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
