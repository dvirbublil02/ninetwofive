
import ProductPage from '../components/ProductPage';
import React from 'react';

export const Watches =() =>{

  const watchesProducts = [
    {
      id: 1,
      name: 'Elegant Silver Bracelet',
      image: './images/w-w1.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Stylish Silver Necklace',
      image: './images/w-w2.jpg',
      price: '$79.99',
    },
    {
      id: 3,
      name: 'Classic Silver Earrings',
      image: './images/w-w3.jpg',
      price: '$29.99',
    },
    {
      id: 4,
      name: 'Classic Silver Earrings',
      image: './images/w-w4.jpg',
      price: '$29.99',
    },
    {
      id: 5,
      name: 'Classic Silver Earrings',
      image: './images/m-w1.jpg',
      price: '$29.99',
    },
    {
      id: 6,
      name: 'Classic Silver Earrings',
      image: './images/m-w2.jpg',
      price: '$29.99',
    },
    {
      id: 7,
      name: 'Classic Silver Earrings',
      image: './images/m-w3.jpg',
      price: '$29.99',
    },
    {
      id: 8,
      name: 'Classic Silver Earrings',
      image: './images/m-w4.jpg',
      price: '$29.99',
    },
    {
      id: 9,
      name: 'Classic Silver Earrings',
      image: './images/w-w5.jpg',
      price: '$29.99',
    },
    {
      id: 10,
      name: 'Classic Silver Earrings',
      image: './images/m-w5.jpg',
      price: '$29.99',
    },
  ];
  

  return <ProductPage heading="שעונים" products={watchesProducts} />;

  };
  