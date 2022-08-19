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
import { CardNotas } from "./Components/Notas";
import { Education_1 } from "./Components/Notas/Pages/Education_1";
import { Education_2 } from "./Components/Notas/Pages/Education_2";
import { Education_3 } from "./Components/Notas/Pages/Education_3";
import { TablesNotas } from "./Components/Notas/Pages/Table";



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

                <Route exact path='/grades' component={CardNotas} />

                <Route exact path='/education-1' component={Education_1} />

                <Route exact path='/education-2' component={Education_2} />

                <Route exact path='/education-3' component={Education_3} />

                <Route exact path='/frist-year' component={TablesNotas} />

            </AlunoProvider>

        </Switch>
    )


}