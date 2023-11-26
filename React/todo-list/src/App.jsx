import { useState, useRef, useEffect } from "react"
import Task from "./components/Task";

function App() {
  const initialData = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store') || "") : null
  const [task, setTask] = useState(initialData || [])
  const [input, setInput] = useState('');
  const id = useRef(0)

  function HandleClick() {
    if (input != '') {
      setTask([...task, { text: input, id: id.current, complete: false }])
      id.current += 1
      setInput("")
    }
  }

  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(task))
  })

  function HandlComplete(id) {
    const newTask = task.map(old => {
      if (old.id === id) {
        old.complete = !old.complete
      }
      return old
    })
    setTask(newTask)

  }
  function HandleDelete(id) {
    setTask(prev => prev.filter(pr => pr.id !== id))
  }
  return (
    <div className="container">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="btn" onClick={HandleClick}>Add</button>
      {task.map((element, idx) => (<Task key={idx}
        input={element.text} id={element.id}
        complete={element.complete}
        HandlComplete={HandlComplete}
        HandleDelete={HandleDelete} />))}
    </div>
  )
}
export default App
