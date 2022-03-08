import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>
            <main>sadasdasd{children}</main>
        </>
    )
}