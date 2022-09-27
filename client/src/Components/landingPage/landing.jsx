import CategoryFilter from './Filters/CategoryFilter';
import PriceFilter from './Filters/PriceFilter';
import Card from './card/Card';
import '../../style/FilterCategory.css';

function LandingPage() {
  return (
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
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
        <Card name="home" />
      </div>
    </div>
  );
}

export default LandingPage;
