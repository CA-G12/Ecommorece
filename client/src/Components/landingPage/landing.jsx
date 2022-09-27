import { useEffect, useState } from 'react';
import CategoryFilter from './Filters/CategoryFilter';
import PriceFilter from './Filters/PriceFilter';
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
    <div style={{ display: 'flex' }}>
      <div className="filterSection">
        <CategoryFilter />
        <PriceFilter />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <Card name={isAuth} />
      </div>
    </div>
  );
}

export default LandingPage;
