import React, { useState, useEffect, useContext } from 'react';
import '../index.css';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Login from './Login.js'; // Import the Login component
import { mainCategories, categories, products } from '../data.js'; // Adjust path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/product-images/logo.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../helper.js';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext.js';
import { IoSearchOutline } from "react-icons/io5";
import Foot from '../components/footer/Foot.js';

const Home = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    const [selectedMainCategory, setSelectedMainCategory] = useState(mainCategories[0].id);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');
    const [activeLink, setActiveLink] = useState('');

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate('/login')
    //     }
    // }, [isLoggedIn])


    useEffect(() => {
        if (searchTerm.trim() !== '') {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
            if (results.length === 0) {
                setSearchMessage('No products found');
                setTimeout(() => {
                    setSearchMessage('');
                }, 3000);
            } else {
                setSearchMessage('');
            }
        } else {
            setSearchResults([]);
            setSearchMessage('');
        }
    }, [searchTerm]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/cart/getitems`, {
                    method: 'get',
                    headers: {
                        'Content-type': 'application/json'
                    },
                     credentials: 'include'
                }); if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCart(data.cart);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
        // eslint-disable-next-line
    }, []);

    const handleMainCategoryClick = (id) => {
        setSelectedMainCategory(id);
        const firstSubCategory = categories.find(cat => cat.mainCategoryId === id);
        setSelectedCategory(firstSubCategory ? firstSubCategory.id : null);
        setShowCart(false);
    };

    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        console.log(product)
        setCart(prevCart => {
            if (!Array.isArray(prevCart)) {
                console.error('Cart is not an array:', prevCart);
                console.log(prevCart)
                return prevCart;
            }

            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    const showToast = (message, type = 'success') => {
        if (type === 'success') {
            toast.success(message, {
                position: "top-center",
                autoClose: 4000,
            });
        } else {
            toast.error(message, {
                position: "bottom-center",
                autoClose: 3000,
            });
        }
    };

    const handleClick = (link) => {
        setActiveLink(link); // Set the clicked link as active
        console.log(activeLink);
      };
    const handleLogOut = async() => {
        try {
            const response = fetch(`${BASE_URL}/api/auth/logout`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                 credentials: 'include'
            })
            console.log(response)
            const jsonData=await response.json()
            if(jsonData.success)
                {
                    navigate('/login')
                    setIsLoggedIn(false)
                }
        } catch (error) {
            console.error('Error sending OTP:', error);
            toast.error(`Error logging out: ${error.message}`, {
                position: 'top-center',
                autoClose: 4000,
            });
        }
    };


    const filteredCategories = categories.filter(cat => cat.mainCategoryId === selectedMainCategory);
    const filteredProducts = selectedCategory
        ? products.filter(prod => prod.categoryId === selectedCategory)
        : products.filter(prod => filteredCategories.some(cat => cat.id === prod.categoryId));

    return (
        <div className="container">

            <>
                <div className="header">
                    <div className="logo-title">
                        <img src={logo} alt="Logo" className="logo" />
                        <h1 className="title">CloseBuy</h1>
                        <div className="search-bar">
                            <IoSearchOutline className='search-icon'/>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                    </div>
                    <div className="header-buttons">
                        <div className='Lbox'><Link className="link" to={''} onClick={() => handleClick('home')}>Home</Link><span className={activeLink === 'home' ? 'active-line' : ''}></span></div>
                        <div className='Lbox'><Link className="link" to={''} onClick={() => handleClick('about')}>About Us</Link><span className={activeLink === 'about' ? 'active-line' : ''}></span></div>
                        <div className='Lbox'><Link className="link" to={''} onClick={() => handleClick('contact')}>Contact Us</Link><span className={activeLink === 'contact' ? 'active-line' : ''}></span></div>
                        <button className="cart-button" onClick={() => setShowCart(true)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> View Cart ({cart.length})
                        </button>
                        {!isLoggedIn && <Link className="login-button" to={'/login'}>Login</Link>}
                        {isLoggedIn && <Link className="login-button" onClick={handleLogOut} >Log out</Link>}
                    </div>
                </div>
                <Navbar
                    mainCategories={mainCategories}
                    onMainCategoryClick={handleMainCategoryClick}
                    selectedMainCategory={selectedMainCategory}
                />
                <div className="content">
                    {showCart ? (
                        <Cart cart={cart} />
                        // <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
                    ) : (
                        <>
                            <Sidebar
                                categories={filteredCategories}
                                onCategoryClick={handleCategoryClick}
                                selectedCategory={selectedCategory}
                            />
                            <ProductList products={searchResults.length > 0 ? searchResults : filteredProducts} onAddToCart={handleAddToCart} showToast={showToast} />
                        </>
                    )}
                </div>
                {searchMessage && <div className="search-message">{searchMessage}</div>}
                <ToastContainer />
                <Foot />
            </>

        </div>
    );
};

export default Home
