import {useParams} from 'react-router-dom'
export default function Display() {
    const {text} = useParams()
    const message= isNaN(text) ? <h1>the word is : {text}</h1>: <h1>the number is : {text}</h1>
  return (
    <div>{message}</div>
  )
}
