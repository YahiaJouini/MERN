import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState<any>([])
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
      .then(res => setData(res.data.results)).catch((err) => {
        console.log(err)
      })
  })

  return (
    <div className="container">
      <h1 className="title">Fetch Pokemon</h1>
      <ul>
        {data && data.map((da: any, idx: number) => <li key={idx}>{da.name}</li>)}
      </ul>
    </div>
  )
}
export default App
