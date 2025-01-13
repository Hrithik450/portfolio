import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SocialLogin from "./components/Social";
import InputField from "./components/Input";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import StrengthMeter from "./components/Strength";

const SignUpPage = ({ handleAuth }) => {
  const [AuthData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setAuthData({
      ...AuthData,
      [e.target.name]: e.target.value,
    });

  return (
    <SignUpSection>
      <div className="signup-container">
        <h2>Create Account</h2>
        <SocialLogin />
        <p className="separator">
          <span>or</span>
        </p>
        <form>
          <InputField
            type={"text"}
            placeholder={"Username"}
            icon={<FaUserAlt />}
            name={"username"}
            value={AuthData.username}
            onChange={handleChange}
          />
          <InputField
            type={"email"}
            placeholder={"Email Address"}
            icon={<MdEmail />}
            name={"email"}
            value={AuthData.email}
            onChange={handleChange}
          />
          <InputField
            type={"password"}
            placeholder={"Create Password"}
            icon={<FaLock />}
            name={"password"}
            value={AuthData.password}
            onChange={handleChange}
          />

          <StrengthMeter password={AuthData.password} />

          <button className="signup-btn">Sign Up</button>
          <span className="login">
            Already have a account?{" "}
            <a onClick={() => handleAuth(true)}>Login</a>
          </span>
        </form>
      </div>
    </SignUpSection>
  );
};

export default SignUpPage;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const SignUpSection = styled.div`
  .signup-container {
    width: 100%;
    padding: 3rem;
    border: 1px solid white;
    background: black;
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.1);

    @media (max-width: 479px) {
      padding: 2rem 1.5rem;
    }

    h2 {
      animation: ${fadeIn} 1000ms ease-in-out;
      text-align: center;
      font-size: 2rem;
      color: white;
      padding-bottom: 2rem;
      font-weight: 800;

      @media (max-width: 479px) {
        font-size: 1.7rem;
      }
    }

    form {
      text-align: center;

      .forget-password {
        animation: ${fadeIn} 1000ms ease-in-out;
        display: block;
        width: 100%;
        text-align: end;
        color: white;
        font-size: 1.1rem;
        cursor: pointer;
        margin: 1rem 0;

        &:hover {
          text-decoration: underline;
        }

        @media (max-width: 479px) {
          font-size: 1rem;
        }
      }

      .signup-btn {
        animation: ${fadeIn} 1000ms ease-in-out;
        width: 100%;
        padding: 1rem 0;
        font-size: 1.2rem;
        font-weight: 800;
        border-radius: 40px;
        color: white;
        outline: none;
        border: 1px solid #4320df;
        background: #5f41e4;

        &:hover {
          background: #4320df;
        }

        @media (max-width: 479px) {
          padding: 0.7rem 0;
          font-size: 1rem;
        }
      }

      .login {
        animation: ${fadeIn} 1000ms ease-in-out;
        display: block;
        color: white;
        margin: 1rem 0;
        font-size: 1.2rem;

        a {
          color: #5f41e4;
          cursor: pointer;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        @media (max-width: 479px) {
          font-size: 1rem;
        }
      }
    }

    .separator {
      animation: ${fadeIn} 1000ms ease-in-out;
      color: white;
      position: relative;
      text-align: center;
      margin: 1.5rem 0;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1%;
        background: #bfb3f2;
      }

      span {
        position: relative;
        background: #fff;
        color: black;
        padding: 2px 10px;
        z-index: 1;
        font-weight: 600;
        font-size: 1.1rem;

        @media (max-width: 479px) {
          font-size: 1rem;
        }
      }
    }
  }
`;
