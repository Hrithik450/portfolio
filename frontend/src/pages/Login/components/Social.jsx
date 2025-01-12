import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <SocialContainer>
      <div className="social-login">
        <button className="social-button">
          <FcGoogle />
          Google
        </button>
        <button className="social-button">
          <FaApple />
          Apple
        </button>
      </div>
    </SocialContainer>
  );
};
export default SocialLogin;

const SocialContainer = styled.div`
  .social-login {
    display: flex;
    gap: 1.31rem;

    .social-button {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      padding: 0.75rem 0;
      border-radius: 0.31rem;
      align-items: center;
      justify-content: center;
      color: white;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid #d5cbff;
      transition: 0.3s ease;

      &:hover {
        border-color: #5f41e4;
        background: rgba(0, 0, 0, 1);
      }

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
