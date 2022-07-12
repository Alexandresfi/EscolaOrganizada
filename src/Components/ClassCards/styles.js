import styled from "styled-components";

export const Container = styled.div`

    width: 250px;
    height: 150px;
    border-radius: 10px;
    padding: 1rem;

    background: linear-gradient(90deg, #d80032 47.64%, rgba(104, 35, 56, 0) 98.57%);
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        text-align: right;
        font-size: 37px;
        font-weight: bold;
        text-transform: uppercase;
    }

    &:hover{
        filter: brightness(0.9);
        box-shadow: 0px 0px 14.5152px #0C0407;
    }

`;