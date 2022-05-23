import { useRouter } from "next/router";
import Layout from "../../components/Layout";


export default function ClientePorCodigo(){
    const router = useRouter()
    return (
        <Layout>

            <span>Codigo {router.query.codigo}</span>
        </Layout>
    )
}