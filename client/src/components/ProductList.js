import React from 'react';
import ProductCard from './ProductCard';
import '../index.css';

const ProductList = ({ products, onAddToCart, showToast }) => {
  let lastCategoryId = null;

  return (
    <div className="main-content">
      <div className="product-list">
        {products.map(product => {
          const showCategoryTitle = product.categoryId !== lastCategoryId;
          lastCategoryId = product.categoryId;
          return (
            <div key={product.id} className="category-section">
              {showCategoryTitle && (
                <h2 className="category-title">
                  {product.categoryName}
                </h2>            
              )}
              <ProductCard product={product} onAddToCart={onAddToCart} showToast={showToast} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
