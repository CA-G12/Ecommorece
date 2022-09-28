import {useEffect, useState } from 'react'
import Nav from '../nav/Navbar'
import Card from '../landingPage/card/Card'
import '../../style/cart.css'



function Cart({auth, setAuth}) {
  const [cartData, setCardData] = useState([]);

  useEffect(() => {
    fetch('/getCartItems').then(response => response.json()).then(data => setCardData(data));
  })

  // console.log(cartData);

  if(cartData){
    //  console.log(cartData, 'ddd', auth);
    return (
    <>
        <Nav  auth={auth} setAuth={setAuth} />
        <div className='cartContainer'>
         { cartData.map((cartItem) => <Card name={auth ? 'cart' : ''} card={cartItem} key={cartItem.cartId} /> )}
          
      </div>

      </>
    )
  }

}

export default Cart
