import styled from "styled-components";

export const ContainerButton = styled.button`

    background: #922748;
    color: white;
    display: block;

    font-size: 1.2rem;
    border-radius: 10px;
    width: 20vw;
    height: 3.625rem;
    margin: 1rem auto;
    
    &:hover{
        filter: brightness(0.9);
    }

    @media (max-width: 660px) {
        width: 100%;
    }
`