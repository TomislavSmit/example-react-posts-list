import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Comment, Post, User } from '../types/posts'
import PostsContext from '../context/posts'
import PostsDetails from '../components/posts/PostsDetails'
import Layout from '../components/layout/Layout'

interface PostsDetailsPageProps {
    helloFrom: string
}

function PostsDetailsPage({ helloFrom }: PostsDetailsPageProps) {
    console.log(helloFrom, ' PostsDetailsPage')

    const { posts, users, comments } = useContext(PostsContext)

    const { id } = useParams()

    const post = posts.find((el: Post) => el.id === Number(id))
    const postComments = comments.filter(
        (el: Comment) => el.postId === Number(id)
    )
    const user = users.find((el: User) => el.id === Number(post?.userId))

    const renderPost = () => {
        return post ? (
            <PostsDetails
                user={user}
                post={post}
                comments={postComments}
                helloFrom={helloFrom}
            />
        ) : (
            <p>No post found</p>
        )
    }

    return <Layout helloFrom={helloFrom}>{renderPost()}</Layout>
}

export default PostsDetailsPage
