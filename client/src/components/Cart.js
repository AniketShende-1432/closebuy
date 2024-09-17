import React, { useEffect, useState } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../helper';
import { useNavigate } from 'react-router-dom';

// const Cart = ({ onRemoveFromCart }) => {
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0);
    setTotal(totalPrice);
  };


  const fetchCart = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/cart/getitems`, {
        method: 'get',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      });

      const data = await response.json();

      if (data.authentic === false) {
        // navigate('/login')
      }

      if (data.success) {
        setCart(data.cart);
        calculateTotal(data.cart);
      }

    } catch (error) {
      console.error('Error fetching cart:', error);
      toast.error("Failed to fetch cart. Please try again later.", {
        position: "bottom-center",
        autoClose: 4000,
      });
    }
  };


 
  const handleRemoveFromCart = async (id, name) => {
    console.log(id)
    if (!id) {
      toast.error("Invalid item ID.", {
        position: "bottom-center",
        autoClose: 4000,
      });
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/api/cart/removeitem/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      });
      const data = await response.json()
      console.log(data)
      if (data.success) {
        const updatedCart = cart.filter(item => item._id !== id);
        setCart(updatedCart);
        calculateTotal(updatedCart);
        toast.success(`${name} removed from your cart`, {
          position: "top-center",
          autoClose: 4000,
        });
      } else {
        toast.error("Failed to remove product from cart. Please try again later.", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to remove product from cart. Please try again later.", {
        position: "bottom-center",
        autoClose: 4000,
      });
    }
  };

  return (
    <div className="cart">
      <h2 className='carth2'>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item._id} className='cartl'>
                <div className='cartitem'>
                  <img className="cartimg" src={item.image} alt={item.name} />
                  <div className='cartinfo'>
                    <div style={{fontWeight:'bold'}}>{item.name}</div>
                    <div>Quantity: {item.quantity}</div>
                    <div style={{fontStyle:'italic', color:'grey'}}>Price: {item.price}</div>
                  </div>
                </div>
                <button className='removebtn' onClick={() => handleRemoveFromCart(item._id, item.name)}>Remove <FontAwesomeIcon icon={faTrash} /></button>
              </li>
            ))}
          </ul>
          <div className="total">
            <div>Total: ₹{total.toFixed(2)}</div>
            <button className='removebtn'>Place Order</button>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
