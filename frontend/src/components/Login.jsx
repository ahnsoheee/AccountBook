import React from "react";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

const Login = () => {
  return (
    <Modal name="로그인">
      <LoginForm />
    </Modal>
  );
};

export default Login;
