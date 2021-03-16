import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CategoryList from "./CategoryList";

const CategorySetting = ({ user, setCategory, incomes, expends, setIncomes, setExpends }) => {
  const onClose = () => {
    setCategory(false);
  };

  const income = incomes.map((income) => {
    return <CategoryList key={income.id} id={income.id} name={income.name} user={user} setIncomes={setIncomes} setExpends={setExpends} />;
  });

  const expend = expends.map((expend) => {
    return <CategoryList key={expend.id} id={expend.id} name={expend.name} user={user} setIncomes={setIncomes} setExpends={setExpends} />;
  });

  return (
    <Modal title="카테고리 관리" onClose={onClose}>
      <Type backgroundColor="#ff9292">수입</Type>
      {income}
      <Type backgroundColor="#ff4646">지출</Type>
      {expend}
    </Modal>
  );
};

const Type = styled.div`
  width: 80px;
  margin: 30px 0 20px 20px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 11pt;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
`;

export default CategorySetting;
