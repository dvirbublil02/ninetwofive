import ProductPage from '../components/ProductPage';
import React from 'react';

export const Bracelets =() =>{
  const braceletsProducts = [
    {
      id: 1,
      name: 'Elegant Silver Bracelet',
      image: './images/b1.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Stylish Silver Necklace',
      image: './images/b2.jpg',
      price: '$79.99',
    },
    {
      id: 3,
      name: 'Classic Silver Earrings',
      image: './images/b3.jpg',
      price: '$29.99',
    },
    {
      id: 4,
      name: 'Classic Silver Earrings',
      image: './images/b4.jpg',
      price: '$29.99',
    },
    {
      id: 5,
      name: 'Classic Silver Earrings',
      image: './images/b5.jpg',
      price: '$29.99',
    },
    {
      id: 6,
      name: 'Classic Silver Earrings',
      image: './images/b6.jpg',
      price: '$29.99',
    },
    {
      id: 7,
      name: 'Classic Silver Earrings',
      image: './images/b7.jpg',
      price: '$29.99',
    },
    {
      id: 8,
      name: 'Classic Silver Earrings',
      image: './images/b8.jpg',
      price: '$29.99',
    },
    {
      id: 9,
      name: 'Classic Silver Earrings',
      image: './images/b9.jpg',
      price: '$29.99',
    },
    {
      id: 10,
      name: 'Classic Silver Earrings',
      image: './images/b10.jpg',
      price: '$29.99',
    },
    {
      id: 11,
      name: 'Classic Silver Earrings',
      image: './images/b11.jpg',
      price: '$29.99',
    },

  ];
  

  return <ProductPage heading="צמידים" products={braceletsProducts} />;
  };
  