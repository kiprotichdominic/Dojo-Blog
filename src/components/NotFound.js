import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='not-found'>
            <h2>Sorry</h2>
            <p>That Page cannot be found</p>
            <div className='not-found-back'>
                <Link to="/">Back to homepage...</Link>
            </div>
        </div>
    )
}

export default NotFound