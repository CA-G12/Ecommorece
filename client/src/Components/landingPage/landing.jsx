import { useEffect, useState } from 'react';
import CategoryFilter from './Filters/CategoryFilter';
import PriceFilter from './Filters/PriceFilter';
import Nav from '../nav/Navbar';

import Card from './card/Card';
import '../../style/FilterCategory.css';

function LandingPage() {
  const [CategoryState, setCategoryState] = useState('all');
  const [PriceState, setPriceState] = useState({ max: 10, min: 0 });
  const [isAuth, setISAuth] = useState('notAuth');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setISAuth(data.message);
      });
  });
  // here i will make anther request to fetch data from the server and passed it into card object
  const cards = [
    {
      name: 'ss',
      description: 'desc',
      price: 30,
      category: 'Dresses',
      img_url: 'http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550',
    },
    {
      name: 'ss',
      description: 'desc',
      price: 50,
      category: 'Tops',
      img_url: 'http://cdn.shopify.com/s/files/1/0601/6024/5917/products/the-heavyweight-t-shirt_white_1_53f1397f-5b41-429f-8569-cbc1c4c174aa.jpg?v=1661175550',
    },
  ];
  return (

    <div>
      <Nav />
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div className="filterSection">
          <CategoryFilter CategoryState={CategoryState} setCategoryState={setCategoryState} />
          <PriceFilter PriceState={PriceState} setPriceState={setPriceState} />
        </div>
        <div style={{
          width: '80%',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >

          {
            cards.filter((card) => (card.price >= PriceState.min && card.price <= PriceState.max) && (CategoryState === 'all' || card.category === CategoryState)).map((card) => <Card name={isAuth} card={card} key={Math.random() + Date.now()} />)
          }

        </div>
      </div>
    </div>

  );
}

export default LandingPage;
