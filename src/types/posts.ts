export interface Post {
    id: number
    title: string
    body: string
    userId: number
}

export interface Comment {
    id: number
    body: string
    email: string
    name: string
    postId: number
}

export interface User {
    id: number
    email: string
    name: string
    username: string
    website: string
}
