import styled from "styled-components";

export const ContainerButton = styled.button`
    color: white;
    background: #d3d3d3;
    display: block;

    font-size: 1.5rem;
    border-radius: 10px;
    width: 20vw;
    height: 3.625rem;
    margin: 1rem auto;
    
    &:hover{
        filter: brightness(0.9);
        color: black;
    }
`