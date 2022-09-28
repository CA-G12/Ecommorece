/* eslint-disable react/prop-types */
// import { Link, } from 'react-router-dom';
import '../../../style/Card.css'
import Button from '../../button/Button'

function Counter() {
  return (
    <div className="cart-counter">
      <Button text="-" widthh="1.3rem" />
      <p>1</p>
      <Button text="+" widthh="1.3rem" />
    </div>
  )
}

function Container({ card }) {
  // console.log('helo cont card', card);
  return (
    <div className="content">
      <img className="product-img" alt="product-img" src={card.img_url} />
      <p className="product-name">{card.name}</p>
      <h3 className="product-price">{card.price}</h3>
      <p className="product-category">{card.category}</p>
    </div>
  )
}

function addToCart(productId, userId){

  return fetch('/addCartItem', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({productId, userId}),
  })

}


function reomoveFromCart(cartid){

  return fetch(`/deleteCartItem/${cartid}`).catch(err => console.log(err))

}



function Card({ name, card }) {
 


  if (name === true) {
    // console.log('card id', card.id)
    const userId = 1;
    return (
      <div className="card">
        <Container card={card} />

          <Button  onClick={() =>{addToCart(card.id,userId);}} disabled className="add-btn" text="Add" widthh="6rem" id={card.id} />     

      </div>
    )
  }

  if (name === 'cart') {
    //  console.log('hello from cart', card.cartid)
    return (
      <div className="card">
        <div className="remove">
          <button onClick={() => reomoveFromCart(card.cartid)} type="submit">x</button>
        </div>
        <Container card={card} />
        <Counter />
      </div>
    )
  }
  if (!name) {
    // console.log('')
    return (
      <div className="card">
        <Container card={card} />
      </div>
    )
  }

}

export default Card
