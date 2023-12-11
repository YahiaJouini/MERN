import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

function UpdateProduct() {
    const { id } = useParams()

    const [data, setDate] = useState({})
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDesc] = useState('')

    const navigate=useNavigate()



    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(product => {
                setTitle(product.data.title)
                setPrice(product.data.price)
                setDesc(product.data.description)
            })
            .catch(err => console.log(err))
    }, [])


    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:5000/api/edit/${id}`, { title, price, description })
            .then(res => {
                console.log(res)
                navigate('/products')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='products-container'>
            <h1>Product Manager</h1>
            <form onSubmit={(e) => HandleSubmit(e)}>
                <input
                    type="text"
                    value={title}
                    placeholder='Title'
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="Number"
                    value={price}
                    placeholder='Price'
                    onChange={e => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    placeholder='Description'
                    onChange={e => setDesc(e.target.value)}
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateProduct