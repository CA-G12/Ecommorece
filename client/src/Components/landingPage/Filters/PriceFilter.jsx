import '../../../style/PriceFilter.css';

function PriceFilter() {
  return (
    <div className="price-filter-container">
      <h3>Price</h3>
      <label htmlFor="max">Max</label>
      <input type="range" name="max" id="max" className="max-range" />

      <label htmlFor="min">Min</label>
      <input type="range" name="min" id="min" className="min-range" />
    </div>
  );
}

export default PriceFilter;
