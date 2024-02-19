import axios from 'axios'

const getPosts = async () => {
    const results = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    )

    return results
}

const getComments = async () => {
    const results = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
    )

    return results
}

const getUsers = async () => {
    const results = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )

    return results
}

// HINT: I would use these API calls if I have custom API.
// Since this API could not be changed to avoid too many requests, I fetch all the data at once with above functions

// const getPost = async (postId: number) => {
//     const results = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`
//     )

//     // console.log('getPost in helper', results)

//     return results
// }

// const getCommentsForPost = async (postId: number) => {
//     const results = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//     )

//     // console.log('getComments in helper', results)

//     return results
// }

// const getUser = async (userId: number) => {
//     const results = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${userId}`
//     )

//     // console.log('getUser in helper', results)

//     return results
// }

export { getPosts, getComments, getUsers }
