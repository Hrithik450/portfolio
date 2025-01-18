import React, { useEffect } from "react";
import styled from "styled-components";
import Services from "./components/Services";
import { MdHome } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import Process from "./components/Process";
import Blog from "./components/Blog";
import Insights from "./components/Insights";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import SelectedProjects from "./components/Projects";
import Testimonals from "./components/Testimonals";

import { IoChatbubblesOutline } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";

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

const Home = () => {
  return (
    <>
      <HomeSection>
        <Navbar object={object} />
        <Hero />
        <Services />
      </HomeSection>
      <SelectedProjects />
      <HomeSection>
        <Process />
      </HomeSection>
      <Blog />
      <HomeSection>
        <Testimonals />
      </HomeSection>
      <Insights />
      <HomeSection>
        <Footer header={true} />
      </HomeSection>
    </>
  );
};

export default Home;

const HomeSection = styled.section`
  position: relative;
  background: black;
`;
