import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
 
function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}
 
export default App;
// import React, { useState } from 'react';
// import './App.css';
// import AddItem from './Components/AddItem';

// const inventoryItems = [
//   { id: 1, name: 'Socks', quantity: 10 },
//   { id: 2, name: 'Shoes', quantity: 20 },
//   { id: 3, name: 'Shorts', quantity: 15 },
//   { id: 4, name: 'Sweaters', quantity: 5 },
// ];

// function App() {
//   const [page, setPage] = useState('home');

//   const renderHomePage = () => (
//     <div>
//       <header>
//         <h1>Inventory Management System</h1>
//         <button onClick={() => setPage('add')}>Add New Item</button>
//       </header>
//       <main>
//         <h2>Inventory List</h2>
//         <ul id="inventory-list">
//           {inventoryItems.map(item => (
//             <li key={item.id}>
//               {item.name} - Quantity: {item.quantity}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );

//   return (
//     <div className="App">
//       {page === 'home' ? renderHomePage() : <AddItem />}
//     </div>
//   );
// }

// export default App;

// App.listen(3000, () => {
//   console.log('Server is listening on Port 3000')
// })

