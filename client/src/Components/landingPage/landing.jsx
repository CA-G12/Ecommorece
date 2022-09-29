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
        setCards(data)
      })
  }, [])

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
