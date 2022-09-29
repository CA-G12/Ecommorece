import { useEffect, useState } from 'react'
import Nav from '../nav/Navbar'
import Card from '../card/Card'
import '../../style/cart.css'



function Cart({ auth, setAuth }) {
  const [cartData, setCardData] = useState([]);

  useEffect(() => {
    fetch('/getCartItems').then(response => response.json()).then(data => setCardData(data));
  }, [])



  if (cartData) {

    return (
      <>
        <Nav auth={auth} setAuth={setAuth} />
        <div className='cartContainer'>
          {cartData.map((cartItem) => <Card name={auth ? 'cart' : ''} card={cartItem} key={cartItem.cartId} />)}

        </div>

      </>
    )
  }

}

export default Cart
