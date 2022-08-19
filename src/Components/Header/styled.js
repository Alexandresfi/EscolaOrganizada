import styled, {css} from "styled-components";

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

    @media (max-width: 660px) {
        display: none;
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

export const ButtonMobile = styled.div`
display: none;

@media(max-width: 806px){
    display: block;
    width: 47px;
    border-top: 4px solid;
    transition: .3s;
    color: transparent;

    &::after{
        content: '';
        display: block;
        width: 47px;
        height: 4px;
        margin-top: 5px;
        background-color: #FFFF;
        ${(props)=> 
            props.menu && css`
            transform: rotate(-135deg);
            position: relative;
            top: -7px;
            `
        }
    }

    &::before{
        content: '';
        display: block;
        width: 47px;
        height: 4px;
        margin-top: 5px;
        background-color: #FFFF;

        ${(props)=> 
            props.menu && css`
            transform: rotate(135deg);;
            `
        }
    }

}
`

export const Menumobile = styled.div`
    height: 1vh;
    background-color: #2b2d42;
    padding-left: 10px;
    position: absolute;
    top: 111px;
    right: 110vw;
    transition: ease .2s;
    ${(props)=> 
        props.Menu && css`
        /* top: 10px; */
        margin-top: 10px;
        left: 0vw;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        `
    }

`

export const LiMobile = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`