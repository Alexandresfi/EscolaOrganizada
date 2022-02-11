import styled from "styled-components";

export const Container = styled.section`

    width: 70vw;
    margin: 2rem auto;
    padding: 1rem 1.5rem;
    border-radius: 8px;

    background: white;
    color: black;
`
export const H1 = styled.h1`
    text-align: center;
`

export const Content = styled.div`
    margin: 1.5rem 0;

    span{
        color: red;
        font-size: .75rem;
    }

`

export const ButtonGo = styled.button`

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

`

export const ButtonBack = styled.button`
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

export const HearderProgress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
