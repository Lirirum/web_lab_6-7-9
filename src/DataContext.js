import React, { createContext, useState, useContext } from 'react';

export  const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};