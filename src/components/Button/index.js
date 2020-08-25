import React from 'react';
import {useTheme} from "../ThemeContext";

export default function Button({ onClick }) {
  const { color, switchColor } = useTheme();

  const handleClick = () => {
    onClick && onClick();
    switchColor()
  };

  // const handleClick = useCallback(() => {
  //   onClick && onClick();
  // }, [onClick]);

  return (
    <button onClick={handleClick} style={{ color }}>test button</button>
  )
}
