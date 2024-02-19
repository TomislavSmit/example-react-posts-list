import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { Comment, Post, User } from '../types/posts'
import { getComments, getPosts, getUsers } from '../api/posts'

interface PostsContextProps {
    posts: Post[]
    users: User[]
    comments: Comment[]
}

const PostsContext = createContext<PostsContextProps>({
    posts: [],
    users: [],
    comments: [],
})

function PostsProvider({ children }: PropsWithChildren) {
    const [posts, setPosts] = useState<Post[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [comments, setComments] = useState<Comment[]>([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // HINT: fetching all data since it's faster than
                // making hundrends of API requests for each post
                const responsePosts = await getPosts()
                const responseUsers = await getUsers()
                const responseComments = await getComments()

                setPosts(responsePosts.data)
                setUsers(responseUsers.data)
                setComments(responseComments.data)

                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error('Error fetching posts:', error)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <PostsContext.Provider value={{ posts, users, comments }}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsProvider }
export default PostsContext
