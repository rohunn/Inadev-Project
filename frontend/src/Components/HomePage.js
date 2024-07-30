import React, { useEffect, useState } from 'react';
import { getItems } from '../Services/API';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching items: {error.message}</div>;
  }

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description} - {item.quantity} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

