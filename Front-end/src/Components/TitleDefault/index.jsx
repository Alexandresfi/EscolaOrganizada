import React, { useEffect } from "react";
import { Container, Content, PLocalidation } from "./styles";
import LinkdinImg from "../../assects/Linkedin.png"
import GithubImg from "../../assects/Github.png"
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ButtonHearder } from "../Header/styled";


export function TitleDefaults() {
    const localidation = useLocation()
    const history = useHistory()

    const [title, setTitle] = React.useState([])

    useEffect(() => {
        setTitle([...title, localidation.pathname.split('/')[1]])
        localidation.pathname === '/home' && setTitle([])
    }, [localidation.pathname])


    return (
        <Container>
            <Content>
                <li>
                    <p>Desenvolvedor: </p>
                </li>

                <li>
                    <h3>Alexandre Nascimento</h3>
                </li>

                <li>
                    {localidation.pathname !== '/home' && (<PLocalidation>| Você está aqui:</PLocalidation>)}
                </li>

                <li>
                    {localidation.pathname !== '/home' && (
                        <>
                            {title?.map((item, index) => (
                                <PLocalidation key={index}> {item} </PLocalidation>
                            ))}
                        </>
                    )}
                </li>
            </Content>

            <Content>
                <li>
                    {localidation.pathname === '/home' && (
                        <a href="https://www.linkedin.com/in/alexandre-nascimento-66692920a/">
                            <img src={LinkdinImg} alt='Linkedin' />
                        </a>
                    )}

                </li>

                <li>
                    {localidation.pathname === '/home' && (
                        <a href="https://github.com/Alexandresfi">
                            <img src={GithubImg} alt='Linkedin' />
                        </a>
                    )}

                </li>

            </Content>
            {localidation.pathname !== '/home' && <ButtonHearder onClick={()=> history.goBack()}> Voltar</ButtonHearder>}
            
        </Container>
    )
}