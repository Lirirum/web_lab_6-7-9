import React, { createContext, useState, useContext } from 'react';

export  const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};