import Layout from "../../components/layout";
import type {ReactElement} from "react";


export default function Home() {
    return <div>HomePage</div>
}

Home.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}