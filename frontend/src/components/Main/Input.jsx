import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Category from "./Category";
import Account from "./Account";
import { API } from "../../api/api";

const Input = ({ user, setLog }) => {
  const [income, setIncome] = useState(true);
  const [expend, setExpend] = useState(false);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [account, setAccount] = useState("");
  const [cost, setCost] = useState("");
  const [title, setTitle] = useState("");

  const [categories, setCategories] = useState("");
  const [accounts, setAccounts] = useState("");

  useEffect(async () => {
    const categories = await API.post("/input/category", { id: user, type: "수입" });
    const accounts = await API.post("/input/account", { id: user });
    setCategories(categories);
    setAccounts(accounts);
  }, []);

  const onClickIncome = async () => {
    setIncome(true);
    setExpend(false);
    const categories = await API.post("/input/category", { id: user, type: "수입" });
    setCategories(categories);
  };

  const onClickExpend = async () => {
    setIncome(false);
    setExpend(true);
    const categories = await API.post("/input/category", { id: user, type: "지출" });
    setCategories(categories);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onClickCategory = (e) => {
    setCategory(e.target.value);
  };

  const onClickAccount = (e) => {
    setAccount(e.target.value);
  };

  const onChangeCost = (e) => {
    setCost(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onClick = async () => {
    if (!date || !category || !account || !cost || !title) alert("모두 입력하세요");
    else {
      const result = await API.post("/log/add", {
        user_id: user,
        category_id: category,
        account_id: account,
        title: title,
        date: date,
        cost: cost,
      });
      if (result) {
        const logs = await API.post("/log", { id: user });
        setLog(logs);
      }
    }
  };

  return (
    <Wrapper>
      <Item>
        <Name>분류</Name>
        <Type state={income} onClick={onClickIncome}>
          수입
        </Type>
        <Type state={expend} onClick={onClickExpend}>
          지출
        </Type>
      </Item>
      <Items>
        <Div>
          <Name>날짜</Name>
          <Date type="date" onChange={onChangeDate} />
        </Div>
        <Div>
          <Name>카테고리</Name>
          <Category categories={categories} onClick={onClickCategory} />
        </Div>
        <Div>
          <Name>결제수단</Name>
          <Account accounts={accounts} onClick={onClickAccount} />
        </Div>
      </Items>
      <Items>
        <Div>
          <Name>금액</Name>
          <Content type="text" onChange={onChangeCost} />
        </Div>
        <Div>
          <Name>내용</Name>
          <Content type="text" onChange={onChangeTitle} />
        </Div>
      </Items>
      <Button onClick={onClick}>확인</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 600px;
`;

const Item = styled.div`
  display: flex;
  margin: 10px;
  font-size: 8pt;
`;

const Name = styled.div`
  font-size: 9pt;
  font-weight: bold;
  margin: 3px;
`;

const Type = styled.button`
  width: 50px;
  padding: 3px 0;
  margin-left: 10px;
  font-size: 9pt;
  color: ${(props) => (props.state ? "#ffffff" : "#ff4646")};
  background-color: ${(props) => (props.state ? "#ff4646" : "#ffffff")};
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #cccccc;
  outline: none;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Div = styled.div`
  display: flex;
  width: 200px;
  flex-grow: 1;
`;

const Date = styled.input`
  width: 140px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: #f8f1f1;
  outline: none;
`;

const Content = styled.input`
  width: 235px;
  text-align: center;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: #f8f1f1;
  outline: none;
`;

const Button = styled.button`
  width: 600px;
  height: 30px;
  margin: 17px 0;
  background-color: #ff4646;
  text-align: center;
  color: #ffffff;
  border-radius: 6px;
  font-size: 10pt;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Input;
