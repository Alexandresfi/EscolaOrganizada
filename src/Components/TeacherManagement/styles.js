import styled from "styled-components";

export const Container = styled.section`

    width: 70vw;
    margin: 2rem auto;
    padding: 1rem 1.5rem;
    border-radius: 8px;

    background: white;
    color: black;

    @media (max-width: 660px) {
        width: 92%;
    }
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

export const HearderProgress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
