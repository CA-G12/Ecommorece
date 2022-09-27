import '../../../style/FilterCategory.css';

function CategoryFilter({ CategoryState, setCategoryState }) {
  const categories = ['all', 'Dresses', 'Tops', 'Shoes', 'Jackets'];

  return (
    <div className="categories-container">
      <h3 className="title">Categories</h3>

      {
      categories.map((category) => (
        <div key={category} className="radio">
          <input
            type="radio"
            value={category}
            id={category}
            name="categories"
            checked={category === CategoryState}
            onChange={(e) => setCategoryState(e.target.value)}
          />
          <label htmlFor={category} className="label">{category}</label>
        </div>
      ))
}
    </div>
  );
}

export default CategoryFilter;
