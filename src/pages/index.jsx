import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
			flexWrap: "wrap",
		}}>
			<Navegador destino="/estiloso">Estiloso</Navegador>
			<Navegador destino="/jsx" cor="purple">Jsx</Navegador>
			<Navegador destino="/exemplo" cor="crimson">Exemplo</Navegador>
			<Navegador destino="/navegacao" cor="green">Navegacao 01</Navegador>
			<Navegador destino="/cliente/Teste" cor="blue">Navegacao 02</Navegador>
			<Navegador destino="/estado" cor="pink">Navegacao 03</Navegador>
			<Navegador destino="/integracao_1" cor="gold">Integracao 01</Navegador>
		</div>
	)
}