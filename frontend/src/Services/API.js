 import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const getItems = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

export const getItem = async (id) => {
  const response = await axios.get(`${API_URL}/item/${id}`);
  return response.data;
};

export const addItem = async (item) => {
  const response = await axios.post(`${API_URL}/item`, item);
  return response.data;
};

export const updateItem = async (id, item) => {
  const response = await axios.put(`${API_URL}/item/${id}`, item);
  return response.data;
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/item/${id}`);
};
