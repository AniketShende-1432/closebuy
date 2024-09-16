import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../helper';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/')
  //   }
  // }, [isLoggedIn])

  const handleSendOtp = async () => {
    try {
      const fullMobileNumber = `+91${mobileNumber}`;
      console.log(fullMobileNumber)
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobilenumber: fullMobileNumber }),
      });

      const jsonData = await response.json()
      if (jsonData.success) {
        setIsOtpSent(true)
        toast.info(`${jsonData.message}`, {
          position: 'top-center',
          autoClose: 4000,
        });
      } else {
        toast.error(`${jsonData.message}`, {
          position: 'top-center',
          autoClose: 4000,
        });
      }

    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error(`Error sending OTP: ${error.message}`, {
        position: 'top-center',
        autoClose: 4000,
      });
    }
  };

  const handleVerifyOtp = async () => {
    const fullMobileNumber = `+91${mobileNumber}`;


    try {
      const response = await fetch(`${BASE_URL}/api/auth/verifyotp`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobilenumber: fullMobileNumber, otp }),
        credentials: 'include'
      });

      const jsonData = await response.json();
      console.log(jsonData)

      if (jsonData.success) {
        setIsLoggedIn(true)
        navigate('/')
        setMobileNumber(null)
        toast.done(`Logged in successfully`, {
          position: 'top-center',
          autoClose: 4000,
        });
      }
      else {
        toast.error(`${jsonData.message}`, {
          position: 'top-center',
          autoClose: 4000,
        });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error(`Error sending OTP: ${error.message}`, {
        position: 'top-center',
        autoClose: 4000,
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className='login-container-inside'>
        {!isOtpSent && (<>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="login-input"
          />
          <button onClick={handleSendOtp} className="sendotp-button">
            Send OTP
          </button>
        </>)}
        {isOtpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="login-input"
            />
            <button onClick={handleVerifyOtp} className="sendotp-button">
              Verify OTP
            </button>
            <button onClick={handleSendOtp} className="sendotp-button">
              Re-Send OTP
            </button>
          </>
        )}
      </div>


      <ToastContainer />
    </div>
  );
};

export default Login;
