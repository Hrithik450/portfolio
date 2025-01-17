import React from "react";
import styled, { keyframes } from "styled-components";

const AlertBox = ({ msg, color, bgcolor }) => {
  return (
    <AlertSection color={color} bgcolor={bgcolor}>
      {msg}
    </AlertSection>
  );
};

export default AlertBox;

const AlertSection = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  padding: 10px 20px;
  margin-top: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
