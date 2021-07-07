import React from "react";
import { Link } from "react-router-dom";
import {AreaLogin} from "./styled";

function Login (prosp){
    return(
        <AreaLogin>
            <h1>{prosp.Titulo}</h1>
            <p>{prosp.Subtitulo}</p>
            <form>
            <label className="a">Login:</label>
            <input type = "email" name="email" placeholder="coloque seu e-mail"></input> <br/>
            <label>Senha:</label>
            <input type="password" name="senha" placeholder="coloque sua senha"></input>
            <Link to="/menu"><button>entrar</button></Link>
        </form>
        <h5>{prosp.SI}</h5>
        </AreaLogin>
        
    )
}

export default Login;
