import React, { useState, useEffect, useRef } from 'react';
import Button from "../Button";

export default function ButtonGroup(props) {
  const [count, setCount] = useState(0);

  const items = [
    { id: 1, name: 'button 1' },
    { id: 2, name: 'button 2' },
    { id: 3, name: 'button 3' },
  ];

  const [scale, setScale] = useState(1);
  // const countRef = useRef(0);

  useEffect(() => {
    setScale(2);
    // if (countRef.current === 0) {
    //   setScale(2);
    // }
    // countRef.current++;
    setTimeout(() => {
      setScale(1);
    }, 2000);
  }, [count]);

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'left top' }}>
      <div>count: {count}</div>
      {items.map(item => (
        <Button key={item.id} onClick={() => setCount(c => c + 1)} />
      ))}
    </div>
  )
}
