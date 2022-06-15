import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../useFetch'

function BlogDetails() {

    const { id } = useParams()
    const { data: post, error, isPending } = useFetch(`https://dummyjson.com/posts/${id}`)
    const { data: userList } = useFetch(`https://dummyjson.com/users/${id}`)

    const [isDeleted, setIsDeleted] = useState(false)
    const navigate = useNavigate()

    function handleDelete() {
        setIsDeleted(true)
        fetch(`https://dummyjson.com/posts/${post.id}`, {
            method: 'DELETE',
        })
            .then(res => {
                setIsDeleted(true)
                res.json()
            })
            .then(() => {
                navigate("/")
            });

    }

    return (
        <div className='blog-details'>
            {isPending && <h1>Loading...</h1>}
            {error && <div>{error}</div>}
            {post && userList &&
                <article>
                    <h2>{post.title}</h2>
                    <i style={{ fontWeight: "bold" }}>Written By: {userList.firstName} {userList.lastName}</i>
                    <p>{post.body} </p>
                    {!isDeleted && <button onClick={handleDelete} type="button">Delete Blog</button>}
                    {isDeleted && <button disabled type="submit">Deleting Blog...</button>}
                </article>
            }
        </div>
    )
}

export default BlogDetails