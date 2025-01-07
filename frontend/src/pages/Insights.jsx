import React from "react";
import styled, { keyframes } from "styled-components";
import FeaturedBlog from "./Blogs/FeatureCard";
import BlogCard from "./Blogs/BlogCard";
import { RiExpandDiagonalSFill } from "react-icons/ri";
import BottomCard from "./Blogs/Card";
import Footer from "../components/Footer";
import { MdHome, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";

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

const blogs = [
  {
    title: "What Your Music Preference Says About You and Your Personality",
    category: "Music",
    author: "John Doe",
    date: "December 29, 2017",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7810ad49a53def93cfd03_Blog%20Thumbnail%201.png",
  },
  {
    title: "The Pomodoro Technique Really Works",
    category: "Management",
    author: "John Doe",
    date: "December 27, 2017",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7812339f43709384172ad_Blog%20Thumbnail%202.png",
  },
  {
    title: "Throwback To The Good Old Days",
    category: "Lifestyle",
    author: "John Doe",
    date: "December 21, 2017",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f78136ef5754db738c8522_Blog%20Thumbnail%203.png",
  },
  {
    title: "Just a Standard Format Post",
    date: "December 15, 2017",
    content:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7815540feca7a16b78024_Blog%20Thumbnail%204.png",
  },
  {
    title: "10 Interesting Facts About Caffeine",
    date: "December 15, 2017",
    content:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7812339f43709384172ad_Blog%20Thumbnail%202.png",
  },
  {
    title: "No Sugar Oatmeal Cookies",
    date: "December 10, 2017",
    content:
      "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f78136ef5754db738c8522_Blog%20Thumbnail%203.png",
  },
  {
    title: "Good Design Is Making Something Memorable",
    date: "December 5, 2017",
    content: "Dieter Rams explains what makes great design.",
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7815540feca7a16b78024_Blog%20Thumbnail%204.png",
  },
];

const Insights = () => {
  return (
    <>
      <BlogSection>
        <Navbar object={object} />
        <Wrapper>
          <FirstSection>
            <LargeFeatured>
              <FeaturedBlog blog={blogs[0]} />
            </LargeFeatured>
            <SideBlogs>
              <BlogCard blog={blogs[1]} />
              <BlogCard blog={blogs[2]} />
            </SideBlogs>
          </FirstSection>
        </Wrapper>
      </BlogSection>
      <Wrapper>
        <SecondSection>
          {blogs.slice(3).map((blog, index) => (
            <BottomCard key={index} blog={blog} />
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
  padding: 10rem 0 8rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10rem 0 2rem 0;
  }
`;

const LargeFeatured = styled.div`
  border: 1px solid white;
  animation: ${Animation} 1000ms ease-in-out;
  overflow: hidden;
  grid-column: span 1;
  box-shadow: 0px 6px 6px rgba(255, 255, 255, 0.3);
`;

const SideBlogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SecondSection = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
