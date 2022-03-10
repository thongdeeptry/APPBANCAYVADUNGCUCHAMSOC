import React from 'react';
import Navigation from './src/layout/product/Navigation';
import { UserContextProvider } from './src/layout/product/user/UserContext';
import { ProductConTextProvider } from './src/layout/product/ProductConText';
export default function App() {
  return (
    <UserContextProvider>
      <ProductConTextProvider>
        <Navigation />
      </ProductConTextProvider>
    </UserContextProvider>
  );
 }