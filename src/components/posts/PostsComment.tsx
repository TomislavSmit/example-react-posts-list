import { Comment } from '../../types/posts'

interface PostsCommentProps {
    comment: Comment
    helloFrom: string
}

function PostsComment({ comment, helloFrom }: PostsCommentProps) {
    console.log(helloFrom, ' PostComments')

    const renderComments = () => {
        return (
            <div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold'>
                        <img
                            className='mr-2 w-6 h-6 rounded-full'
                            src={`https://i.pravatar.cc/300?u=${comment.id}`}
                        />
                        {comment.email}
                    </p>
                </div>
                <div>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>
                        {comment.body}
                    </p>
                </div>
            </div>
        )
    }

    return renderComments()
}

export default PostsComment
