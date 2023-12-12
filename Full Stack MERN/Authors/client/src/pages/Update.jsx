import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Update() {

    const [name, setName] = useState('')
    const { id } = useParams()
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then(result => {
                setName(result.data.name)
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()
    function HandleSubmit(e) {
        e.preventDefault()
        axios.patch(`http://localhost:5000/api/authors/${id}/edit`, { name })
            .then(res => { console.log('updated'); navigate('/authors') })
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

export default Update