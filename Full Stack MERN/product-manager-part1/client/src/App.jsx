import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
function App() {
  return (
    <Routes>
      <Route path='/products' element={<Product/>} />
    </Routes>
  )
}

export default App