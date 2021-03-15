import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Submenu from "./Submenu";
import CategorySetting from "../Main/CategorySetting";
import { API } from "../../api/api";

const Menu = ({ id, name }) => {
  const [click, setClick] = useState(false);
  const [category, setCategory] = useState(false);
  const [income, setIncome] = useState("");
  const [expend, setExpend] = useState("");

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

  const onUpdate = async () => {
    alert("준비 중 입니다.");
  };

  const onDelete = async () => {
    alert("준비 중 입니다.");
  };

  const onClickCategory = async () => {
    const incomes = await API.post("/input/category", { id: id, type: "수입" });
    const expends = await API.post("/input/category", { id: id, type: "지출" });
    if (incomes) {
      const income = incomes.map((income) => {
        return (
          <Category key={income.id}>
            <Name>{income.name}</Name>
            <UpdateButton onClick={onUpdate}>수정</UpdateButton>
            <DeleteButton onClick={onDelete}>삭제</DeleteButton>
          </Category>
        );
      });
      setIncome(income);
    }
    if (expends) {
      const expend = expends.map((expend) => {
        return (
          <Category key={expend.id}>
            <Name>{expend.name}</Name>
            <UpdateButton>수정</UpdateButton>
            <DeleteButton>삭제</DeleteButton>
          </Category>
        );
      });
      setCategory(true);
      setExpend(expend);
    }
  };

  return click ? (
    <>
      <MenuButton onClick={onClick}>{name}님</MenuButton>
      <Wrapper>
        <Submenu onClick={onClickLogout}>로그아웃</Submenu>
        <Submenu onClick={onClickCategory}>카테고리 추가</Submenu>
        {category && <CategorySetting setCategory={setCategory} income={income} expend={expend} />}
      </Wrapper>
    </>
  ) : (
    <MenuButton onClick={onClick}>{name}님</MenuButton>
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
  border: none;
  outline: none;
  color: #ffffff;
`;

const MenuButton = styled.button`
  width: 100px;
  font-size: 12px;
  text-align: center;
  background-color: #ff4646;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
`;

const Category = styled.div`
  display: flex;
  font-size: 11pt;
  font-weight: bold;
`;

const Name = styled.div`
  width: 370px;
  padding-left: 80px;
  color: #000000;
  text-align: left;
`;

const UpdateButton = styled.button`
  width: 50px;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #ff4646;
  font-weight: bold;
  color: #ffffff;
`;

const DeleteButton = styled.button`
  width: 50px;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #ff9292;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
`;
export default Menu;
