import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <SocialContainer>
      <div className="social-container">
        <button className="social-link">
          <FcGoogle />
          <span>Google</span>
        </button>
        <button className="social-link">
          <FaApple />
          <span>Apple</span>
        </button>
      </div>
    </SocialContainer>
  );
};
export default SocialLogin;

const SocialContainer = styled.div`
  .social-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .social-link {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0;
      cursor: pointer;
      background: transparent;
      color: white;
      outline: none;
      border: 1px solid #bfb3f2;

      &:hover {
        background: black;
        border-color: #5f41e4;
      }

      svg,
      span {
        font-size: 1.3rem;

        @media (max-width: 479px) {
          font-size: 1rem;
        }
      }
    }
  }
`;
