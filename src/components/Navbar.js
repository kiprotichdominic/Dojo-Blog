import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <h1><Link to="/">The Dojo Blog</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar;