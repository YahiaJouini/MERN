import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Detail from './pages/Detail'
import UpdateProduct from './pages/UpdateProduct'
function App() {
  return (
    <Routes>
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<Detail />} />
      <Route path='/edit/:id' element={<UpdateProduct />} />
    </Routes>
  )
}

export default App