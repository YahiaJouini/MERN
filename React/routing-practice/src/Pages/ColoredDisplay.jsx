import {useParams} from "react-router-dom"
export default function ColoredDisplay() {
    const {text} = useParams()
    const message= isNaN(text) ? `the word is : ${text}`: `the number is : ${text}`
  return (
    <h1 style={{padding:"20px", color:"blue" , background:"#fecccd"}}>{message}</h1>
  )
}
