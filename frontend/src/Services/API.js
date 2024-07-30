import axios from'axios';
 
const api = axios.create({
baseURL: 'http://localhost:5000/api',  // Use the full URL for the backend
    headers: {
'Content-Type': 'application/json'
    }
});
 
export const getItems = () => api.get('/items');
 
export default api;

// export const getItem = async (id) => {
//   const response = await axios.get(`${API_URL}/item/${id}`);
//   return response.data;
// };

// export const addItem = async (item) => {
//   const response = await axios.post(`${API_URL}/item`, item);
//   return response.data;
// };

// export const updateItem = async (id, item) => {
//   const response = await axios.put(`${API_URL}/item/${id}`, item);
//   return response.data;
// };

// export const deleteItem = async (id) => {
//   await axios.delete(`${API_URL}/item/${id}`);
// };
