import React from "react";
import {
  FaArrowRight,
  FaPenNib,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { MdEmail, MdHome, MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { IoMdLogIn } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import Testimonals from "../Home/components/Testimonals";
import Footer from "../../components/Footer";
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

const Contact = () => {
  return (
    <ContactSection>
      <Navbar object={object} />
      <Container>
        <LeftSection>
          <h1>
            Have projects in mind? Let's work <span>together</span>
          </h1>
          <p>
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          <div className="contact-info">
            <div>
              <MdEmail />
              <a href="mailto:theportfolio_pro@gmail.com">
                mhrithik450@gmail.com
              </a>
            </div>
            <div>
              <li>
                <FaPhoneAlt />
                +91-7483229386
              </li>
            </div>
          </div>
        </LeftSection>

        <RightSection>
          <h3>Fill the form below*</h3>
          <Form>
            <div className="input-group">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" placeholder="First Name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your mail" />
            </div>
            <div className="input-group">
              <label htmlFor="budget">Budget</label>
              <select id="budget">
                <option value="">Your budget</option>
                <option value="low">$500 - $1000</option>
                <option value="medium">$1000 - $5000</option>
                <option value="high">$5000+</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Type your message" />
            </div>
            <BtnCont>
              <Button href="#">
                <div className="text-wrapper">
                  <span>Submit Now</span>
                </div>
                <RightIcon />
              </Button>
            </BtnCont>
          </Form>
        </RightSection>
      </Container>
      <Testimonals />
      <Footer header={false} />
    </ContactSection>
  );
};

export default Contact;

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

const ContactSection = styled.section`
  background: black;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 12rem 2rem 2rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: black;
  color: white;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 479px) {
    padding: 10rem 1.5rem 1rem 1.5rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 550px;
  padding-right: 2rem;

  h1 {
    animation: ${Animation} 1000ms ease-in-out;
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 1.2;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 479px) {
      font-size: 3rem;
    }
  }

  p {
    animation: ${Animation} 1000ms ease-in-out;\
    max-width: 80%;
    margin: 1.5rem 0;
    font-size: 1.3rem;
    color: #cccccc;
    line-height: 1.5;

    @media (max-width: 991px) {
        max-width: 100%;
    }
  }

  .contact-info {
    margin-top: 2rem;

    div {
      animation: ${Animation} 1000ms ease-in-out;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      svg {
        margin-right: 0.5rem;
        font-size: 1.5rem;
      }

      a {
        color: white;
        text-decoration: none;
      }

      li {
        list-style: none;
      }
    }
  }
`;

const RightSection = styled.div`
  animation: ${Animation} 1000ms ease-in-out;
  max-width: 550px;
  background-color: #1c1c1c;
  height: max-content;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #cccccc;
  }

  @media (max-width: 479px) {
    max-width: 90%;
    margin: auto;
    padding: 1rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  .input-group {
    margin-bottom: 1.3rem;

    label {
      display: none;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 1rem;
      border: none;
      background-color: #333333;
      color: white;
      font-size: 1rem;

      &:focus {
        outline: none;
        border: 1px solid #ff0080;
      }
    }

    textarea {
      resize: none;
      height: 150px;
    }
  }
`;

const BtnCont = styled.div`
  overflow: hidden;
  margin-top: 0.5rem;
  text-align: center;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(90deg, #ff00ff, #ff7300);
  color: white;
  padding: 0 0.5rem;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  font-size: 2.5rem;
  white-space: nowrap;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  .text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 1.2rem;
      padding: 1rem 0.5rem;
    }
  }
`;

const RightIcon = styled(FaArrowRight)`
  color: black;
  border-radius: 50%;
  background: white;
  padding: 0.7rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
