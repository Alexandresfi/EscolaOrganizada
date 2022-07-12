import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px 0;
    flex-wrap: wrap;
    
    margin: 3.5rem auto 0 auto;

    list-style: none;
    transition: all linear 0.5s;

    a{
        display: flex;
        gap: 0 50px;
    }

    li{
        margin: 2rem;
    }

`