import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({ blogs, title }) {
    return (
        <>
            <h2>{title}</h2>
            {blogs.posts.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default BlogList