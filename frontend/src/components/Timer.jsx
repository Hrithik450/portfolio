import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Timer = ({ localStorageKey, duration }) => {
  const getOrSetEndTime = () => {
    const savedEndTime = localStorage.getItem(localStorageKey);
    const currentTime = Date.now();

    if (!savedEndTime || currentTime >= savedEndTime) {
      const newEndTime = currentTime + duration;
      localStorage.setItem(localStorageKey, newEndTime);
      return newEndTime;
    }

    return parseInt(savedEndTime, 10);
  };

  const [endTime, setEndTime] = useState(getOrSetEndTime());
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = endTime - currentTime;

      if (remainingTime <= 0) {
        const newEndTime = currentTime + duration;
        localStorage.setItem(localStorageKey, newEndTime);
        setEndTime(newEndTime);
        setTimeLeft(newEndTime - currentTime);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, duration, localStorageKey]);

  const formatTime = (ms) => {
    const days = String(Math.floor(ms / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(Math.floor((ms / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0"
    );
    const minutes = String(Math.floor((ms / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  return <TimerWrapper>{formatTime(timeLeft)}</TimerWrapper>;
};

export default Timer;

const TimerWrapper = styled.div`
  display: inline-block;
`;
