import { useState } from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const handlePassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <InputContainer>
      <div className="input-wrapper">
        <div className="icon">{icon}</div>
        {type === "password" ? (
          <div className="password">
            {isPasswordShown ? (
              <FaEyeSlash onClick={handlePassword} />
            ) : (
              <FaEye onClick={handlePassword} />
            )}
            <input
              type={isPasswordShown ? "text" : type}
              placeholder={placeholder}
              required
            />
          </div>
        ) : (
          <input type={type} placeholder={placeholder} required />
        )}
      </div>
    </InputContainer>
  );
};

export default InputField;

const InputContainer = styled.div`
  .input-wrapper {
    width: 100%;
    position: relative;
    margin: 1rem 0;

    .icon {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-45%);
      color: #bfb3f2;
      font-size: 1.1rem;
    }

    input {
      width: 100%;
      cursor: pointer;
      padding: 1rem 2.5rem;
      background: rgba(0, 0, 0, 0.1);
      outline: none;
      color: white;
      border: 1px solid #bfb3f2;
      font-size: 1.1rem;

      &::placeholder {
        color: white;
      }

      &:focus {
        border-color: #5f41e4;
      }
    }

    .password {
      position: relative;

      svg {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        color: #bfb3f2;
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
  }
`;
