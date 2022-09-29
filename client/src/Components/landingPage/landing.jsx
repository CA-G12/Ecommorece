import { Outlet } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Nav from '../nav/Navbar';

function LandingPage({ auth, setAuth, name, setName }) {
  
  useEffect(() => {
    fetch('/checkUserAuth')
      .then((res) => res.json())
      .then((data) => {
        setAuth(data.massage)
      })
  }, [])
  
  return (
    <div>
      <Nav auth={auth} setAuth={setAuth} name={name} setName={setName}/>
      <div style={{ display: 'flex'}}>
        <Outlet />
      </div>
    </div>
  )
}

export default LandingPage
