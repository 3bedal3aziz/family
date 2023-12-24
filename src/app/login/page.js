
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';



const YourComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookie] = useCookies(['user']); // Cookie for saving user data


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('your_api_endpoint', {
        email: email,
        password: password,
      });

      const { username, token } = response.data;

      // Save username and token in a cookie
      setCookie('user', { username, token }, { path: '/' });

      // Show success toast
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
       
    } catch (error) {
      // Show error toast
      toast.error('Login failed. Please check your credentials.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      window.location.href = '/dashboard';

    }
  };

  return (
    <div className="parent clearfix">
    
      <div className="bg-illustration">
        {/* <img src="../../../public//assets/logo.png" alt="logo" /> */}
      </div>

      <div className="login">
        <div className="container">
          <Image
            style={{ display: 'flex ', margin: '11px auto' }}
            src={logo}
            width={`100px`}
            height={`100px`}
            alt="logo"
          />
          <h1 dir="rtl">تسجيل الدخول</h1>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="remember-form">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>

              <div className="forget-pass">
                <a href="#">نسيت كلمة المرور؟</a>
              </div>

              <button type="submit">تسجيل الدخول</button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default YourComponent;
