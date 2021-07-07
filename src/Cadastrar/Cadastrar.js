import React from "react"
import { Link } from "react-router-dom";
import {AreaCadastro} from "./styled"


function Cadastrar(){

	function alterando (event){
		let t = event.target.value;
		console.log(t)
	}

	return(
		<AreaCadastro>
		<h1>Cadastro dos estudantes</h1>
		<label>
			Dados do estudante:
		</label> <br/>
		<input onChange={alterando} type="text" name="nome de estudante" placeholder="Nome do estudante"/>
		<input type="text" name="turma" placeholder="Turma"/>
		<input type="email" name="email" placeholder="E-mail do responsável"/> <br/>

		
		<label>
			Dados dos responsáveis:
		</label> <br/>
		<input type="text" name="nome da mãe" placeholder="Nome da mãe"/>
				<input type="text" name="nome do pai" placeholder="Nome do pai"/> <br/>
				<input type="text" name="celular" placeholder="Numero do celular"/>
				<input type="text" name="celular 2" placeholder="Numero do celular"/><br/>

		<label>
			Dados residenciais dos responsáveis:
		</label><br/>
		<input type="text" name="Endereço" placeholder="Endereço"/>
		<input type="number" name="número da casa" placeholder="Nº"/> <input type="text" name="complemento"
		placeholder="complemento"/> <br/>
		<input type="text" name="Cidade" placeholder="Cidade"/>
		<input type="text" name="Estado" placeholder="Estado"/>
		<br/>
		<input type="submit" value="cadastrar"/>
		<button><Link to="/menu">voltar</Link></button>
		</AreaCadastro>
	)
}

export default Cadastrar;