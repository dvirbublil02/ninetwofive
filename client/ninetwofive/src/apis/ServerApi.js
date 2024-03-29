//in this file i will handle with all of the fron requests from the server

import Axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL;
//
export const loginUser = async (username, userpassword) => {
  try {
    const response = await Axios.post(`${apiUrl}/login`, {
      username,
      userpassword,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

//import prodcuts
export const fetchProducts = async (type) => {
  try {
    const response = await Axios.get(`${apiUrl}/products?type=${type}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//add product
export const addProduct = async (name,image,price,type) => {
  try {
    const response = await Axios.post(`${apiUrl}/addProduct`,{name,image,price,type});
      return response;
  } catch (error){
    throw error;
  }
};
