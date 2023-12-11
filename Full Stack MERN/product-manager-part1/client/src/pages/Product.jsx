import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Product() {


    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDesc] = useState('')
    const [display, setDisplay] = useState([])


    const GetData = () => {
        axios.get('http://localhost:5000/api/products').then(res => setDisplay(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        GetData()
    }, [display])


    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/create', { title, price, description })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        GetData()
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
            <hr />
            <div className='display'>
                <h1>All products : </h1>
                <div className='products'>
                    {display ? (
                        display.map((product, idx) => (
                            <Link to={`/products/${product._id}`} key={idx}>{product.title}</Link>
                        ))
                    ) :
                        <h1>
                            No products is added
                        </h1>
                    }
                </div>

            </div>
        </div>
    )
}

export default Product