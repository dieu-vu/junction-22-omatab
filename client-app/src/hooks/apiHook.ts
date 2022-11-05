import React from 'react';
import { OrderDTO } from './OrderDTO';


const baseUrl: string = 'https://daas-public-api.development.dev.woltapi.com/merchants/';
const api_key: string = process.env.REACT_APP_API_KEY || ''; 
const merchant_id: string = process.env.REACT_APP_MERCHANT_ID || '';

console.log("env var: ", process.env.REACT_APP_MERCHANT_ID || 'env var not found');

const postOrder = async (data: OrderDTO ) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_key}`
        },
        body: JSON.stringify(data),
    };
    try {
    const response =  await fetch(`${baseUrl}${merchant_id}/delivery-order`, options);
    const json = await response.json();
      if (response.ok) {
        return json;
      } else {
        throw new Error(
          json.error
            ? `${json.message} : ${json.error}`
            : json.message || response.statusText
        );
      }
    } catch (e) {
      throw new Error('error in post request');
    }
}


export { postOrder };


