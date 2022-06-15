import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({ blogs, title, userList }) {
    return (
        <>
            <h2>{title}</h2>
            {blogs.posts.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        {userList.users.map((user) => {
                            if (user.id === blog.userId) {
                                return <i key={user.id} style={{ fontWeight: "bold" }}>Written By: {user.firstName} {user.lastName}</i>
                            }
                        })}
                        <p>{blog.body}</p>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default BlogList