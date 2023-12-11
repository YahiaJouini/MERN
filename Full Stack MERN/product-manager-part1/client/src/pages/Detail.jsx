import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
export default function ProductDisplay() {
    const { id } = useParams()
    const [display, setDisplay] = useState(null)
    const GetData = () => {
        axios.get(`http://localhost:5000/api/products/${id}`).then(res => setDisplay(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        GetData()
    }, [display])
    return (
        <div className="one-product">
            {display ? (
                <>
                    <h1>{display.title}</h1>
                    <p>Price : ${display.price}</p>
                    <p>Description : {display.description}</p>
                </>
            ) :
                <h1>product does not exist</h1>
            }
        </div>
    )
}
