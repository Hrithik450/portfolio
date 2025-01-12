import React from "react";
import styled from "styled-components";
import SocialLogin from "./components/Social";
import InputField from "./components/Input";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginPage = () => {
  return (
    <LoginSection>
      <div className="container">
        <Header>
          <h1>Hruthik M</h1>
        </Header>
        <Body>
          <div className="login-container">
            <h2 className="form-title">Log in with</h2>
            <SocialLogin />
            <p className="separator">
              <span>or</span>
            </p>
            <form action="#" className="login-form">
              <InputField
                type="email"
                placeholder="Email address"
                icon={<MdEmail />}
              />
              <InputField
                type="password"
                placeholder="Password"
                icon={<FaLock />}
              />
              <a href="#" className="forgot-password-link">
                Forgot password?
              </a>
              <button type="submit" className="login-button">
                Log In
              </button>
            </form>
            <p className="signup-prompt">
              Don&apos;t have an account?
              <a href="#" className="signup-link">
                Sign up
              </a>
            </p>
          </div>
        </Body>
      </div>
    </LoginSection>
  );
};

export default LoginPage;

const LoginSection = styled.section`
  height: 100vh;
  overflow: hidden;

  background-image: url("https://res.cloudinary.com/duozomapm/image/upload/v1736694564/Leonardo_Phoenix_10_Create_a_highly_detailed_ultrahighdefiniti_3_hiihpz.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    max-width: 1280px;
    margin: auto;
  }
`;

const Header = styled.div`
  padding: 1.5rem 0 0 0;
  position: absolute;
  z-index: 2;

  h1 {
    color: white;
    font-size: 3rem;
  }

  @media (max-width: 1280px) {
    padding: 1.5rem 0 0 3rem;
  }

  @media (max-width: 479px) {
    padding: 1.5rem 0 0 1rem;

    h1 {
      font-size: 2.5rem;
    }
  }
`;

const Body = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -45%);
  z-index: 2;

  max-width: 450px;
  width: 100%;

  @media (max-width: 479px) {
    padding: 2rem 1rem 0 1rem;
  }

  .login-container {
    padding: 2rem 1.5rem;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
    border: 1px solid white;

    .form-title {
      text-align: center;
      font-size: 1.37rem;
      font-weight: 800;
      margin-bottom: 1.87rem;
      color: white;
    }

    .social-login {
      display: flex;
      gap: 1.31rem;
    }

    .separator {
      position: relative;
      margin: 1.5rem 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.1);

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        height: 1px;
        width: 100%;
        background: #bfb3f2;
      }

      span {
        z-index: 1;
        font-weight: 500;
        color: white;
        position: relative;
        background: #6652be;
        font-size: 1.06rem;
        padding: 0 0.9rem;
      }
    }

    .forgot-password-link {
      display: block;
      width: 100%;
      text-align: end;
      margin-top: -0.5rem;
      color: white;
    }

    .login-button {
      border: none;
      outline: none;
      width: 100%;
      height: 54px;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 800;
      cursor: pointer;
      margin-top: 1rem;
      border-radius: 0.31rem;
      background: #5f41e4;
      transition: 0.3s ease;

      &:hover {
        background: #4320df;
      }
    }

    .signup-prompt {
      text-align: center;
      font-size: 1.06rem;
      font-weight: 500;
      margin: 1.75rem 0 0.31rem;
      color: white;

      a {
        padding-left: 5px;
      }
    }

    a {
      color: #5f41e4;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
