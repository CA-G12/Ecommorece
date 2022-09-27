import '../../../style/PriceFilter.css';

function PriceFilter({ PriceState, setPriceState }) {
  return (
    <div className="price-filter-container">
      <h3 className="title">Price</h3>
      <div className="max-min">
        <label className="max" htmlFor="max">Max</label>
        <input
          type="range"
          name="max"
          min="0"
          max="50"
          id="max"
          value={PriceState.max}
          onChange={(e) => {
            setPriceState({ ...PriceState, max: e.target.value });
          }}
          className="max-range"
        />
        <label className="mix" htmlFor="min">Min</label>
        <input
          type="range"
          name="min"
          min="0"
          max="50"
          id="min"
          value={PriceState.min}
          onChange={(e) => {
            setPriceState({ ...PriceState, min: e.target.value });
          }}
          className="min-range"
        />
      </div>
    </div>
  );
}

export default PriceFilter;
