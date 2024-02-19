import { Comment, Post, User } from '../../types/posts'
import PostsComment from './PostsComment'

interface PostProps {
    post: Post
    user: User | undefined
    comments: Comment[] | undefined
    helloFrom: string
}

function PostsDetails({ post, user, comments, helloFrom }: PostProps) {
    console.log(helloFrom, ' PostDetails')

    const renderComments = () => {
        return comments?.length ? (
            comments.map((comment) => {
                return (
                    <PostsComment
                        key={comment.id}
                        comment={comment}
                        helloFrom={helloFrom}
                    />
                )
            })
        ) : (
            <div className='block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                No comments
            </div>
        )
    }

    return (
        <>
            <div
                key={post.id}
                className='my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
            >
                {user ? (
                    <p className='inline-flex items-center mr-3 text-md text-gray-900 dark:text-white font-semibold'>
                        <img
                            className='mr-2 w-12 h-12 rounded-full'
                            src={`https://i.pravatar.cc/300?u=${user.id}`}
                        />
                        {user.name}
                    </p>
                ) : null}
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {post.title}
                </h5>
                <p className='font-normal text-gray-700 dark:text-gray-400 mb-8'>
                    {post.body}
                </p>
                {renderComments()}
            </div>
        </>
    )
}

export default PostsDetails
