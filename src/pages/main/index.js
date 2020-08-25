import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import useColorSwitch from "../../hooks/useColorSwitch";
import { ThemeProvider } from '../../components/ThemeContext';

export default function MainPage(props) {
  const [color, switchColor] = useColorSwitch();
  // 优化下
  const global = {
    color,
    switchColor
  }

  return (
    <ThemeProvider value={global}>
      <div>
        <ButtonGroup />
      </div>
    </ThemeProvider>
  )
}
