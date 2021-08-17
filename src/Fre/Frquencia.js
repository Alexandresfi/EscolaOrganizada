import React from "react"
import { Link } from "react-router-dom"
import { ConteudoFrequecia } from "./styled"
import Header from "../Header/Header"

export default function Fre (){
    return(
        <>
        <Header/>

        <section className="frequencia" >
            <h3> Resistro de Conteúdos e frêquencia das aulas</h3>
            
            <ConteudoFrequecia>
            <select>
            <option value="Selecione">Selecione</option>
                    <option value="7°"> 7° Ano A </option>
                    <option value="8°">8° Ano B</option>
                    <option value="9°">9° Ano C</option>
            </select>

            <input type="date"/> <br/>
            <p>Turno da manhã</p>

            <input type="checkbox" name="primeira" value="1 aula"/>1° aula
            <input type="checkbox" name="segunda" value="2 aula"/>2° aula
            <input type="checkbox" name="terceira" value="3 aula"/>3° aula
            <input type="checkbox" name="quarta" value="4 aula"/>4° aula

            <input type="checkbox" name="quinta" value="5 aula"/>5° aula
            <p>Turno da tarde</p>
            <input type="checkbox" name="primeira" value="1 aula"/>1° aula
            <input type="checkbox" name="segunda" value="2 aula"/>2° aula
            <input type="checkbox" name="terceira" value="3 aula"/>3° aula
            <input type="checkbox" name="quarta" value="4 aula"/>4° aula
            <input type="checkbox" name="quinta" value="5 aula"/>5° aula

            <p>Quais foram as habilidades e competências da aula</p>
                <textarea name="conteudo" cols="50"  rows="10"></textarea> <br/>
                <button> <Link to="/faltas">Salvar e seguir</Link></button>
                <button> <Link to="/menu"> Cancelar</Link></button>
                
            </ConteudoFrequecia>

        </section>
        </>
    )
}