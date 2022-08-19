import React, { useEffect, useState } from "react";
import { Container, Content, PLocalidation, ContentInferior } from "./styles";
import LinkdinImg from "../../assects/Linkedin.png"
import GithubImg from "../../assects/Github.png"
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ButtonHearder } from "../Header/styled";


export function TitleDefaults() {
    const localidation = useLocation()
    const history = useHistory()

    const [title, setTitle] = useState([])

    useEffect(() => {
        setTitle([...title, localidation.pathname.split('/')[1]])
        localidation.pathname === '/home' && setTitle([])
    }, [localidation.pathname])


    return (
        <Container>
            <Content>
                <li>
                    <p>Desenvolvedor: <span>Alexandre Nascimento</span> </p>
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

            <ContentInferior>
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

            </ContentInferior>

            {localidation.pathname !== '/home' && <ButtonHearder onClick={()=> history.goBack()}> Voltar</ButtonHearder>}
            
        </Container>
    )
}