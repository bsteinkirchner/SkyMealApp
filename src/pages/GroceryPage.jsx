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
  margin-top: 25px;
  padding: 10px;
`
export default GroceryPage;