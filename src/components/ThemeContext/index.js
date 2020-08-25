import React, { useContext } from 'react';

const Context = React.createContext();

export const ThemeProvider = Context.Provider;

export function useTheme() {
  return useContext(Context);
}
