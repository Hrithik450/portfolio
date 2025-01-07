import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { MdHome, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import ServicesDuplicate from "./Service/Services";
import Footer from "../components/Footer";

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

const ServicesPage = () => {
  return (
    <ServiceSection>
      <Navbar object={object} />
      <ServicesDuplicate />
      <Footer header={true} />
    </ServiceSection>
  );
};

export default ServicesPage;

const ServiceSection = styled.section`
  background: black;
`;
