import React from "react";
import styled from "styled-components";

const VerifyEmail = ({ verificationToken }) => {
  return (
    <Container>
      <Header>
        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1736860649/Screenshot_2025-01-14_185703_prcfvy.png"
          alt="Hruthik M"
        />
      </Header>

      <Body>
        <h2>Password Recovery</h2>
        <p className="desc">
          You have requested to reset your password. Please find the reset link
          below to proceed.
        </p>
        <Button>{verificationToken}</Button>
        <p className="note">
          Note:- The verification code is valid only for 10 minutes
        </p>
        <p>Thank you,</p>
        <p>Hruthik M</p>
        <p>
          Need help?{" "}
          <Link href="https://hruthik.onrender.com/contact">
            Contact us here.
          </Link>
        </p>
      </Body>

      <Footer>
        © 2025-2026 All rights reserved | Designed and Developed by Hruthik M
      </Footer>
    </Container>
  );
};

export default VerifyEmail;

const Container = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Header = styled.div`
  text-align: center;
  color: white;

  h1 {
    margin: 0;
    font-size: 24px;
  }

  img {
    border: 1px solid white;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  padding: 1rem;
  text-align: left;

  .desc {
    margin: 1rem 0;
    font-size: 1.1rem;
  }

  .note {
    color: red;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  @media (max-width: 479px) {
    padding: 1rem 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin: 0 0 10px 0;
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: #0088ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #0077dd;
  }
`;

const Footer = styled.div`
  padding: 10px;
  font-size: 0.9rem;
  text-align: left;
  color: #555;
`;

const Link = styled.a`
  color: #0073e6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
