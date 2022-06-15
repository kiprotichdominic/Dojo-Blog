import React, { useState } from 'react'
import useFetch from '../useFetch';

function CreatePost() {


    const { data: userList } = useFetch(`https://dummyjson.com/users/`)

    const [title, setTitle] = useState("")
    const [userId, setUserId] = useState(null)
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const blog = { title, userId, body, tags }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(userId);
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title, userId, body, tags
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error("Failed To Post!!")
                }
                res.json()
            })
            .then(res => {
                console.log(res)
            });
    }
    return (
        <div className='create'>
            <h2>Add A new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label>Blog Body</label>
                <textarea
                    name='body'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required >
                </textarea>
                <label>Author</label>
                <select
                    required
                    onChange={(e) => setUserId(parseInt(e.target.value))}
                >
                    <option value="Select Author">Select Author</option>
                    {userList && userList.users.map((user) => {
                        return <option name="userId" type="number" key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
                    })}

                </select>
                <label>Tags</label>
                <input
                    type="text"
                    name='tags'
                    value={tags}
                    onChange={(e) => setTags(e.target.value,)}
                    required />
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}

export default CreatePost