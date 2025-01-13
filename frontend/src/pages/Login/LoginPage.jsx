import React, { useState } from "react";
import styled from "styled-components";
import SocialLogin from "./components/Social";
import InputField from "./components/Input";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginPage = () => {
  const [login, setlogin] = useState(true);

  return (
    <LoginSection>
      <div className="container">
        <Header>
          <h1>Hruthik M</h1>
        </Header>
        <Body>
          <div className="login-container">
            <h2>Welcome Back</h2>
            <SocialLogin />
            <p className="separator">
              <span>or</span>
            </p>
            <form>
              <InputField
                type={"email"}
                placeholder={"Email Adress"}
                icon={<MdEmail />}
              />
              <InputField
                type={"password"}
                placeholder={"Password"}
                icon={<FaLock />}
              />
              <a className="forget-password">Forget Password?</a>
              <button className="login-btn">Login</button>
              <span className="sign-up">
                Dont't have a account? <a href="#">Sign up</a>
              </span>
            </form>
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
    overflow: hidden;
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
    transform: translate(-50%, -50%);
    padding: 2rem 1rem 0 1rem;
  }

  .login-container {
    width: 100%;
    padding: 3rem;
    border: 1px solid white;
    background: black;
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.1);

    @media (max-width: 479px) {
      padding: 2rem 1rem;
    }

    h2 {
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

      .login-btn {
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

      .sign-up {
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
