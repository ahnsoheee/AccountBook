import React from "react";
import styled from "styled-components";

const SubmitButton = ({ width, height, name }) => {
  return (
    <Submit width={width} height={height}>
      {name}
    </Submit>
  );
};

const Submit = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 5px;
`;

export default SubmitButton;
