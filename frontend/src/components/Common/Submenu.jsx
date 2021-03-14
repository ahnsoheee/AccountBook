import React from "react";
import styled from "styled-components";
import { API } from "../../api/api";

const Submenu = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: #ff4646;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
`;

export default Submenu;
