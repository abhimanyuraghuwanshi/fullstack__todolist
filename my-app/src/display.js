import { useState, useEffect } from 'react';
import axios from 'axios';

export function Display() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8000/api/items?page=${page}&limit=${limit}`);
      setItems(response.data);
    }
    fetchData();
  }, [page]);
  return (
    <div>
      {items.map(item => (
        <div key={item._id}>Name  :  {item.name}<br />Description  :  {item.description}<br />Price  :  {item.price}    <br />  <br /></div>
      
        
      ))}
      <br />
      {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}