import React from "react";
import styled from "styled-components";
import { API } from "../api/api";

const Submenu = () => {
  const onClick = async () => {
    const result = await API.get("/user/logout");
    if (result) {
      location.href = "/";
    }
  };
  return (
    <Wrapper>
      <Button onClick={onClick}>로그아웃</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100px;
  padding: 7px;
  right: 20px;
  top: 40px;
  font-size: 12px;
  text-align: center;
  background-color: #ff4646;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
`;

const Button = styled.button`
  font-size: 12px;
  text-align: center;
  background-color: #ff4646;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
`;

export default Submenu;
