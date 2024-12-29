import React from 'react';
import googleLogo from '../../assets/google.png'
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Chemazon</h1>
        <p className="login-subtitle">Sign in to continue to Chemazon</p>
        <form className="login-form">
          <label htmlFor="email">Email (phone for mobile accounts)</label>
          <input type="email" id="email" placeholder="Enter your email" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          
          <div className="checkbox-container">
            <label>
              <input type="checkbox" />
              Show password
            </label>
            <label>
              <input type="checkbox" />
              Keep me signed in
            </label>
          </div>
          
          <button type="submit" className="login-button">Sign in</button>
        </form>
        <p className="forgot-password">Forgot password?</p>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-login-button">
          <img src={googleLogo} alt="Google icon" />
          Login with Google
        </button>

        <div className="signup-section">
          <p>New to Chemazon?</p>
          <button className="signup-button">Create a new Chemazon account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
