import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Submenu from "./Submenu";
import CategorySetting from "../Main/CategorySetting";

const Menu = ({ user }) => {
  const [click, setClick] = useState(false);
  const [category, setCategory] = useState(false);

  const onClick = (e) => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  const onClickLogout = async () => {
    const result = await API.get("/user/logout");
    if (result) {
      location.href = "/";
    }
  };

  const onClickCategory = async () => {
    setCategory(true);
  };

  return click ? (
    <>
      <Button onClick={onClick}>{user}님</Button>
      <Wrapper>
        <Submenu onClick={onClickLogout}>로그아웃</Submenu>
        <Submenu onClick={onClickCategory}>카테고리 추가</Submenu>
        {category && <CategorySetting setCategory={setCategory}/>}
      </Wrapper>
    </>
  ) : (
    <Button onClick={onClick}>{user}님</Button>
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
  width: 100px;
  font-size: 12px;
  text-align: center;
  background-color: #ff4646;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
`;

export default Menu;
