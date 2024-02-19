import Layout from '../components/layout/Layout'

interface ErrorPageProps {
    helloFrom: string
}

function ErrorPage({ helloFrom }: ErrorPageProps) {
    console.log(helloFrom, ' ErrorPage')

    return (
        <Layout helloFrom={helloFrom}>
            <h1>Oops!</h1>
            <p>Page not found.</p>
        </Layout>
    )
}

export default ErrorPage
