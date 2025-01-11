import React from "react";
import styled, { keyframes } from "styled-components";
import ParallaxSwiper from "../../../components/Swiper3";

const data = [
  {
    id: 1,
    rating: 5,
    date: "08-Aug-2024",
    title: "Working with Pritom was a breeze... I was impressed.",
    description:
      "Honestly I felt like Superflow saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
    name: "Pritom Rani",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 2,
    rating: 5,
    date: "09-Nov-2024",
    title: "Undoubtly best desinger for SaaS website",
    description:
      "Great template and custom service! I needed to make some specific changes and Rustam sent me a quick step by step video explaining how to make changes. ",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
    name: "Rudra Ghosh",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 3,
    rating: 5,
    date: "2025-jan-01",
    title: "Working with Niloy was a breeze... I was impressed.",
    description:
      "Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
    name: "Niloy",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 4,
    rating: 5,
    date: "09-Nov-2024",
    title: "Working with Rudra was a breeze... I was impressed",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia error harum, consequuntur voluptas totam nulla iure magnam asperiores quidem recusandae autem! Porro culpa numquam odit quaerat nulla aspernatur consequatur!",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
    name: "Pritom Rani",
    role: "Product Desinger at Blazzings.co",
  },
  {
    id: 5,
    rating: 5,
    date: "2025-jan-01",
    title: "Working with Niloy was a breeze... I was impressed.",
    description:
      "Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
    name: "Niloy",
    role: "Product Desinger at Blazzings.co",
  },
];

const Testimonals = () => {
  return (
    <TestimonalSection>
      <div className="testimonal-header">
        <div className="left-header">
          <SectionTitle>
            Clients <span>testimonials</span>
          </SectionTitle>
          <Description>
            Here is some love words from my clients around the world. Hope you
            will be here next.
          </Description>
        </div>

        <div className="navigation">
          <button className="highlight-button-prev">&lt;</button>
          <button className="highlight-button-next">&gt;</button>
        </div>
      </div>
      <Grid>
        <ParallaxSwiper slides={data} color={"white"} />
      </Grid>
    </TestimonalSection>
  );
};

export default Testimonals;

const Animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const TestimonalSection = styled.section`
  margin: auto;
  height: auto;
  padding: 8rem 0 8rem 8rem;

  @media (max-width: 991px) {
    padding: 8rem 0 8rem 3rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }

  .testimonal-header {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 991px) {
      padding-right: 2rem;

      @media (max-width: 450px) {
        padding-right: 0;
      }
    }

    @media (max-width: 450px) {
      max-width: 100%;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem 0.5rem 1rem 0;
    }

    .left-header {
      max-width: 50%;
      @media (max-width: 450px) {
        max-width: 90%;
      }
    }

    .navigation {
      animation: ${Animation} linear;
      animation-timeline: view();
      animation-range: entry 0% cover 40%;
      button {
        color: white;
        background: rgba(255, 255, 255, 0.1);
        height: 60px;
        width: 60px;
        margin: 0 0.5rem;
        padding: 1rem;
        border-radius: 50%;
        font-weight: bold;
        border: 1px solid white;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      @media (max-width: 450px) {
        margin-left: auto;
      }
    }
  }
`;

const SectionTitle = styled.h2`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  text-align: left;
  font-size: 4rem;
  color: white;

  span {
    background: linear-gradient(90deg, #ff00ff, #ff7300);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  text-align: left;
  font-size: 1.2rem;
  color: #777;
  margin: 2rem 0 3rem 0;

  @media (max-width: 450px) {
    margin-bottom: 0rem;
  }
`;

const Grid = styled.div`
  animation: ${Animation} linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  display: flex;
  gap: 2rem;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    gap: 2rem 0rem;
  }
`;
