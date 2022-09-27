import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/signup/Signup'
import LandingPage from './Components/landingPage/landing'
import Login from './Components/login/Login'

function App() {
  useEffect(() => {
    fetch('/api')
      .then((data) => data.json())
      .then((data) => console.log(data))
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
