import { useState, useEffect } from 'react';
import endpoints from '@services/api';
import axios from 'axios';

const useFetch = (total, init) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(init);
  const [limit] = useState(total);

  async function fetchData() {
    const response = await axios.get(endpoints.products.getProductsByPagination(limit, offset));
    setData(response.data);
  }

  useEffect(() => {
    try {
      if (offset <= 200 && offset >= 0) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [offset]);

  // Change page
  const paginateFront = () => {
    if (offset < 200 && offset >= 0) {
      setOffset(offset + limit);
    }
    return null;
  };
  const paginateBack = () => {
    if (offset < 201 && offset > 0) {
      setOffset(offset - limit);
    }
    return null;
  };
  return {
    data,
    limit,
    offset,
    paginateBack,
    paginateFront,
  };
};

export default useFetch;
