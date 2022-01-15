import styled from "styled-components";

export const Container = styled.div`
    width: 78.81rem;
    
    margin: 11vh auto;

    display: flex;
    justify-content: center;
`

export const BoxLef = styled.div`
    width: 35.875rem;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #682338 47.64%, rgba(104, 35, 56, 0) 98.57%);

    border-radius: 29px 0px 0px 29px;
`

export const H1Login = styled.h1`
    width: 27.375rem;
    height: 13rem;
    size: 4.5rem;

    font-style: normal;
    font-weight: normal;

    color: white;
`

export const BoxRight = styled.div`
    width: 44.25rem;

    background: linear-gradient(109.13deg, rgba(239, 239, 239, 0.03) 3.12%, rgba(239, 239, 239, 0.1) 89.96%, rgba(239, 239, 239, 0.174015) 89.96%);
    backdrop-filter: blur(20px);
    border-radius: 21px;

    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const ButtonLoginGoogle = styled.button`
    width: 24rem;
    height: 4rem;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: rgba(0, 0, 0, 0.54);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 2.11rem;

    background: #FFFFFF;
    box-shadow: 0px 0px 2.41919px rgba(0, 0, 0, 0.084), 0px 2.41919px 2.41919px rgba(0, 0, 0, 0.168);
    border-radius: 4.83838px;

    &:hover{
        background: #FFFFFF;
        box-shadow: 0px 0px 14.5152px rgba(66, 133, 244, 0.7);
        border-radius: 4.83838px;
    }
`

export const ContainerForm = styled.div`
    width: 33.625rem;
    height: 24.625rem;

    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button{
        width:11.49rem;
        height: 3.625rem;
        margin: 0 auto;

        background: #922748;
        border-radius: 21px;

        font-weight: normal;
        font-size: 1.125rem;
        line-height: 1.68rem;
        

        a{
            color: #FFFFFF;
        }

        &:hover{
            filter: brightness(0.9);
            box-shadow: 0px 0px 14.5152px #0C0407;
        }
    }

    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;

        margin: 0 auto;

        color: #FFFFFF;

        span{
            font-weight: bolder;
            cursor: pointer;
        }
    }


`