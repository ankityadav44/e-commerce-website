function FilterContainer({ heading }) {
  return (
    <div className="filter-category-section filter-section">
      <span className="filter-category-header filter-header">{heading}</span>
      <div className="filter-category-container">
        <ul className="category-list">
          <li>
            {" "}
            <input type="radio" />
            <span>Bedsheets</span> <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Blankets Quilts and Dohars</span>
            <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Mattress Protector</span>
            <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Pillow Covers</span>
            <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Pillows</span>
            <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Bedding Set</span>
            <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Duvet Cover</span>
            <span className="filter-num">(36120)</span>
          </li>
          <li>
            {" "}
            <input type="radio" />
            <span>Bed Covers</span>
            <span className="filter-num">(36120)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default FilterContainer;
