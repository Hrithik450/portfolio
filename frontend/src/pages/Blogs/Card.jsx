import React from "react";
import { RiExpandDiagonalSFill } from "react-icons/ri";
import styled, { keyframes } from "styled-components";

const BottomCard = ({ blog }) => {
  return (
    <Card>
      <div className="image-wrapper">
        <Image src={blog.image} alt={blog.title} />
      </div>
      <Content>
        <Title className="title">{blog.title}</Title>
        <div className="card-nav">
          <Date>{blog.date}</Date>
          <Icon />
        </div>
        {blog.content && <Excerpt>{blog.content}</Excerpt>}
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
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  padding: 1rem;
  width: 290px;
  height: auto;
  background-color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  transition: all 300ms ease;
  overflow: hidden;
  &:hover {
    transform: translateY(-2%);
  }

  .image-wrapper {
    overflow: hidden;
    &:hover img {
      transform: scale(1.2);
    }
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 300px;
  width: 100%;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  width: 100%;

  .card-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Date = styled.span`
  font-size: 1rem;
  color: darkgray;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.4rem;
  margin: 1rem 0;

  .title {
    font-size: 3rem;
  }
`;

const Excerpt = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #666;
`;

const Icon = styled(RiExpandDiagonalSFill)`
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

export default BottomCard;
