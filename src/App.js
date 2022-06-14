import { Routes, Route } from 'react-router-dom';
import './App.css'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/create' element={<CreatePost />} />
                </Routes>
            </div>
        </>
    )
}

export default App