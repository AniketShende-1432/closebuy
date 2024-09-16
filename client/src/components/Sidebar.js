import React from 'react';
import '../index.css';

const Sidebar = ({ categories, onCategoryClick, selectedCategory }) => {
  // Remove duplicates from the categories array
  const uniqueCategories = categories.filter((category, index) => 
    categories.findIndex(c => c.name === category.name) === index
  );

  return (
    <div className="sidebar">
      <ul>
        {uniqueCategories.map(category => (
          <li
            key={category.id}
            className={category.id === selectedCategory ? 'active' : ''}
            onClick={() => onCategoryClick(category.id)}
          >
            <img className="sideimg" src={category.image}  />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
