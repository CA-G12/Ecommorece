import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './Components/signup/Signup'
import LandingPage from './Components/landingPage/landing'
import Login from './Components/login/Login'
import DetailPage from './Components/datails/DetailPage'
import Cart from './Components/cart/Cart'
import ProductsPage from './Components/products/ProductsPage'

function App() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage auth={auth} setAuth={setAuth} name={name} setName={setName}/>} >
            <Route path='' element={<Navigate to='/1' />} />
            <Route path="/:pageId" element={<ProductsPage name={name} auth={auth}/>} />
            <Route path="/cart" element={<Cart auth={auth} setAuth={setAuth}/>} />
            <Route path="/signup" element={<Signup setAuth={setAuth} />} />
            <Route path="/login" element={<Login setAuth={setAuth}/>} />
          </Route>
          <Route path="/DetailPage/:productId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
