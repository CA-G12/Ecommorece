import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/signup/Signup'
import LandingPage from './Components/landingPage/landing'
import Login from './Components/login/Login'
import DetailPage from './Components/datails/DetailPage'
import Cart from './Components/cart/Cart'

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage auth={auth} />} />
          <Route path="/signup" element={<Signup setAuth={setAuth} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DetailPage/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
