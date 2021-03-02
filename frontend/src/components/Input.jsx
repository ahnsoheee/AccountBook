import React from "react";
import styled from "styled-components";

const Input = ({ type, name, placeholder }) => {
  return <InputBox type={type} name={name} placeholder={placeholder} />;
};

const InputBox = styled.input`
  height: 35px;
  width: 500px;
  margin: 5px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export default Input;
