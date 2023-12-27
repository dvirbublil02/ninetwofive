//in this file i will handle with all of the fron requests from the server

import Axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL;
//this function will create a new user in the database (sending the request to the server
//and waiting for the response (success/failed/etc)). 
export const registerUser = async (username, userpassword, usermail) => {
  try {
    const response = await Axios.post(`${apiUrl}/register`, {
      username,
      userpassword,
      usermail,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
