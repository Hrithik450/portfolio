import React from "react";
import { RiExpandDiagonalSFill } from "react-icons/ri";
import styled from "styled-components";

const FeaturedBlog = ({ blog, ClassProp }) => {
  return (
    <Wrapper className={`${ClassProp}`}>
      <Image src={blog.image} alt={blog.title} />
      <Content>
        <Category>{blog.category}</Category>
        <Title>{blog.title}</Title>
        <div className="card-nav">
          <Author>• {blog.date}</Author>
          <Icon />
        </div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 520px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  &:hover img {
    transform: scale(1.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    z-index: 1;
  }

  @media (max-width: 450px) {
    height: 250px;
  }
`;

const Image = styled.img`
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 3rem;
  width: 100%;
  position: absolute;
  bottom: 0%;
  z-index: 2;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  .card-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 450px) {
    padding: 1rem 1.5rem;
  }
`;

const Category = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #ff00ff, #ff7300);
  padding: 0.5rem 2rem;

  @media (max-width: 450px) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  color: white;

  @media (max-width: 450px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

const Author = styled.span`
  font-size: 1.2rem;
  color: darkgray;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Icon = styled(RiExpandDiagonalSFill)`
  width: 30px;
  height: 30px;
  padding: 5px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
  background: linear-gradient(90deg, #ff00ff, #ff7300);

  &:hover {
    transform: scale(1.1);
  }
`;

export default FeaturedBlog;
