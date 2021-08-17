import React from "react";
import {AreaLogin} from "./styled";

function Login (prosp){
    return(
        <AreaLogin>
            <h1>{prosp.Titulo}</h1>
            <p>{prosp.Subtitulo}</p>
            <form>
            <label className="a">
                Login:
                <input type = "email" name="email" placeholder="E-mail"></input> <br/>
            </label>

            <label>
                Senha:
                <input type="password" name="senha" placeholder="Senha"></input>
            </label>
            
            <button type="submit">entrar</button>
        </form>
        <h5>{prosp.SI}</h5>
        </AreaLogin>
        
    )
}

export default Login;