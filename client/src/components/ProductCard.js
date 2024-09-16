import React, { useState } from 'react';
import '../index.css';
import { BASE_URL } from '../helper';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, showToast }) => {
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line
  const [image, setImage] = useState(product.image);
  const navigate = useNavigate()

  const handleAddToCart = async () => {
    const file = await fetch(image).then((response) => response.blob());
    const formData = new FormData();
    console.log(file)
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('quantity', quantity);
    formData.append('image', file);
    console.log(formData);
    try {
      const response = await fetch(`${BASE_URL}/api/cart/additem`, {
        method: 'POST',

        body: formData,
        credentials: 'include'

      });

      const data = await response.json();
      console.log(
        data
      )
      if (data.authentic === false) {
        // navigate('/login')
      }
      // if (data.success) {
      //   onAddToCart(data);
      //   showToast(`Added ${data.cart.name} to cart!`);
      // }
      // else {
      //   showToast(`${data.message}`);
      // }

      onAddToCart(data.cart);
        showToast(`Added ${data.cart.name} to cart!`);
    } catch (error) {
      console.error('Error:', error);
      showToast('Failed to add product to cart', 'error');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </p>
      <hr />
      <div className='Bottom'>
        <p>{product.price}</p>
        <button onClick={handleAddToCart}>ADD</button>
      </div>
    </div>
  );
};

export default ProductCard;
