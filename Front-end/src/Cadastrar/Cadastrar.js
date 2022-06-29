import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AreaCadastro } from "./styled";
import { AlunoContext } from "../AlunoContext/alunoContext";


function Cadastrar() {



	const [nome, setNome] = useState("");
	const [alunos, setAlunos] = useContext(AlunoContext);
	const [Contador, setContador] = useState(0);
	const [Cep, setCep] = useState("");

	const [Dados, setDados] = useState(
		[
			{
				cep: "",
				Endereco: "",
				NCasa: "",
				Complemento: "",
				Cidade: "",
				Estado: ""
			}
		]);

	function Alterando(event) {
		let n = event.target.value;
		setNome(n);
	}


	function addAluno(event) {
		event.preventDefault()
		if (nome) {
			setAlunos([...alunos, nome].sort());
			setNome("");
			setCep("");
			alert("Atenção! Para cadastrar um novo endereço, basta modificar o CEP e acrescentar o número e complemento")
		}
	}

	useEffect(() => {
		let savedItems = JSON.parse(localStorage.getItem("savedItems"))
		if (savedItems) {
			setAlunos(savedItems)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem("savedItems", JSON.stringify(alunos))
	}, [alunos])


	function CEP(evento) {
		let cep = evento.target.value;
		setCep(cep);
	}

	async function CompletarCEP() {

		const numero = `https://ws.apicep.com/cep/${Cep}.json`;

		if (Cep.toString().length !== 8) {
			alert("CEP inválido, o CEP contém 8 digitos! Coloque apenas números, sem '-' por favor")
		} else {
			const dados = await fetch(numero);
			const endereco = await dados.json()
			if (!endereco.ok) {
				alert("CEP incorreto ou inválido, Verifique o número digitado e tente novamente.")
			} else {
				let informacao = {
					cep: endereco.code,
					Endereco: endereco.address,
					NCasa: "",
					Complemento: "",
					Cidade: endereco.city,
					Estado: endereco.state
				}
				setDados([...Dados, informacao])
				setContador(Contador + 1); //preciso resolver essa questão do contador, toda vez ele volta para o zero toda vez
				// que um elemento for adicionado, porém ele não pode somar de um em um(quando um aluno for adicionado)
			}
		}
	}

	return (
			<AreaCadastro>
				<h1>Cadastro dos estudantes</h1>
				<label>
					Dados do estudante:
				</label> <br />
				<input onChange={Alterando} type="text" name="nome de estudante" placeholder="Nome do estudante" value={nome} autoFocus></input>
				<input type="number" name="ano" placeholder="Ano" /> <br />
				<input type="text" name="turma" placeholder="Turma" />
				<input type="email" name="email" placeholder="E-mail do responsável" /> <br />


				<label>
					Dados dos responsáveis:
				</label> <br />
				<input type="text" name="nome da mãe" placeholder="Nome da mãe" />
				<input type="text" name="nome do pai" placeholder="Nome do pai" /> <br />
				<input type="text" name="celular" placeholder="Número do celular" />
				<input type="text" name="celular 2" placeholder="Número do celular" /><br />

				<label>
					Dados residenciais dos responsáveis:
				</label><br />
				<input onChange={CEP} onBlur={CompletarCEP} type="number" name="CEP" placeholder="CEP" value={Cep} />
				<input onChange={() => { console.log("Nada"); }} type="text" name="Endereço" placeholder="Endereço" value={Dados[`${Contador}`].Endereco} /> <br />
				<input type="number" name="número da casa" placeholder="Nº" />
				<input type="text" name="complemento" placeholder="complemento" /> <br />
				<input onChange={() => { }} type="text" name="Cidade" placeholder="Cidade" value={Dados[`${Contador}`].Cidade} />
				<input onChange={() => { }} type="text" name="Estado" placeholder="Estado" value={Dados[`${Contador}`].Estado} />
				<br />
				<button onClick={addAluno} > cadastrar </button>
				<button > <Link to="/menu">voltar</Link> </button>

			</AreaCadastro>
	)
}


export default Cadastrar;