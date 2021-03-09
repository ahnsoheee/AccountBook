import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [income, setIncome] = useState(true);
  const [expend, setExpend] = useState(false);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [account, setAccount] = useState("");
  const [cost, setCost] = useState("");
  const [content, setContent] = useState("");

  const onClickIncome = () => {
    setIncome(true);
    setExpend(false);
  };

  const onClickExpend = () => {
    setIncome(false);
    setExpend(true);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeAccount = (e) => {
    setAccount(e.target.value);
  };

  const onChangeCost = (e) => {
    setCost(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
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
          <Select onChange={onChangeCategory} />
        </Div>
        <Div>
          <Name>결제수단</Name>
          <Select onChange={onChangeAccount} />
        </Div>
      </Items>
      <Items>
        <Div>
          <Name>금액</Name>
          <Content type="text" onChange={onChangeCost} />
        </Div>
        <Div>
          <Name>내용</Name>
          <Content type="text" onChange={onChangeContent} />
        </Div>
      </Items>
      <Button>확인</Button>
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
`;

const Select = styled.select`
  width: 120px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: #f8f1f1;
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
