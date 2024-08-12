import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteItem } from '../Services/API';

function DeleteItem() {
    const [itemId, setItemId] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
     
    const handleDelete = () => {
    if (!itemId) {
    setError('Item ID is required');
    return;
            }
     
            deleteItem(itemId)
                .then(response => {
    navigate('/');  // Redirect to the home page after deletion
                })
                .catch(error => {
    setError('There was an error deleting the item');
                    console.error('Error deleting item:', error);
                });
        };


    return (
        <div><h1>Delete Item</h1><input type="number" placeholder="Enter Item ID" value={itemId}onChange={e => setItemId(e.target.value)}             />            <button onClick={handleDelete}>Delete Item</button> {error && <p style={{ color: 'red' }}>{error}</p>}            </div>
            );
}

export default DeleteItem;
