import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Oauth } from "../../store/slices/AuthSlice";
import styled from "styled-components";
import DotSpinner from "../../components/Spinner_1";

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOAuthSuccess = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const tempToken = queryParams.get("tempToken");

      if (tempToken) {
        const result = dispatch(Oauth(tempToken));
        if (result.type === "oauth/cookie/fulfilled") {
          navigate("/");
        }
        if (result.type === "oauth/cookie/rejected") {
          console.error(result.payload.message);
          navigate("/login");
        }
      }
    };
    handleOAuthSuccess();
  }, []);

  return (
    <Loading>
      <DotSpinner />
    </Loading>
  );
};

export default OAuth;

const Loading = styled.div`
  background-color: #2b4162;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
