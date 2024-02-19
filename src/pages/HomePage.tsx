import Layout from '../components/layout/Layout'

interface HomePageProps {
    helloFrom: string
}

function HomePage({ helloFrom }: HomePageProps) {
    console.log(helloFrom, ' HomePage')

    return (
        <Layout helloFrom={helloFrom}>
            <h1 className='p-4'>Home page</h1>
        </Layout>
    )
}

export default HomePage
