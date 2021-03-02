import React from "react";
import SignButton from "./SignButton";
import Form from "./Form";
import Input from "./Input";

const Signup = () => {
  return (
    <>
      <Form title="회원가입">
        <Input type="text" name="id" placeholder="이름" required />
        <Input type="text" name="id" placeholder="아이디" required />
        <Input type="password" name="pw" placeholder="비밀번호" required />
        <SignButton name="회원가입" width="507px" height="40px" background="#ff4646" />
      </Form>
    </>
  );
};

export default Signup;
