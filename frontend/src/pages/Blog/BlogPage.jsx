import React from "react";
import styled, { keyframes } from "styled-components";
import { MdHome } from "react-icons/md";
import { FaPenNib, FaProjectDiagram, FaUser } from "react-icons/fa";
import BlogCard from "./components/BlogCard";
import BottomCard from "./components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { GrLogin } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";

const object = {
  theme: "dark",
  title: "Hruthik M",
  sizing: {
    minWidth: "290px",
  },
  NavItems: [
    { title: "Home", type: "normal", href: "/", icon: <MdHome /> },
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
      title: "Contact Me",
      type: "normal",
      href: "/contact",
      icon: <IoChatbubblesOutline />,
    },
    {
      name: "Login",
      type: "button",
      href: "/login",
      icon: <GrLogin />,
    },
  ],
};

const blogs = [
  {
    id: 1,
    type: "Neutral",
    title: "Master Responsive Layouts with This Simple Fix!",
    category: "Coding",
    author: "John Doe",
    date: "January 09, 2025",
    image:
      "https://res.cloudinary.com/duozomapm/image/upload/v1736431989/Copy_of_AI_s_Strangest_Creations_3_bc64u7.png",
  },
  {
    id: 2,
    type: "Neutral",
    title: "The Pomodoro Technique Really Works",
    category: "Management",
    author: "John Doe",
    date: "December 27, 2017",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7812339f43709384172ad_Blog%20Thumbnail%202.png",
  },
  {
    id: 3,
    type: "Neutral",
    title: "Throwback To The Good Old Days",
    category: "Lifestyle",
    author: "John Doe",
    date: "December 21, 2017",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f78136ef5754db738c8522_Blog%20Thumbnail%203.png",
  },
  {
    id: 4,
    type: "Normal",
    title: "Just a Standard Format Post",
    date: "December 15, 2017",
    content:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7815540feca7a16b78024_Blog%20Thumbnail%204.png",
  },
  {
    id: 5,
    type: "Normal",
    title: "10 Interesting Facts About Caffeine",
    date: "December 15, 2017",
    content:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7812339f43709384172ad_Blog%20Thumbnail%202.png",
  },
  {
    id: 6,
    type: "Normal",
    title: "No Sugar Oatmeal Cookies",
    date: "December 10, 2017",
    content:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f78136ef5754db738c8522_Blog%20Thumbnail%203.png",
  },
  {
    id: 7,
    type: "Normal",
    title: "Good Design Is Making Something Memorable",
    date: "December 5, 2017",
    content: "Dieter Rams explains what makes great design.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7815540feca7a16b78024_Blog%20Thumbnail%204.png",
  },
];

const neutralBlogs = blogs.filter((blog) => blog.type === "Neutral");
const normalBlogs = blogs.filter((blog) => blog.type === "Normal");

const Insights = () => {
  return (
    <>
      <BlogSection>
        <Navbar object={object} />
        <Wrapper>
          <FirstSection>
            {neutralBlogs &&
              neutralBlogs.map((blog, bidx) => (
                <BlogCard blog={blog} key={`blog-${bidx}`} />
              ))}
          </FirstSection>
        </Wrapper>
      </BlogSection>
      <Wrapper>
        <SecondSection>
          {normalBlogs &&
            normalBlogs.map((blog, bidx) => (
              <BottomCard key={`blog-${bidx}`} blog={blog} />
            ))}
        </SecondSection>
      </Wrapper>
      <Footer header={true} />
    </>
  );
};

export default Insights;

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

const BlogSection = styled.section`
  background: black;
`;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
`;

const FirstSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  max-width: 1160px;
  margin: auto;
  padding: 10rem 0 2rem 0;
  margin-bottom: 40px;

  .blog-1 {
    grid-row: span 2;
    max-height: 520px;
  }

  .blog-2,
  .blog-3 {
    max-height: 250px;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;

    .blog-1 {
      max-height: 100%;
      grid-row: span 1;
      grid-column: span 2;
    }

    .blog-2,
    .blog-3 {
      max-height: 100%;
    }

    .blog-3 {
      grid-column-start: 2;
    }
  }

  @media (max-width: 479px) {
    .blog-2,
    .blog-3 {
      grid-column: span 2;
    }

    .blog-3 {
      grid-row-start: 3;
    }
  }
`;

const SecondSection = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 762px) {
    grid-template-columns: 1fr;
  }
`;
