import React, { useEffect } from "react";
import styled from "styled-components";
import Services from "./components/Services";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
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
import { MdDesignServices } from "react-icons/md";
import { fetchprofile, Oauth } from "../../store/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import DotSpinner from "../../components/Spinner_1";
import { useNavigate } from "react-router-dom";
import Offers from "./components/Offers";

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

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const handleOAuthSuccess = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const tempToken = queryParams.get("tempToken");

      if (tempToken) {
        const result = await dispatch(Oauth(tempToken));
        if (result) {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }
        if (result.type === "oauth/cookie/rejected") {
          navigate("/login");
        }
      }
    };

    const fetchProfile = async () => {
      if (isAuthenticated) {
        await dispatch(fetchprofile());
      }
    };

    handleOAuthSuccess();
    fetchProfile();
  }, [isAuthenticated, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading>
          <DotSpinner />
        </Loading>
      ) : (
        <>
          <HomeSection>
            <Navbar object={object} />
            <Hero />
            <Offers />
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
      )}
    </>
  );
};

export default Home;

const HomeSection = styled.section`
  position: relative;
  background-color: #2b4162;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
`;

const Loading = styled.div`
  background-color: #2b4162;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
