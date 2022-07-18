import React from 'react';
import { FaCheese, FaBreadSlice, FaFish, FaLeaf } from 'react-icons/fa';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div>
        <Filter>Filter by diet</Filter>
        <List>
            <SLink to={'/diet/ketogenic'}>
                <FaCheese/>
                <h4>Keto</h4>
            </SLink>
            <SLink to={'/diet/gluten-free'}>
                <FaBreadSlice/>
                <h4>Gluten-free</h4>
            </SLink>
            <SLink to={'/diet/paleo'}>
                <FaFish/>
                <h4>Paleo</h4>
            </SLink>
            <SLink to={'/diet/vegan'}>
                <FaLeaf/>
                <h4>Vegan</h4>
            </SLink>
        </List>
    </div>
  )
}

const Filter = styled.h2`
    color: white;
    font-weight: 600;
`;

const List = styled.div`
    display flex;
    justify-content: center;
    margin: 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background-color: black;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color:white;
        }
        h4{
            color:white
        }
    }
`;
export default Categories;