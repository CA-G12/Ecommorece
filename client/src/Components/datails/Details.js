import '../../style/details.css'
import Button from '../button/Button'

function Details() {
  return (
    <div className="details-container">
      <img
        className="product-img"
        alt="product-img"
        src="http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550"
      />

      <div className="details">
        <h2 className="product-name">T-shirt</h2>
        <h3 className="product-price">$49.50</h3>
        <p className="product-category">white shirt</p>
        <p className="product-description">white shirt desc</p>

        <div className="div-btn">
          <Button text="Add to cart" widthh="13rem" />
        </div>
      </div>
    </div>
  )
}
export default Details
