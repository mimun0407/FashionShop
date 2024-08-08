import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Define the localStorage key for storing the token (consider HttpOnly cookies for increased security)
const localStorageKey = 'accessToken';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem(localStorageKey);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      if (!accessToken) {
        setError('You are not logged in.');
        return; // Handle the case where no token is found
      }

      try {
        const response = await axios.get('http://localhost:8080/Customer', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        setError('An error occurred while fetching customers.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accessToken]); // Re-fetch data if token changes

  if (isLoading) {
    return <p>Loading customers...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} (ID: {customer.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;