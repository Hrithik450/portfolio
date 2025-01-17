import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { MdDesignServices, MdHome } from "react-icons/md";
import { FaPenNib, FaProjectDiagram, FaUser } from "react-icons/fa";
import Footer from "../../components/Footer";
import ServicesDuplicate from "./components/Services";
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
