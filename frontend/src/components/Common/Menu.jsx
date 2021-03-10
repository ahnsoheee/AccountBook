import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Submenu from "./Submenu";

const Menu = ({ user }) => {
  const [click, setClick] = useState(false);
  const onClick = (e) => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  return click ? (
    <>
      <Button onClick={onClick}>{user}님</Button>
      <Submenu />
    </>
  ) : (
    <Button onClick={onClick}>{user}님</Button>
  );
};

const Button = styled.button`
  width: 100px;
  font-size: 12px;
  text-align: center;
  background-color: #ff4646;
  cursor: pointer;
  border: none;
  outline: none;
  color: #ffffff;
`;

export default Menu;