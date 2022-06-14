import React from 'react'

function BlogList({ blogs, title }) {
    return (
        <>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </>
    )
}

export default BlogList