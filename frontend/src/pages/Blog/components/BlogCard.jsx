import React from "react";
import { MdOpenInNew } from "react-icons/md";
import styled, { keyframes } from "styled-components";

const BlogCard = ({ blog }) => {
  return (
    <Card className={`blog-${blog.id}`}>
      <Image src={blog.image} alt={blog.title} />
      <Content>
        <Title className="title">{blog.title}</Title>
        <a className="card-nav" href={`/blog/${blog.id}`}>
          <Date>{blog.date}</Date>
          <Icon />
        </a>
      </Content>
    </Card>
  );
};

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

const Card = styled.div`
  border: 1px solid white;
  animation: ${Animation} 1000ms ease-in-out;
  position: relative;
  box-shadow: 0px 3px 3px rgba(255, 255, 255, 0.3);
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
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
    z-index: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  position: absolute;
  bottom: 0%;
  z-index: 2;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  .card-nav {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 762px) {
    padding: 1rem 1rem;
  }
`;

const Date = styled.span`
  font-size: 1rem;
  color: darkgray;
`;

const Title = styled.h3`
  margin: 5px 0;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 479px) {
    font-size: 1.2rem;
  }
`;

const Icon = styled(MdOpenInNew)`
  width: 30px;
  height: 30px;
  padding: 5px;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(90deg, #ff00ff, #ff7300);

  &:hover {
    transform: scale(1.1);
  }
`;

export default BlogCard;
