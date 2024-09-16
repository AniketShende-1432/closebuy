import React, { useState, useEffect, useContext } from 'react';
import './index.css';
import './App.css';

import Login from './Pages/Login'; // Import the Login component
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import Home from './Pages/Home';
import { BASE_URL } from './helper';
import UserContext from './context/UserContext';
const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Route>
    )
  )

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/auth/checksession`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        console.log(data)
        if (data.authentic === false) {
        }
        else {
          setIsLoggedIn(true)
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    };

    checkSession();
  }, [router]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
