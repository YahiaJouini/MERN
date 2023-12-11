import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Detail from './pages/Detail'
function App() {
  return (
    <Routes>
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<Detail />} />
    </Routes>
  )
}

export default App