import ProductPage from '../components/ProductPage';
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../apis/ServerApi';

export const Bracelets =() =>{
  const [braceletsProducts, setBraceletsProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await fetchProducts('BRACELET');
        setBraceletsProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductData();
  }, []);

  return <ProductPage heading="צמידים" products={braceletsProducts} />;
  };
  