import { Outlet } from 'react-router-dom';

import Nav from '../nav/Navbar';


function LandingPage({auth,setAuth,name,setName}) {
 
  
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
