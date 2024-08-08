

import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Securely store the token using Local Storage (consider HttpOnly cookies for increased security)
const localStorageKey = 'accessToken';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/auth/log', formData);
      setIsAuthenticated(response.data.authenticated);

      if (response.data.token) {
        localStorage.setItem(localStorageKey, response.data.token);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred during login.');
    } finally {
      setIsLoading(false);
    }
  };

  // Check for existing token in Local Storage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem(localStorageKey);
    if (storedToken) {
      setIsAuthenticated(true); // Potentially fetch user data here for seamless experience
    }
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {isAuthenticated && (
        <p>Login successful!</p>
      )}
    </div>  // No need to display token for security reasons
  );
};

export default Login;