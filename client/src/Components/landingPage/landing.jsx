import CategoryFilter from './Filters/CategoryFilter';
import PriceFilter from './Filters/PriceFilter';
import Card from './card/Card';

function LandingPage() {
  return (
    <div>
      <CategoryFilter />
      <PriceFilter />
      <Card name="home" />
    </div>
  );
}

export default LandingPage;
