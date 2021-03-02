import React from "react";
import styled from "styled-components";

const Modal = ({ name, children }) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{name}</Title>
          <CloseButton>X</CloseButton>
        </Header>
        {children}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  border: 1px solid #888;
  width: 90vh;
  position: relative;
  border-radius: 13px;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.div`
  width: 90%;
  padding: 20px 0 0 40px;
  font-size: 20px;
  text-align: center;
`;

const CloseButton = styled.div`
  padding: 20px 20px 0 0;
  font-size: 15px;
  cursor: pointer;
`;

export default Modal;
