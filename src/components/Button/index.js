import React from 'react';

export default function Button({ onClick }) {

  const handleClick = () => {
    onClick && onClick();
  };

  // const handleClick = useCallback(() => {
  //   onClick && onClick();
  // }, [onClick]);

  return (
    <button onClick={handleClick}>test button</button>
  )
}
