/* eslint-disable react/prop-types,react/jsx-filename-extension */
import React from 'react';
import ListsContextProvider from './ListsContextProvider';
import ItemsContextProvider from './ItemsContextProvider';

const GlobalContext = ({ children }) => (
  <ListsContextProvider>
    <ItemsContextProvider>{children}</ItemsContextProvider>
  </ListsContextProvider>
);

export default GlobalContext;
