import React from 'react';
import List from "../components/Grocery/List";
import styled from 'styled-components';

function GroceryPage() {
  return (
    <div>
      <ListHead>Shopping List</ListHead>
      <List/>
    </div>
  )
}
const ListHead = styled.h1`
  font-size: 50px;
  padding-top: 150px;
`;

export default GroceryPage;