import ProductPage from '../components/ProductPage';
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../apis/ServerApi';

export const New = () => {
  const [newProducts, setnewProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await fetchProducts('NEW');
        setnewProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductData();
  }, []);

  return <ProductPage heading="חדש" products={newProducts} />;
  };