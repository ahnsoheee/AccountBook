import React from "react";
import styled from "styled-components";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  return (
    <Form>
      <Input type="text" name="id" placeholder="아이디" />
      <Input type="password" name="pw" placeholder="비밀번호" />
      <SubmitButton width="509px" height="35px" />
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginForm;
