import { useState } from 'react';
import axios from 'axios';
import Item from './Item';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, { name, description, price }]);
    // Clear the form fields after the item is added to the list
    setName('');
    setDescription('');
    setPrice('');
  }

  async function handlePost() {
    console.log(items)
    try {
      await axios.post('http://localhost:8000/api/items', items);
      // Clear the list after the items are saved
      setItems([]);
    } catch (error) {
      console.error(error);
    }
  }

  function handleDelete(item) {
    setItems(items.filter(i => i !== item));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <hr />
      {items.map(item => (
        <Item key={item.name} item={item} onDelete={handleDelete} />
      ))}
      <br />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
