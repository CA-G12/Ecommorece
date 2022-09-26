/* eslint-disable react/prop-types */
import '../../../style/Card.css';

function Counter() {
  return (
    <div className="cart-counter">
      <button type="submit">-</button>
      <p>1</p>
      <button type="submit">+</button>

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
          <button type="submit">Add</button>
        </div>
      );
    }

    if (name === 'cart') {
      return (
        <div className="card">
          <button type="submit">X</button>

          <Container />
          <Counter />

        </div>
      );
    }
    return (
      <div className="card">
        <Container />
      </div>
    );
  }
}

export default Card;
