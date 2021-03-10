import React, { useState, useEffect, useCallack } from "react";
import styled from "styled-components";
import Content from "./Content";
import Input from "./Input";
import Log from "./Log";
import { API } from "../../api/api";

const List = ({ user }) => {
  const [logs, setLog] = useState("");

  useEffect(async () => {
    const logs = await API.post("/log", { id: user });
    setLog(logs);
  }, []);

  let sep = "";

  if (logs) {
    const costs = [];
    let income = 0;
    let expend = 0;
    let i = -1;
    logs.forEach((log) => {
      let date = log.date;
      if (sep !== date) {
        costs[i] = [income, expend];
        sep = date;
        i += 1;
        income = 0;
        expend = 0;
      }
      if (log.type == "수입") income += log.cost;
      else expend += log.cost;
    });

    costs[i] = [income, expend];
    i = 0;
    const logList = logs.map((log) => {
      const dates = log.date.split("-");
      const date = `${dates[1]}월 ${dates[2].substring(0, 2)}일`;
      let code = "-";
      if (log.type === "수입") code = "+";
      if (sep !== date) {
        sep = date;
        return (
          <Wrapper key={date}>
            <Div>
              <Date>{date}</Date>
              <Income>+{costs[i][0]}원</Income>
              <Expend>-{costs[i][1]}원</Expend>
            </Div>
            <Log key={log.id} type={log.type} title={log.title} category={log.category} account={log.account} cost={`${code}${log.cost}`} />
          </Wrapper>
        );
      } else {
        return (
          <Log key={log.id} type={log.type} title={log.title} category={log.category} account={log.account} cost={`${code}${log.cost}`} />
        );
      }
    });

    return (
      <Content>
        <Input user={user} setLog={setLog} />
        {logList}
      </Content>
    );
  }
  return <Content></Content>;
};

const Wrapper = styled.div``;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10pt;
  font-weight: bold;
  padding: 4px;
  border-top: 1px solid #cccccc;
`;

const Date = styled.div`
  width: 455px;
`;

const Income = styled.div`
  color: #ff4646;
  text-align: right;
`;

const Expend = styled.div`
  color: #ff9292;
  padding-left: 10px;
  text-align: right;
`;

export default List;
