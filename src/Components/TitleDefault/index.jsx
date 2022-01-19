import React from "react";
import { Container, Content } from "./styles";
import LinkdinImg from "../../assects/Linkedin.png"
import GithubImg from "../../assects/Github.png"


export function TitleDefaults() {
    return (
        <Container>
            <Content>
                <li>
                    <p>Desenvolvedor: </p>
                </li>

                <li>
                    <h3>Alexandre Nascimento</h3>
                </li>
            </Content>

            <Content>
                {/* <li>
                    { new Intl.DateTimeFormat('pt-Br').format( new Date())}
                </li> */}
                <li>
                    <a href="https://www.linkedin.com/in/alexandre-nascimento-66692920a/">
                        <img src={LinkdinImg} alt='Linkedin' />
                    </a>

                </li>

                <li>
                    <a href="https://github.com/Alexandresfi">
                        <img src={GithubImg} alt='Linkedin' />
                    </a>

                </li>

            </Content>
        </Container>
    )
}