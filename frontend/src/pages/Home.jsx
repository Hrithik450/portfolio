import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SelectedProjects from "../components/Projects";
import { MdHome } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Navbar from "../components/Navbar/Navbar";
import Process from "../components/Process";
import Blog from "../components/Blog";
import Testimonals from "../components/Testimonals";
import Insights from "../components/Insights";
import Footer from "../components/Footer";

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
