import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import styled from "styled-components";

const AuthPage = () => {
  const [login, setlogin] = useState(true);
  const handleAuth = (boolean) => {
    setlogin(boolean);
  };

  return (
    <AuthSection>
      <div className="container">
        <Header>
          <h1>Hruthik M</h1>
        </Header>
        <Body>
          <div className="form-container">
            {login ? (
              <LoginPage handleAuth={handleAuth} />
            ) : (
              <SignUpPage handleAuth={handleAuth} />
            )}
          </div>
        </Body>
      </div>
    </AuthSection>
  );
};

export default AuthPage;

const AuthSection = styled.section`
  height: 100%;
  background-image: url("https://res.cloudinary.com/duozomapm/image/upload/v1736756104/Untitled_design_19_grryoq.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .container {
    max-width: 1280px;
    margin: auto;
  }
`;

const Header = styled.div`
  padding: 1.5rem 0 0 0;

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
  width: 100%;

  .form-container {
    max-width: 450px;
    width: 100%;
    margin: auto;
    padding: 3rem 0;

    @media (max-width: 479px) {
      padding: 4rem 1rem;
    }
  }
`;
