import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGreaterThan } from "react-icons/fa";
import { Parallax, Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";

import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import TestimonialCard from "../pages/Home/components/Testimonal/Card";
import ProjectCard from "../pages/Project/components/ProjectCard";

export default function ParallaxSwiper({ slides, color, type }) {
  return (
    <StyledSwiper
      spaceBetween={30}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      parallax={true}
      slidesPerView={"auto"}
      navigation={{
        nextEl: ".highlight-button-next",
        prevEl: ".highlight-button-prev",
      }}
      speed={800}
      autoplay={{ delay: 2000 }}
      modules={[Parallax, Navigation, Autoplay, Pagination]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="slide-content" $color={color} key={`-${index}`}>
          {type === "Projects" ? (
            <ProjectCard project={slide} />
          ) : (
            <TestimonialCard slide={slide} />
          )}
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

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

const StyledSwiper = styled(Swiper)`
  width: 100%;

  .slide-content {
    position: relative;
    overflow: hidden;
    border: 1px solid ${(props) => props.color};
  }

  .swiper-slide {
    background-color: #cdc1ff;
    background-image: linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%);
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.3);
    width: 500px;
    height: auto;

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
