import { Route, Routes } from "react-router-dom"
import NewAuthor from "./pages/NewAuthor"
import Display from "./pages/Display"
import Update from "./pages/Update"
function App() {
  return (
    <div className="container">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/authors/new' element={<NewAuthor />} />
        <Route path="/authors" element={<Display />} />
        <Route path='/:id/edit' element={<Update />} />
      </Routes>
    </div>
  )
}

export default App
