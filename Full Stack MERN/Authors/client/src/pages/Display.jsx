import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
function Display() {

    const [result, setResult] = useState(null)

    const GetData = () => {
        axios.get('http://localhost:5000/api/authors').then(res => setResult(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        GetData()
    }, [])


    const deleteOne = (id) => {
        axios.delete(`http://localhost:5000/api/deleteAuth/${id}`)
            .then(() => {
                console.log('author deleted')
                GetData()
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Link to='/authors/new'>Add an author</Link>
            <h3>We have quoted by : </h3>
            {
                result && result.length ?
                    (<table>
                        <tr>
                            <th>Author</th>
                            <th>Action available</th>
                        </tr>
                        {
                            result.map((res, idx) => (
                                <tr key={idx}>
                                    <td>{res.name}</td>
                                    <td>
                                        <Link to={`/${res._id}/edit`} className="btn">Edit</Link>
                                        <button onClick={() => deleteOne(res._id)} className="btn">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>) :
                    <h2>no data to display</h2>
            }
        </div>
    )
}

export default Display