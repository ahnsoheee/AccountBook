import React, { useState } from "react";
import Input from "./Input";
import SignButton from "./SignButton";
import Form from "./Form";
import Signup from "./Signup";

const Signin = () => {
  const [signup, setSignup] = useState(false);
  return signup ? (
    <Signup />
  ) : (
    <Form title="가계부">
      <Input type="text" name="id" placeholder="아이디" required />
      <Input type="password" name="pw" placeholder="비밀번호" required />
      <SignButton name="로그인" width="507px" height="40px" background="#ff4646" />
      <SignButton name="회원가입" width="507px" height="40px" background="#cccccc" onClick={() => setSignup(true)} />
    </Form>
  );
};
export default Signin;
