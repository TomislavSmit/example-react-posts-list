import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import PostsDetailsPage from './pages/PostsDetailsPage'
import ErrorPage from './pages/ErrorPage'

function App() {
    const helloFrom = 'Hello from'

    console.log(helloFrom, ' App')

    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage helloFrom={helloFrom} />} />
                <Route
                    path='/posts'
                    element={<PostsPage helloFrom={helloFrom} />}
                />
                <Route
                    path='/post/:id'
                    element={<PostsDetailsPage helloFrom={helloFrom} />}
                />
                <Route path='*' element={<ErrorPage helloFrom={helloFrom} />} />
            </Routes>
        </Router>
    )
}

export default App
