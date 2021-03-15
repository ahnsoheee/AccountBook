import React from "react";
import styled from "styled-components";
import Modal from "../Common/Modal";

const CategorySetting = ({ setCategory, income, expend }) => {
  const onClose = () => {
    setCategory(false);
  };
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
