import React from "react";
import styled from "styled-components";

const Tab = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 600px;
  height: 35px;
  display: flex;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;

export default Tab;
