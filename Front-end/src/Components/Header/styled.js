import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(231, 225, 228, 0.1);
    padding: 1rem 2rem;

`;

export const UlHeader = styled.ul`
    display: flex;
    align-items: center;
    
    li{
        margin-right: 4rem;
        list-style: none;
        
        .width-select{
            width: 140px;
        }

        .width-small{
            width: 100px;
        }

        .color{
            color: white;
        }
    }
`

export const ButtonHearder = styled.button`
    background: white;
    padding: 0.25rem 0.5rem;
    width: 3.5rem;
    height: 2rem;
    border-radius: 10px;

    a{
        color: black;
        font-weight: 500;
    }

    &:hover{
        filter: brightness(0.9);
    }

`