import { useState } from 'react';

export default function Item({ item, onDelete }) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  function handleDelete() {
    onDelete(item);
  }

  return (
    <div>
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
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
