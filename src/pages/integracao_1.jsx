import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {
	const [cliente, setCliente] = useState({})
	const [codigo, setCodigo] = useState(1)

	async function obterCliente(){
		const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
		const dados = await resp.json()
		setCliente(dados)
		/*fetch(`http://localhost:3000/api/clientes/123/${codigo}`)
			.then(resp => resp.json())
			.then(dados => setCliente(dados))*/
	}

	

	return (
		<Layout>
			<input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
			<button onClick={obterCliente}>Obter Cliente</button>
			<ul>
				<li>Código: {cliente.id}</li>
				<li>Nome: {cliente.nome}</li>
				<li>Email: {cliente.email}</li>
			</ul>
		</Layout>
	)
}