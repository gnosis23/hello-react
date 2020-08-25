import { useState, useCallback } from 'react';

/**
 * 主题切换的hook
 */
export default function useColorSwitch() {
  const [color, setColor] = useState('red');

  const switchColor = useCallback(() => {
    setColor(c => c === 'red' ? 'yellow' : 'red');
  }, []);

  return [color, switchColor]
}
