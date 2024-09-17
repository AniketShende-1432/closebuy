import React, { useState } from 'react';
import './Foot.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Foot = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to handle subscription
    console.log('Subscribed with email:', email);
    setEmail(''); // Clear email input after submit
  };

  return (
    <footer className="footer">
      <div className="foot">
        <div className="box1">
          <div className="bo">
            <h4>Quick Links</h4>
            <ul>
              <Link className="footlink" to={''}>Home</Link>
              <Link className="footlink" to={''}>About Us</Link>
              <Link className="footlink" to={''}>Contact Us</Link>
            </ul>
          </div>
          <div className="b2">
            <h4>Follow Us</h4>
            <ul>
              <Link className="footlink" to={''}>FaceBook</Link>
              <Link className="footlink" to={''}>Instagram</Link>
              <Link className="footlink" to={''}>Twitter</Link>
            </ul>
          </div>
          <div className='parag'>
                <div>Email: CloseBuy@gmail.com</div>
                <div>Tel no: +91 9876543210</div>
                <div>Contact Us</div>
                <div>Legal Notice- Privacy Policy</div>
          </div>
        </div>
        <div className="subscribeSection">
          <h2>!! Subscribe to our Newsletter</h2>
          <form className="subscribeForm" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
            <button
              type="submit"
              className={isHovered ? 'button buttonHover' : 'button'}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 CloseBuy ❤️ All Rights Reserved.
      </div>
    </footer>
  );
};

export default Foot;
