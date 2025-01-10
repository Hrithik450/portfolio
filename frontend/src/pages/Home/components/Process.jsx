import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const Process = () => {
  return (
    <ProcessContainer>
      <TextSection>
        <h1>
          Empowering my clients to achieve <span>2x revenue</span>
        </h1>
        <p>
          I discover this process working more than 10+ in the design industry
          that why you can trust blindly
        </p>
        <BtnCont>
          <Button href="/contact">
            <span>Book a FREE Call</span>
            <RightIcon />
          </Button>
        </BtnCont>
      </TextSection>

      <StepsContainer>
        <Step>
          <span>1</span>
          <div>
            <h3>Discover your problem</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
          </div>
        </Step>
        <Step>
          <span>2</span>
          <div>
            <h3>Competitive market research</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
          </div>
        </Step>
        <Step>
          <span>3</span>
          <div>
            <h3>User-centric design</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
          </div>
        </Step>
        <Step>
          <span>4</span>
          <div>
            <h3>Final hand-off</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </p>
          </div>
        </Step>
      </StepsContainer>
    </ProcessContainer>
  );
};

export default Process;

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

const ProcessContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  height: auto;

  display: flex;
  justify-content: space-between;
  padding: 10rem 50px;
  background-color: black;
  color: white;
  gap: 3rem;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 3rem 25px;
  }
`;

const TextSection = styled.div`
  max-width: 45%;
  margin: 1rem 0;

  @media (max-width: 991px) {
    max-width: 70%;
  }

  @media (max-width: 450px) {
    max-width: 100%;
  }

  h1 {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
    span {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 40%;
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 450px) {
      font-size: 3rem;
    }
  }

  p {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    color: darkgray;
    margin: 2rem 0;
    font-size: 1.25rem;
  }
`;

const BtnCont = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  overflow: hidden;
  margin-top: 1.5rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  color: white;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  font-size: 3.5rem;
  white-space: nowrap;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }
`;

const RightIcon = styled(FaArrowRight)`
  color: black;
  border-radius: 50%;
  background: white;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StepsContainer = styled.div`
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 48%;

  @media (max-width: 991px) {
    max-width: 70%;
    padding: 2rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
    width: 100%;
  }
`;

const Step = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  display: flex;
  align-items: flex-start;
  background: white;
  padding: 20px;
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  span {
    flex: 1;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(90deg, #ff00ff, #ff7300);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    padding: 5px;
  }

  div {
    flex: 9;
    h3 {
      margin: 5px 0;
      font-size: 1.5rem;
      color: black;
    }
    p {
      margin: 5px 0 0;
      font-size: 1rem;
      color: black;
      line-height: 1.6;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;
