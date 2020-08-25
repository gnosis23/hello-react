import React, { useState } from 'react';
import Button from "../Button";

export default function ButtonGroup(props) {
  const [count, setCount] = useState(0);

  const items = [
    { id: 1, name: 'button 1' },
    { id: 2, name: 'button 2' },
    { id: 3, name: 'button 3' },
  ];

  return (
    <div>
      <div>count: {count}</div>
      {items.map(item => (
        <Button key={item.id} onClick={() => setCount(c => c + 1)} />
      ))}
    </div>
  )
}
