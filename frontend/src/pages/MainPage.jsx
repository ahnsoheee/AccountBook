import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Main/Header";
import Signin from "../components/Sign/Signin";
import List from "../components/Main/List";
import Tab from "../components/Main/Tab";
import TabItem from "../components/Main/TabItem";
import Content from "../components/Main/Content";
import { API } from "../api/api";

const MainPage = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [isAuth, setAuth] = useState(false);

  const [list, setList] = useState(true);
  const [cal, setCal] = useState(false);
  const [stat, setStat] = useState(false);
  const [logs, setLogs] = useState("");

  useEffect(async () => {
    const user = await API.get("/user/auth");
    if (user) {
      setName(user.name);
      setId(user.id);
      setAuth(true);
      const logs = await API.post("/log", { id: id });
      setLogs(logs);
    } else {
      setAuth(false);
    }
  }, [name, isAuth]);

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

  return isAuth ? (
    <>
      <Header user={name} />
      <>
        <Wrapper>
          <Tab>
            <TabItem name="내역" onClick={onClickList} state={list} />
            <TabItem name="달력" onClick={onClickCal} state={cal} />
            <TabItem name="통계" onClick={onClickStat} state={stat} />
          </Tab>
        </Wrapper>
        <Wrapper>{list ? <List logs={logs} /> : cal ? <Content>달력</Content> : <Content>통계</Content>}</Wrapper>
      </>
    </>
  ) : (
    <Signin />
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  background-color: #f8f1f1;
`;

export default MainPage;
