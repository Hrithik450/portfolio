import React from "react";
import styled, { keyframes } from "styled-components";
import { MdOpenInNew } from "react-icons/md";

const Insights = () => {
  const blogs = [
    {
      id: 1,
      type: "Main",
      title: "Master Responsive Layouts with This Simple Fix!",
      category: "Management",
      author: "John Doe",
      date: "January 09, 2025",
      image:
        "https://res.cloudinary.com/duozomapm/image/upload/v1736431989/Copy_of_AI_s_Strangest_Creations_3_bc64u7.png",
    },
    {
      id: 2,
      type: "Normal",
      title: "Throwback To The Good Old Days Day",
      category: "Lifestyle",
      author: "John Doe",
      date: "December 21, 2017",
      image:
        "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7812339f43709384172ad_Blog%20Thumbnail%202.png",
    },
    {
      id: 3,
      type: "Normal",
      title: "Just a Standard Format Post Old Days",
      date: "December 15, 2017",
      content:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
      image:
        "https://res.cloudinary.com/duozomapm/image/upload/v1736431989/Copy_of_AI_s_Strangest_Creations_3_bc64u7.png",
    },
    {
      id: 4,
      type: "Normal",
      title: "Just a Standard Format Post",
      date: "December 15, 2017",
      content:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt mollit id et proident.",
      image:
        "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7815540feca7a16b78024_Blog%20Thumbnail%204.png",
    },
  ];

  return (
    <Container>
      <Title>
        Discover my <span>insights</span>
      </Title>
      <Subtitle>
        Here is some resources from where you can learn how to build a strong
        digital web presence
      </Subtitle>
      <Grid>
        {blogs.map((blog, bidx) =>
          blog.type === "Main" ? (
            <MainCard key={`card-${bidx}`}>
              <div className="image-wrapper">
                <CardImage src={blog && blog.image} alt="Large article" />
              </div>
              <CardContent>
                <div className="content">
                  <a className="card-nav" href={`blog/${blog.id}`}>
                    <MainCardTitle>{blog && blog.title}</MainCardTitle>
                    <Icon />
                  </a>
                  <CardMeta>{blog && blog.date}</CardMeta>
                </div>
              </CardContent>
            </MainCard>
          ) : (
            <Card key={`blog-${bidx}`}>
              <div className="image-wrapper">
                <CardImage src={blog && blog.image} alt="Small article 1" />
              </div>
              <CardContent>
                <div className="content">
                  <a className="card-nav" href={`blog/${blog.id}`}>
                    <CardTitle>{blog && blog.title}</CardTitle>
                    <Icon />
                  </a>
                  <CardMeta>{blog && blog.date}</CardMeta>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Insights;

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

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  height: auto;
  padding: 5rem 3rem;
  text-align: center;

  @media (max-width: 991px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 479px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h1`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  font-size: 4rem;
  margin-bottom: 0.5rem;
  span {
    background: linear-gradient(90deg, #ff00ff, #ff7300);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 762px) {
    text-align: left;
  }

  @media (max-width: 479px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  margin: 2rem 0 4rem 0;
  font-size: 1.2rem;
  color: #666;

  @media (max-width: 762px) {
    text-align: left;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const MainCard = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  background: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  grid-row: span 3;

  .image-wrapper {
    flex: 1;
    height: 390px;
    overflow: hidden;
  }
`;

const Card = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;

  display: grid;
  grid-template-columns: max-content 1fr;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  .image-wrapper {
    height: 160px;
    width: 160px;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 762px) {
    grid-template-columns: 0.6fr 1fr;

    .image-wrapper {
      @media (max-width: 762px) {
        min-height: 220px;
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  flex: 3;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  .content {
    width: 100%;

    .card-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 479px) {
    flex: 0;
    padding: 1rem 1rem;
  }
`;

const CardMeta = styled.div`
  text-align: left;
  font-size: 0.9rem;
  color: #999;
  margin-top: 1rem;
`;

const MainCardTitle = styled.h2`
  max-width: 80%;
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  color: white;

  @media (max-width: 479px) {
    font-size: 1.3rem;
  }
`;

const CardTitle = styled.h2`
  max-width: 80%;
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  color: #333;

  @media (max-width: 479px) {
    font-size: 1.3rem;
  }
`;

const Icon = styled(MdOpenInNew)`
  width: 30px;
  height: 30px;
  padding: 5px;
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  background: linear-gradient(90deg, #ff00ff, #ff7300);

  &:hover {
    transform: scale(1.1);
  }
`;
