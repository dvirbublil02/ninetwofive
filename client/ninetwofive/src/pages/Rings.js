
import ProductPage from '../components/ProductPage';
import React from 'react';

export const Rings =() =>{
  const ringsProducts = [
    {
      id: 1,
      name: 'Elegant Silver Bracelet',
      image: './images/r1.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Stylish Silver Necklace',
      image: './images/r2.jpg',
      price: '$79.99',
    },
    {
      id: 3,
      name: 'Classic Silver Earrings',
      image: './images/r3.jpg',
      price: '$29.99',
    },
    {
      id: 4,
      name: 'Classic Silver Earrings',
      image: './images/r4.jpg',
      price: '$29.99',
    },
    {
      id: 5,
      name: 'Classic Silver Earrings',
      image: './images/r5.jpg',
      price: '$29.99',
    },
    {
      id: 6,
      name: 'Classic Silver Earrings',
      image: './images/r6.jpg',
      price: '$29.99',
    },
    {
      id: 7,
      name: 'Classic Silver Earrings',
      image: './images/r7.jpg',
      price: '$29.99',
    },
    {
      id: 8,
      name: 'Classic Silver Earrings',
      image: './images/r8.jpg',
      price: '$29.99',
    },
    {
      id: 9,
      name: 'Classic Silver Earrings',
      image: './images/r9.jpg',
      price: '$29.99',
    },

  ];
  

  return <ProductPage heading="טבעות" products={ringsProducts} />;
  };
  