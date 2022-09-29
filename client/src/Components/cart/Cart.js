import { useEffect, useState } from 'react'
import Nav from '../nav/Navbar'
import Card from '../card/Card'
import Button from '../button/Button'
import '../../style/cart.css'

function Cart({ auth, setAuth }) {
  const [cartData, setCardData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  function reomoveAllItems() {
    return fetch(`/deleteAllItems`)
      .then(() => {
        setTotalPrice(0)
        setCardData([])
      })
      .catch((err) => console.log(err))
  }
  function getTotalPrice() {
    return fetch(`/getTotalPrice`)
      .then((data) => data.json())
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetch('/getCartItems')
      .then((response) => response.json())
      .then((data) => setCardData(data))
  }, [])

  useEffect(() => {
    getTotalPrice().then((data) => setTotalPrice(data[0].sum))
  }, [])
  if (cartData) {
    return (
      <>
        <Nav auth={auth} setAuth={setAuth} />
        <div className="cartContainer">
          {cartData.map((cartItem) => (
            <Card
              name={auth ? 'cart' : ''}
              card={cartItem}
              key={cartItem.cartId}
            />
          ))}
          <h1>Total Price : {totalPrice}</h1>
          <Button
            onClick={() => {
              reomoveAllItems()
            }}
            text="Buy"
            widthh="100px"
          />
        </div>
      </>
    )
  }
}

export default Cart
