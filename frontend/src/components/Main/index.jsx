import React, { useState } from "react";
import Tab from "./Tab";
import styled from "styled-components";
import TabItem from "./TabItem";
import Content from "./Content";

const Main = () => {
  const [list, setList] = useState(true);
  const [cal, setCal] = useState(false);
  const [stat, setStat] = useState(false);

  const onClickList = () => {
    setList(true);
    setCal(false);
    setStat(false);
  };

  const onClickCal = () => {
    setList(false);
    setCal(true);
    setStat(false);
  };

  const onClickStat = () => {
    setList(false);
    setCal(false);
    setStat(true);
  };

  return (
    <>
      <Wrapper>
        <Tab>
          <TabItem name="내역" onClick={onClickList} state={list} />
          <TabItem name="달력" onClick={onClickCal} state={cal} />
          <TabItem name="통계" onClick={onClickStat} state={stat} />
        </Tab>
      </Wrapper>
      <Wrapper>{list ? <Content>내역</Content> : cal ? <Content>달력</Content> : <Content>통계</Content>}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f8f1f1; ;
`;

export default Main;
