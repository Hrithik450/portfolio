import { useState } from "react";
import styled from "styled-components";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <InputContainer>
      <div className="input-wrapper">
        <input
          type={isPasswordShown ? "text" : type}
          placeholder={placeholder}
          className="input-field"
          required
        />
        <i className="material-symbols-rounded">{icon}</i>
      </div>
    </InputContainer>
  );
};

export default InputField;

const InputContainer = styled.div`
  .input-wrapper {
    height: 54px;
    width: 100%;
    position: relative;
    margin-bottom: 1.5rem;

    .input-field {
      width: 100%;
      height: 100%;
      outline: none;
      font-size: 1.06rem;
      border-radius: 0.31rem;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid #bfb3f2;
      padding: 0px 1.25rem 0 3.12rem;
      transition: 0.2s ease;
      color: white;

      &:focus {
        border-color: #5f41e4;
      }

      &::placeholder {
        color: white;
      }
    }

    i {
      position: absolute;
      top: 50%;
      left: 1.5rem;
      height: 100%;
      display: flex;
      color: white;
      align-items: center;
      transform: translateY(-50%);
      transition: 0.2s ease;
    }
  }
`;
