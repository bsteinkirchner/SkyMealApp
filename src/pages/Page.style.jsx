import styled from "styled-components";
import HomeBg from "../imgs/luisa-brimble-aFzg83dvnAI-unsplash.jpg";

export const Body = styled.body`
    background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${HomeBg});
    background-repeat: no-repeat;
    background-size: cover; 
    background-attachment: fixed;
    padding-top: 20px;
    height: 100%;
    width: 100%;
`;