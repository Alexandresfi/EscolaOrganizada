import React, { useState } from "react"
import { Link } from "react-router-dom";
import {AreaCadastro} from "./styled"
import Header from "../Header/Header"

let Teste = [];
let pos = 0;
function Cadastrar(){

	const [nome,setNome] = useState("");
	const [alunos,setAlunos] = useState([]);
	function Alterando (event){
		let n = event.target.value;
		setNome(n);
	}

	function addAluno (event){
		event.preventDefault()
		if(nome) {
			setAlunos([...alunos, nome]);
			Teste=[...alunos, nome];
			setNome("");
		}
		console.log(Teste);
		console.log(alunos);
	}

	return(
		<>
		<Header/>
		<AreaCadastro>
		<h1>Cadastro dos estudantes</h1>
		<label>
			Dados do estudante:
		</label> <br/>
		<input onChange={Alterando} type="text" name="nome de estudante" placeholder="Nome do estudante" value={nome} autoFocus></input>
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
		<button onClick={addAluno} > cadastrar </button>
		<button > <Link to="/menu">voltar</Link> </button>
		
		</AreaCadastro>
		</>
	)
}

export {Cadastrar, Teste};