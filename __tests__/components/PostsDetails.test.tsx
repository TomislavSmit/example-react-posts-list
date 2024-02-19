import { render, screen } from '@testing-library/react'
import PostsDetails from '../../src/components/posts/PostsDetails'

test('shows post with user and comments', async () => {
    const post = {
        id: 1,
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        title: 'sunt aut facere',
        userId: 1,
    }

    const user = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    }

    const comments = [
        {
            id: 1,
            postId: 1,
            name: 'id labore ex et quam laborum',
            email: 'Eliseo@gardner.biz',
            body: 'laudantium enim quasi',
        },
        {
            postId: 1,
            id: 2,
            name: 'quo vero reiciendis velit similique earum',
            email: 'Jayne_Kuhic@sydney.com',
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
        },
    ]

    render(
        <PostsDetails
            post={post}
            user={user}
            comments={comments}
            helloFrom='Hello from'
        />
    )

    const userEmail = screen.getByText('Leanne Graham')
    const postTitle = screen.getByText('sunt aut facere')
    const comment = screen.getByText('laudantium enim quasi')

    expect(userEmail).toBeDefined()
    expect(postTitle).toBeDefined()
    expect(comment).toBeDefined()
})
