import { Routes, Route } from 'react-router-dom';
import './App.css'
import BlogDetails from './components/BlogDetails';
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound';

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/create' element={<CreatePost />} />
                    <Route path='/blog/:id' element={<BlogDetails />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default App