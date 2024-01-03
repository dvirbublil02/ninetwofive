import ProductPage from '../components/ProductPage';
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../apis/ServerApi';

export const Necklace =() =>{
  const [watchesProducts, setwatchesProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await fetchProducts('WATCH');
        setwatchesProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductData();
  }, []);

  return <ProductPage heading="שרשראות" products={watchesProducts} />;
  };
  