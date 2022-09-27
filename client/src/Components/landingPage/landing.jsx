import CategoryFilter from './Filters/CategoryFilter';
import PriceFilter from './Filters/PriceFilter';
import Card from './card/Card';
import '../../style/FilterCategory.css';

function LandingPage() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="filterSection">
        <CategoryFilter />
        <PriceFilter />
      </div>
      <div style={{ marginTop: '4rem' }}>
        <Card name="home" />
      </div>
    </div>
  );
}

export default LandingPage;
