import React, { useState } from 'react';
import './AddItem.css';
import { useNavigate } from'react-router-dom';
import { addItem } from '../Services/API';

function AddItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Item:', { name: name, price: price, description: description, quantity: quantity });
    const newItem = { name: name, price: price, description: description, quantity: quantity };
    addItem(newItem)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error adding the item!', error);
            });
 
    // Reset form fields
  };

  return (
    <div className="AddItem">
      <header>
        <h1>Add New Inventory Item</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Item Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Item price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Item description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>

        
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
          </div>
          <button type="submit">Add Item</button>
        </form>
      </main>
    </div>
  );
}

export default AddItem;
