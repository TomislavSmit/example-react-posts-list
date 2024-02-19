import PostsDetails from './PostsDetails'
import { Post } from '../../types/posts'
import SearchBar from '../search/SearchBar'
import { useContext, useState } from 'react'
import PostsContext from '../../context/posts'
import { Link } from 'react-router-dom'

interface PostListProps {
    helloFrom: string
}

function PostsList({ helloFrom }: PostListProps) {
    const { posts, users, comments } = useContext(PostsContext)
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)

    console.log(helloFrom, ' PostsList')

    const renderPosts = () => {
        return filteredPosts.length
            ? filteredPosts.map((post: Post) => {
                  const currentUser = users.find((u) => u.id === post.userId)
                  const currentComments = comments.filter(
                      (c) => c.postId === post.id
                  )

                  return (
                      <Link
                          to={`/post/${post.id}`}
                          key={post.id}
                          className=' hover:bg-gray-100 dark:hover:bg-gray-700'
                      >
                          <PostsDetails
                              post={post}
                              user={currentUser}
                              comments={currentComments}
                              helloFrom={helloFrom}
                          />
                      </Link>
                  )
              })
            : null
    }

    const handleSearch = (term: string) => {
        const usrIds = users
            .filter((user) => {
                return (
                    user.name.toLowerCase().includes(term.toLowerCase()) ||
                    user.username.toLowerCase().includes(term.toLowerCase()) ||
                    user.email.toLowerCase().includes(term.toLowerCase()) ||
                    user.website.toLowerCase().includes(term.toLowerCase())
                )
            })
            .map((user) => user.id)

        const psts = posts.filter((post) => usrIds.includes(post.userId))
        console.log(psts)

        setFilteredPosts(psts)
    }

    const renderSearch = () => {
        return <SearchBar onSubmit={handleSearch} helloFrom={helloFrom} />
    }

    return (
        <>
            {renderSearch()}
            {renderPosts()}
        </>
    )
}

export default PostsList
