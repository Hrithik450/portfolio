import React from "react";
import styled from "styled-components";
import { MdHome, MdMessage } from "react-icons/md";
import { FaPenNib, FaProjectDiagram, FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import BlogDuplicate from "./components/About";
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
