import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Display from "./Pages/Display"
import ColoredDisplay from "./Pages/ColoredDisplay"
function App() {
  return (
    <div style={{textAlign:"center"}}>
    <Routes>
      <Route path='/home'  element={<Home />}/>
      <Route path='/:text'  element={<Display/>}/>
      <Route path="/:text/blue/red" element = {<ColoredDisplay />} />
    </Routes>
    </div>
  )
}

export default App
