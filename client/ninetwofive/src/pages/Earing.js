import ProductPage from '../components/ProductPage';
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../apis/ServerApi';

export const Earing =() =>{
  const [earingProducts, setearingProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await fetchProducts('EARING');
        setearingProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductData();
  }, []);

  

  return <ProductPage heading="עגילים" products={earingProducts} />;
  };
  