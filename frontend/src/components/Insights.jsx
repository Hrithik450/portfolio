import React from "react";
import styled, { keyframes } from "styled-components";
import { RiExpandDiagonalSFill } from "react-icons/ri";

const Insights = () => {
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
        <MainCard>
          <CardImage
            src="https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7810ad49a53def93cfd03_Blog%20Thumbnail%201.png"
            alt="Large article"
          />
          <CardContent>
            <div>
              <CardMeta>· DESIGN · 5 MIN READ</CardMeta>
              <div className="card-nav">
                <MainCardTitle>
                  Empower your users by building cards with best possible
                </MainCardTitle>
                <Icon />
              </div>
            </div>
          </CardContent>
        </MainCard>
        <div className="sub-cards">
          <Card>
            <CardImage
              src="https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7812339f43709384172ad_Blog%20Thumbnail%202.png"
              alt="Small article 1"
            />
            <CardContent>
              <div>
                <CardMeta>· DESIGN · 5 MIN READ</CardMeta>
                <div className="card-nav">
                  <CardTitle>
                    How Lance built banking for freelancers?
                  </CardTitle>
                  <Icon />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f78136ef5754db738c8522_Blog%20Thumbnail%203.png"
              alt="Small article 2"
            />
            <CardContent>
              <div>
                <CardMeta>· DESIGN · 5 MIN READ</CardMeta>
                <div className="card-nav">
                  <CardTitle>
                    Working with Rudra was a breeze... I was impressed.
                  </CardTitle>
                  <Icon />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardImage
              src="https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/61f7815540feca7a16b78024_Blog%20Thumbnail%204.png"
              alt="Small article 3"
            />
            <CardContent>
              <div>
                <CardMeta>· DESIGN · 5 MIN READ</CardMeta>
                <div className="card-nav">
                  <CardTitle>
                    Working with Niloy was a breeze... I was impressed.
                  </CardTitle>
                  <Icon />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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
  padding: 5rem 0;
  text-align: center;

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const Subtitle = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  margin: 2rem 0 4rem 0;
  font-size: 1.2rem;
  color: #666;

  @media (max-width: 450px) {
    text-align: left;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  .sub-cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
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
`;

const Card = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  display: flex;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  flex: 1;
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  flex: 3;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;

  .card-nav {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 450px) {
    padding: 1rem 1rem;
  }
`;

const CardMeta = styled.div`
  text-align: left;
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.5rem;
`;

const MainCardTitle = styled.h2`
  max-width: 80%;
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  color: white;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

const CardTitle = styled.h2`
  max-width: 80%;
  text-align: left;
  font-size: 1.5rem;
  margin: 0;
  color: #333;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

const Icon = styled(RiExpandDiagonalSFill)`
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
