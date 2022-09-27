import '../../../style/PriceFilter.css';

function PriceFilter() {
  return (
    <div className="price-filter-container">
      <h3 className="title">Price</h3>
      <div className="max-min">
        <label className="max" htmlFor="max">Max</label>
        <input type="range" name="max" id="max" className="max-range" />
        <label className="mix" htmlFor="min">Min</label>
        <input type="range" name="min" id="min" className="min-range" />
      </div>
    </div>
  );
}

export default PriceFilter;
