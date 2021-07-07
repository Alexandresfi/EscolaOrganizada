import React from "react";
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
            <button type="submit">entrar</button>
        </form>
        <h5>{prosp.SI}</h5>
        </AreaLogin>
        
    )
}

export default Login;