import Layout from '../components/layout/Layout'
import PostsList from '../components/posts/PostsList'

interface PostsPageProps {
    helloFrom: string
}

function PostsPage({ helloFrom }: PostsPageProps) {
    console.log(helloFrom, ' PostsPage')

    const renderPosts = () => {
        return <PostsList helloFrom={helloFrom} />
    }

    return <Layout helloFrom={helloFrom}>{renderPosts()}</Layout>
}

export default PostsPage
