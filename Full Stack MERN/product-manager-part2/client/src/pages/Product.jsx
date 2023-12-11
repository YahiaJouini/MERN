import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Product() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDesc] = useState('')
    const HandleSubmit=(e)=> {
        e.preventDefault()
        axios.post('http://localhost:5000/api/create',{title,price,description})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <input
                    type="text"
                    value={title}
                    placeholder='Title'
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="Number"
                    placeholder='Price'
                    onChange={e => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    placeholder='Description'
                    onChange={e => setDesc(e.target.value)}
                />
                <button>Create</button>
            </form>
        </div>
    )
}

export default Product