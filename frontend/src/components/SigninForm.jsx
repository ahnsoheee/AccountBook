import React from "react";
import styled from "styled-components";
import Input from "./Input";
import SignButton from "./SignButton";

const SigninForm = () => {
  return (
    <>
      <Title>가계부</Title>
      <Form>
        <Input type="text" name="id" placeholder="아이디" />
        <Input type="password" name="pw" placeholder="비밀번호" />
        <SignButton name="로그인" width="507px" height="40px" background="#ff4646" />
        <SignButton name="회원가입" width="507px" height="40px" background="#cccccc" />
      </Form>
    </>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  margin-top: 120px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export default SigninForm;
