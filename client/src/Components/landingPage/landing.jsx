import { useEffect, useState } from 'react';
import CategoryFilter from './Filters/CategoryFilter';
import PriceFilter from './Filters/PriceFilter';
import Nav from '../nav/Navbar';

import Card from './card/Card';
import '../../style/FilterCategory.css';

function LandingPage() {
  const [isAuth, setISAuth] = useState('notAuth');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setISAuth(data.message);
      });
  });

  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div className="filterSection">
          <CategoryFilter />
          <PriceFilter />
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
          <Card name={isAuth} />

        </div>
      </div>
    </div>

  );
}

export default LandingPage;
