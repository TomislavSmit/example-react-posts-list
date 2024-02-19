import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostsProvider } from './context/posts.tsx'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PostsProvider>
            <App />
        </PostsProvider>
    </React.StrictMode>
)
