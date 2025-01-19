import React from "react";
import styled, { keyframes } from "styled-components";
import Timer from "../../../components/Timer";

const Offers = () => {
  return (
    <OfferSection>
      <Title>
        <h1>
          Exclusive <span>Offers</span> for You
        </h1>
      </Title>
      <Subtitle>
        Secure top-notch project assistance and exclusive code offers tailored
        for your success.
      </Subtitle>
      <InfoGrid>
        <Grid1 className="info-grid">
          <h3>
            Get the complete <span>source code</span> of any project (Limited
            Time Offer)
          </h3>
          <div className="sub-grid-1">
            <div className="image">
              <img
                src="https://res.cloudinary.com/duozomapm/image/upload/v1737303272/Screenshot_2025-01-19_215349-removebg-preview_ceqk7i.png"
                alt="special offer"
              />
            </div>
            <div className="price">
              <p>Up to 30% off</p>
              <h2>
                ₹699
                <span>₹999</span>
              </h2>
            </div>
          </div>
          <div className="navigations">
            <a className="button btn-1">Claim Offer</a>
            <a className="button">
              <Timer localStorageKey={"day"} duration={24 * 60 * 60 * 1000} />
            </a>
          </div>
        </Grid1>

        <Grid2 className="info-grid">
          <h3>
            Get 4 personalized <span>1:1</span> weekly project + doubt
            explanation calls
          </h3>
          <div className="sub-grid-2">
            <div className="image">
              <img
                src="https://res.cloudinary.com/duozomapm/image/upload/v1737301098/Screenshot_2025-01-19_202637-removebg-preview_rw33qg.png"
                alt="special offer"
              />
            </div>
            <div className="price">
              <p>Up to 50% off</p>
              <h2>
                ₹999
                <span>/week</span>
              </h2>
            </div>
          </div>
          <div className="navigations">
            <a className="button popular">Most Popular</a>
            <a className="button">
              <Timer
                localStorageKey={"week"}
                duration={7 * 24 * 60 * 60 * 1000}
              />
            </a>
          </div>
        </Grid2>

        <Grid3 className="info-grid">
          <h3>
            Get 16 + 2 personalized <span>1:1</span> monthly project + doubt
            explanation calls
          </h3>
          <div className="sub-grid-3">
            <div className="image">
              <img
                src="https://res.cloudinary.com/duozomapm/image/upload/v1737313205/Screenshot_2025-01-20_004008_mzzudx.png"
                alt="special offer"
              />
            </div>
            <div className="price">
              <p>Up to 50% off</p>
              <h2>
                ₹3499
                <span>/month</span>
              </h2>
            </div>
          </div>
          <div className="navigations">
            <a className="button btn-1">Exclusive Deal</a>
            <a className="button">
              <Timer
                localStorageKey={"winter"}
                duration={29 * 24 * 60 * 60 * 1000}
              />
            </a>
          </div>
        </Grid3>
      </InfoGrid>
    </OfferSection>
  );
};

export default Offers;

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

const OfferSection = styled.section`
  max-width: 1280px;
  margin: auto;
  color: #fff;
  padding: 6rem 20px;
  text-align: center;

  @media (max-width: 479px) {
    padding: 40px 20px;
  }
`;

const Title = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  margin-bottom: 10px;

  h1 {
    font-size: 4rem;
    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 479px) {
      font-size: 3rem;
      text-align: left;
    }
  }
`;

const Subtitle = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  font-size: 1.2rem;
  margin: 1rem 0 4rem 0;
  color: darkgray;

  @media (max-width: 479px) {
    text-align: left;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 762px) {
    grid-template-columns: 1fr;
  }

  .info-grid {
    animation: ${Animation} linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    background-color: #2b4162;
    background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
    flex: 1;
    text-align: center;
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid white;
    color: white;
  }

  .navigations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .btn-1 {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
    }

    .popular {
        background-color: #faff00;
        background-image: linear-gradient(319deg, #faff00 0%, #ff1000 37%, #ff6a00 100%);
    }
  }

  .button {
    display: block;
    background-color: transparent;
    border: 1px solid white;
    width: 100%;
    padding: 0.7rem 0;
    border-radius: 5px;
    outline: none;
    font-weight: 800;
    font-size: 1.1rem;
    color: white;
    margin: 0.5rem 0 0 0;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5%);
    }

    @media (max-width: 479px) {
        font-size: 1rem;
    }
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Grid1 = styled.div`
  h3 {
    text-align: left;
    margin-left: 1rem;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  .sub-grid-1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 0.5rem 0;

    .image {
      max-width: 100%;
      max-height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .price {
      max-width: max-content;
      padding: 0.5rem;
      p {
        max-width: max-content;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        text-align: left;
        color: white;
        font-weight: 800;
        background: linear-gradient(90deg, #ff00ff, #ff7300);
      }
      h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        span {
          display: inline-block;
          margin: 0 0 0 0.4rem;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.6);
          position: relative;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 1px;
            background: white;
          }
        }
        @media (max-width: 479px) {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

const Grid2 = styled.div`
  h3 {
    text-align: left;
    margin-left: 1rem;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  .sub-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 0.5rem 0;

    .image {
      max-width: 100%;
      max-height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .price {
      max-width: max-content;
      padding: 0.5rem;
      p {
        max-width: max-content;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        text-align: left;
        color: white;
        font-weight: 800;
        background-color: #faff00;
        background-image: linear-gradient(
          319deg,
          #faff00 0%,
          #ff1000 37%,
          #ff6a00 100%
        );
      }
      h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        span {
          display: inline-block;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.6);
          position: relative;
        }
        @media (max-width: 479px) {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

const Grid3 = styled.div`
  h3 {
    text-align: left;
    margin-left: 1rem;

    span {
      background: linear-gradient(90deg, #ff00ff, #ff7300);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  .sub-grid-3 {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 0 0.5rem 1rem;

    .image {
      max-width: 100%;
      max-height: 160px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .price {
      max-width: max-content;
      padding: 0.5rem;
      p {
        max-width: max-content;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        text-align: left;
        color: white;
        font-weight: 800;
        background: linear-gradient(90deg, #ff00ff, #ff7300);
      }
      h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        span {
          display: inline-block;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.6);
          position: relative;
        }
        @media (max-width: 479px) {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
