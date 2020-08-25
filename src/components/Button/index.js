import React, { useState, useCallback } from 'react';

export default function Button(props) {
  const [count, setState] = useState(0);

  const handleClick = () => {
    setState(count + 1);
    console.log(count + 1)
    // setState(c => c + 1);
  };

  // const handleClick = useCallback(() => {
  //   setState(c => c + 1)
  // }, []);

  return (
    <button onClick={handleClick}>test button</button>
  )
}
