import axios from 'axios';
import endpoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-type': 'application/json',
    },
  };
  const response = await axios.post(endpoints.products.addProduct, body, config);
  return response.data;
};

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-type': 'application/json',
    },
  };
  const response = await axios.put(endpoints.products.updateProduct(id), body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endpoints.products.deleteProduct(id));
  return response.data;
};

export { addProduct, updateProduct, deleteProduct };
