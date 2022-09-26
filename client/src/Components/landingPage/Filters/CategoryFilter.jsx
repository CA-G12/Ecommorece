import '../../../style/FilterCategory.css';

function CategoryFilter() {
  const categories = ['Dresses', 'Tops', 'Shoes', 'Jackets'];

  return (
    <div className="categories-container">
      <h3 className="title">Categories</h3>
      <div className="all-radio">
        <div className="radio">
          <input
            type="radio"
            value="all"
            id="all"
            checked
            name="categories"
            onChange={(e) => console.log(e.target)}
          />
          <label key="all" htmlFor="all" className="label">
            All
          </label>
        </div>

        {categories.map((cate) => (
          <div key={cate} className="radio">
            <input
              type="radio"
              value={cate}
              id={cate}
              name="categories"
              onChange={(e) => console.log(e.target)}
            />
            <label htmlFor={cate} className="label">{cate}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
