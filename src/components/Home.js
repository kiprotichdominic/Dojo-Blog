import React from 'react'
import BlogList from './BlogList'
import useFetch from '../useFetch'

function Home() {
    const { data: blogs, isLoading, error } = useFetch("https://dummyjson.com/posts")
    const { data: userList } = useFetch("https://dummyjson.com/users")
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isLoading && <h1>Loading...</h1>}
            {blogs && userList && <BlogList blogs={blogs} userList={userList} title="All Blogs" />}
        </div>
    )
}

export default Home;