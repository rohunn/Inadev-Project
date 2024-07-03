import React, { useState } from 'react';
import './AddItem.css';

function AddItem() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Item:', { name: itemName, quantity: itemQuantity });
    // Reset form fields
    setItemName('');
    setItemQuantity('');
  };

  return (
    <div className="AddItem">
      <header>
        <h1>Add New Inventory Item</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Item Name:</label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemQuantity">Quantity:</label>
            <input
              type="number"
              id="itemQuantity"
              value={itemQuantity}
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
