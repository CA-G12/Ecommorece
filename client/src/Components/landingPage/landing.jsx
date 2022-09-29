import { useEffect, useState } from 'react'
import CategoryFilter from './Filters/CategoryFilter'
import PriceFilter from './Filters/PriceFilter'
import Nav from '../nav/Navbar'

import Card from './card/Card'
import '../../style/FilterCategory.css'

function LandingPage({ auth, setAuth }) {
  const [CategoryState, setCategoryState] = useState('all')
  const [PriceState, setPriceState] = useState({ max: 100, min: 0 })
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch('/checkUserAuth')
      .then((res) => res.json())
      .then((data) => {
        setAuth(data.massage)
      })
  }, [])
  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCards(data)
      })
  }, [])
  // here i will make anther request to fetch data from the server and passed it into card object
  // const cards = [
  //   {
  //     name: 'ss',
  //     description: 'desc',
  //     price: 30,
  //     category: 'Dresses',
  //     img_url: 'http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550',
  //   },
  //   {
  //     name: 'ss',
  //     description: 'desc',
  //     price: 50,
  //     category: 'Tops',
  //     img_url: 'http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550',
  //   },
  // ];
  return (
    <div>
      <Nav auth={auth} setAuth={setAuth} />
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div className="filterSection">
          <CategoryFilter
            CategoryState={CategoryState}
            setCategoryState={setCategoryState}
          />
          <PriceFilter PriceState={PriceState} setPriceState={setPriceState} />
        </div>
        <div
          style={{
            width: '80%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {cards
            .filter(
              (card) =>
                card.price >= PriceState.min &&
                card.price <= PriceState.max &&
                (CategoryState === 'all' || card.category === CategoryState)
            )
            .map((card) => (
              <Card name={auth} card={card} key={card.id} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
