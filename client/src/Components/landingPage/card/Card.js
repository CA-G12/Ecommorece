/* eslint-disable react/prop-types */
import '../../../style/Card.css';
import Button from '../../button/Button';

function Counter() {
  return (
    <div className="cart-counter">
      <Button text="-" widthh="1.3rem" />
      <p>1</p>
      <Button text="+" widthh="1.3rem" />
    </div>
  );
}

function Container() {
  return (
    <>
      <img className="product-img" alt="product-img" src="http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550" />
      <p className="product-name">T-shirt</p>
      <h3 className="product-price">$49.50</h3>
      <p className="product-category">white shirt</p>

    </>
  );
}

function Card({ name }) {
  if (name) {
    if (name === 'auth') {
      return (
        <div className="card">

          <Container />
          <Button className="add-btn" text="Add" widthh="3rem" />
        </div>
      );
    }

    if (name === 'cart') {
      return (
        <div className="card">

          <div className="remove">
            <button type="submit">x</button>
          </div>
          <Container />
          <Counter />

        </div>
      );
    }
    if (name === 'notAuth') {
      return (
        <div className="card">
          <Container />
        </div>
      );
    }
  }
}

export default Card;
