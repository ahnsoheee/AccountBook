import React from "react";
import styled from "styled-components";
import { API } from "../../api/api";

const AccountList = ({ id, name, asset, user, setAccounts }) => {
  const onUpdate = async () => {
    alert("준비 중 입니다.");
  };

  const onDelete = async () => {
    const result = await API.delete("/account", { id: id });
    if (result) {
      const accounts = await API.post("/account", { id: user });
      setAccounts(accounts);
    }
  };

  return (
    <List>
      <Name>{name}</Name>
      <Asset>{asset}원</Asset>
      <UpdateButton onClick={onUpdate}>수정</UpdateButton>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </List>
  );
};

const List = styled.div`
  display: flex;
  margin: 5px;
  font-size: 11pt;
  font-weight: bold;
  justify-content: center;
`;

const Name = styled.div`
  width: 230px;
  color: #000000;
  margin-left: 30px;
  text-align: left;
`;

const Asset = styled.div`
  width: 150px;
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

export default AccountList;
