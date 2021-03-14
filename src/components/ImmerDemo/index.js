import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function() {
  const [data, setData] = useImmer([]);
  const [id, setId] = useState(0);

  const add = () => {
    setData(old => {
      old.push({ id: id + 1, text: 'hello ' + (id + 1) });
    });
    setId(x => x + 1);
  };

  const handleChange = (value,index,e) => {
    console.log(e.target);
    setData(old => {
      old[index].text = value;
    });
    setTimeout(() => console.log(e.target), 1000);
  };

  return (
    <div>
      <button onClick={add}>+1</button>
      {data.map((item, index) => (
        <div key={item.id}>
          <input value={item.text} onChange={e => handleChange(e.target.value, index, e)} />
        </div>
      ))}
    </div>
  )
}
