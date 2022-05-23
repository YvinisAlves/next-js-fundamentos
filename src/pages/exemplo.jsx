import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout"

export default function Exemplo() {
	return (
		<Layout>
			<Cabecalho nome="Jão" idade={69}/>
			<Cabecalho nome="Mria" idade={420}/>
		</Layout>
	)
}