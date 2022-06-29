import React from "react";
import { BoxLef, BoxRight, ButtonLoginGoogle, Container, ContainerForm, H1Login } from "./styles";
import GoggleImg from "../../assects/LogoGoogle.svg"
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <Container>
            <BoxLef>
                <H1Login>
                    Muito mais que um cólegio, uma segunda família...
                </H1Login>
            </BoxLef>

            <BoxRight>

                <ButtonLoginGoogle>
                    <img src={GoggleImg} alt='google' />
                    Entrar com o Google
                </ButtonLoginGoogle>

                <ContainerForm>
                    <TextField
                        id="standard-textarea"
                        label="Nome do Colegio"
                        placeholder="Nome do Colegio"
                        required
                        multiline
                    />

                    <TextField
                        id="standard-textarea"
                        label="E-mail"
                        type="email"
                        placeholder="colegio@exemplo.com"
                        required
                    />

                    <TextField
                        id="standard-textarea"
                        label="Senha"
                        type='password'
                        placeholder="Sua Senha"
                        required

                    />

                    <button type="submit">
                        <Link to='/home'>
                            Login
                        </Link>
                    </button>

                    <p>Esqueceu sua senha? <span> Clique Aqui!</span></p>
                </ContainerForm>

            </BoxRight>


        </Container>
    )
}