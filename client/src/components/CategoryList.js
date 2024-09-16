// src/components/CategoryList.js
import React from 'react';
import '../index.css';

const CategoryList = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="sidebar">
      <ul>
        {categories.map(category => (
          <li 
            key={category.id} 
            onClick={() => onSelectCategory(category.id)}
            className={selectedCategory === category.id ? 'active' : ''}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
