import React from "react";

function CategoryFilter({ setSelectedCategory, CATEGORIES }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {CATEGORIES.map((category) => {
        return (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
