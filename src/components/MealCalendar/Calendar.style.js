import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    will-change: transform;
    position: fixed;
    left: 0;
    margin-top: 5%;
    width: 100%;
    z-index: 1;
    background: #1a1a1a;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
`;
export const NavList = styled.ul`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color:white; 
    list-style: none;
    text-decoration: none;
`;
export const NavItem = styled.li`
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
`;
export const NLink = styled(Link)`
    color: white;
`;
export const NavThumb = styled.div`
    display: block;
    height: 120px;
    background: #ffffff;
    -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);

    &:before {
        content: attr(data-letter);
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-size: 100px;
        text-transform: uppercase;
        opacity: 0.15;
    }
`;

export const NavLabel = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    margin: 0;
    
    @media (max-width: 850px){
        font-size: 14px;
    }
`;
export const Section = styled.section`
    will-change: transform;
    transition: transform 0.3s;
    transform: scale(1.5);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    background: #fff;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
`;