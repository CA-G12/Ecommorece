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
          <Route
            path="/"
            element={<LandingPage auth={auth} setAuth={setAuth} />}
          />
          <Route path="/signup" element={<Signup setAuth={setAuth} />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/detailPage/:id"
            element={<DetailPage auth={auth} setAuth={setAuth} />}
          />
          <Route
            path="/cart"
            element={<Cart auth={auth} setAuth={setAuth} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
