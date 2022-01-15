import React from "react";
import {Switch, Route} from "react-router-dom";
// import Login from './componentes/login/Login';
import Cadastrar from './Cadastrar/Cadastrar';
import Fre from './Fre/Frquencia';
import Faltas from "./Faltas/Faltas";
import Notas from './Notas/Notas';
import Relatorio from './Relatório/Relatorio';
import Menu from "./Menu/Menu";
import { AlunoProvider } from "./AlunoContext/alunoContext";
import { Login } from "./Components/Login";

export default function Rotas (){
    
    return(
        <Switch>

            <AlunoProvider>

            <Route exact path="/">
                {/* <Login Titulo="Escola Organizada Sistema de Ensino" Subtitulo="Relatório Escolar" SI="Esqueceu a senha? Entre em contato com a secretária"/> */}
                <Login />
            </Route>

            <Route exact path="/menu">
                <Menu/>
            </Route>

            <Route exact path="/cadastrar">
                <Cadastrar  nome="Cadastrar/Editar estudantes"/>
            </Route>

            <Route exact path="/frequencia">
                <Fre/>
            </Route>

            <Route exact path="/faltas">
                <Faltas/>
            </Route>

            <Route exact path="/notas">
                <Notas/>
            </Route>

            <Route exact path="/relatorio">
                <Relatorio/>
            </Route>
            </AlunoProvider>

        </Switch>
    )


}