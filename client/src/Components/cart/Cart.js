import Nav from '../nav/Navbar'
import Card from '../landingPage/card/Card'

function Cart({auth, setAuth}) {
  
  return (
    <>
      <Nav  auth={auth} setAuth={setAuth} />
      <Card  name={auth ? "cart" : false} card="" />
    </>
  )
}

export default Cart
