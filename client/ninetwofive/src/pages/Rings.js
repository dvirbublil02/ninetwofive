
import ProductPage from '../components/ProductPage';
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../apis/ServerApi';

export const Rings =() =>{
  const [ringsProducts, setringsProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await fetchProducts('RING');
        setringsProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductData();
  }, []);

  return <ProductPage heading="טבעות" products={ringsProducts} />;
  };
  