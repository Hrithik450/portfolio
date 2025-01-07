import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import BlogDuplicate from "./Duplicate/Blog";
import { MdHome, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const object = {
  theme: "dark",
  title: "Portfolio",
  sizing: {
    minWidth: "280px",
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

const About = () => {
  return (
    <AboutSection>
      <Navbar object={object} />
      <BlogDuplicate />
      <Footer header={true} />
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  background: black;
`;
