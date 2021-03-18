import React from "react";
import styled from "styled-components";
import { API } from "../../api/api";

const CategoryList = ({ id, name, user, setIncomes, setExpends }) => {
  const onUpdate = async () => {
    alert("준비 중 입니다.");
  };

  const onDelete = async () => {
    const result = await API.delete("/category", { id: id });
    if (result) {
      const incomes = await API.post("/category", { id: user, type: "수입" });
      const expends = await API.post("/category", { id: user, type: "지출" });
      setIncomes(incomes);
      setExpends(expends);
    }
  };

  return (
    <List>
      <Name>{name}</Name>
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

export default CategoryList;
