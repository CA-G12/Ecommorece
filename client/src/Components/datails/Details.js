import '../../style/details.css'
// import Button from '../button/Button'

function Details({ productDetails }) {

  return (
    <div className="details-container">
      <img
        className="product-img"
        alt="product-img"
        src="http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550"
      />
      <div className="details">
        <h2 className="product-name">{productDetails.name}</h2>
        <h3 className="product-price">${productDetails.price}</h3>
        <p className="product-category">{productDetails.category}</p>
        <p className="product-description">{productDetails.description}</p>

        {/* {(auth) ?
          <div className="div-btn">
            <Button text="Add to cart" widthh="13rem" />
          </div>
          : null} */}
      </div>
    </div>
  )
}
export default Details
