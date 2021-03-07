import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [income, setIncome] = useState(true);
  const [expend, setExpend] = useState(false);

  const onClickIncome = () => {
    setIncome(true);
    setExpend(false);
  };

  const onClickExpend = () => {
    setIncome(false);
    setExpend(true);
  };

  return (
    <Wrapper>
      <Item>
        <Name>분류</Name>
        <Button state={income} onClick={onClickIncome}>
          수입
        </Button>
        <Button state={expend} onClick={onClickExpend}>
          지출
        </Button>
      </Item>
      <Items>
        <Div>
          <Name>날짜</Name>
          <Date type="date" />
        </Div>
        <Div>
          <Name>카테고리</Name>
          <Select />
        </Div>
        <Div>
          <Name>결제수단</Name>
          <Select />
        </Div>
      </Items>
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

const Button = styled.button`
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
  flex-grow: 1;
  justify-content: center;
  margin: 10px;
`;

const Div = styled.div`
  display: flex;
  width: 200px;
`;

const Date = styled.input`
  width: 140px;
  margin-left: 10px;
  border: none;
`;

const Select = styled.select`
  width: 120px;
  margin-left: 10px;
`;

export default Input;
