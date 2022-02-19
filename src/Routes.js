import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Cadastrar from './Cadastrar/Cadastrar';
import Fre from './Fre/Frquencia';
import Faltas from "./Faltas/Faltas";
import Notas from './Notas/Notas';
import Relatorio from './Relatório/Relatorio';
import { AlunoProvider } from "./AlunoContext/alunoContext";
import { Login } from "./Components/Login";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Teacher } from "./Components/TeacherManagement";
import { RegistrationParents } from "./Components/Responsibles";



export function Rotas() {
    const localidation = useLocation()

    return (
        <Switch>

            <AlunoProvider>

                <Route exact path='/' component={Login} />

                {localidation.pathname !== '/' && <Header />}

                <Route exact path='/home' component={Home} />

                <Route exact path='/teacher' component={Teacher} />

                <Route exact path='/parentes' component={RegistrationParents} />

                <Route exact path="/cadastrar">
                    <Cadastrar nome="Cadastrar/Editar estudantes" />
                </Route>

                <Route exact path="/frequencia">
                    <Fre />
                </Route>

                <Route exact path="/faltas">
                    <Faltas />
                </Route>

                <Route exact path="/notas">
                    <Notas />
                </Route>

                <Route exact path="/relatorio">
                    <Relatorio />
                </Route>

            </AlunoProvider>

        </Switch>
    )


}