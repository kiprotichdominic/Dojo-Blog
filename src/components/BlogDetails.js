import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'

function BlogDetails() {

    const { id } = useParams()
    const { data:posts, error, isPending } = useFetch(`https://dummyjson.com/posts/${id}`)
    const { data:userList } = useFetch(`https://dummyjson.com/users/${id}`)

    return (
        <div className='blog-details'>
            {isPending && <h1>Loading...</h1>}
            {error && <div>{error}</div>}
            {posts && userList &&
                <article>
                    <h2>{posts.title}</h2>
                    <i style={{ fontWeight: "bold" }}>Written By: {userList.firstName} {userList.lastName}</i>
                    <p>{posts.body} </p>
                </article>
            }
        </div>
    )
}

export default BlogDetails