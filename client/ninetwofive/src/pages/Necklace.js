import ProductPage from '../components/ProductPage';
import React from 'react';

export const Necklace =() =>{
  const watchesProducts = [
    {
      id: 1,
      name: 'Elegant Silver Bracelet',
      image: './images/n1.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Stylish Silver Necklace',
      image: './images/n2.jpg',
      price: '$79.99',
    },
    {
      id: 3,
      name: 'Classic Silver Earrings',
      image: './images/n3.jpg',
      price: '$29.99',
    },
    {
      id: 4,
      name: 'Classic Silver Earrings',
      image: './images/n4.jpg',
      price: '$29.99',
    },
    {
      id: 5,
      name: 'Classic Silver Earrings',
      image: './images/n5.jpg',
      price: '$29.99',
    },
    {
      id: 6,
      name: 'Classic Silver Earrings',
      image: './images/n6.jpg',
      price: '$29.99',
    },
    {
      id: 7,
      name: 'Classic Silver Earrings',
      image: './images/n7.jpg',
      price: '$29.99',
    },
    
  ];
  

  return <ProductPage heading="שרשראות" products={watchesProducts} />;
  };
  