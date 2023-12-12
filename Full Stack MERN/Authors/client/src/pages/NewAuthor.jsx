import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

function NewAuthor() {

    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    function HandleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/api/author/new', { name })
            .then(res => { navigate('/authors') })
            .catch(err => setError(err.response.data))
    }

    return (
        <div>
            <Link to='/authors'>Home</Link>
            <h3>Add new Author : </h3>
            <form onSubmit={HandleSubmit}>
                <fieldset>
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <div>
                        <button className="btn" onClick={() => { navigate('/authors') }}>Cancel</button>
                        <input className="btn" type="submit" value="Submit" />
                    </div>
                </fieldset>
                <p>{error && error.errors.name.message}</p>
            </form>
        </div>
    )
}

export default NewAuthor