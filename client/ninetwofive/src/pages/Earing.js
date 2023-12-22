import ProductPage from '../components/ProductPage';
import React from 'react';

export const Earing =() =>{
  const earingProducts = [
    {
      id: 1,
      name: 'Elegant Silver Bracelet',
      image: './images/ar1.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Stylish Silver Necklace',
      image: './images/ear2.jpg',
      price: '$79.99',
    },
    {
      id: 3,
      name: 'Classic Silver Earrings',
      image: './images/ear3.jpg',
      price: '$29.99',
    },
    {
      id: 4,
      name: 'Classic Silver Earrings',
      image: './images/ear4.jpg',
      price: '$29.99',
    },
    {
      id: 5,
      name: 'Classic Silver Earrings',
      image: './images/ear5.jpeg',
      price: '$29.99',
    },
   
    

  ];
  

  return <ProductPage heading="עגילים" products={earingProducts} />;
  };
  