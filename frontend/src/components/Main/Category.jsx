import React from "react";
import styled from "styled-components";

const Category = ({ categories, onClick, value }) => {
  if (categories) {
    const category = categories.map((category) => {
      return (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      );
    });
    return (
      <Select onClick={onClick} value={value}>
        <option value="none">선택하세요</option>
        {category}
      </Select>
    );
  }
  return <Select />;
};

const Select = styled.select`
  width: 120px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: #f8f1f1;
  outline: none;
`;

export default Category;
