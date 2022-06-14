import React from 'react'
import BlogList from './BlogList'
import useFetch from '../useFetch'

function Home() {
    const { data:blogs, isLoading, error } = useFetch("https://dummyjson.com/posts")
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isLoading && <h1>Loading...</h1>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home;