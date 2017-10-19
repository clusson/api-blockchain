'use strict';
import request from 'request';

export default () => {
  return {
    listProducts() {
      return new Promise((resolve, reject) => {
        const products = {};
        const options = {
          method: 'GET',
          url: process.env.BLOCKCHAIN_ADDRESS + process.env.PRODUCT_URL,
          json: true,
          body: products
        };

        request(options, (error, response, body) => {
          // if (error) throw new Error(error);
          // const jsonData = JSON.parse(body);
          // const message = Object.assign($message.message, { content: jsonData });
          // resolve(message);
        });
      });
    },
    sendScan(res) {
      return new Promise((resolve, reject) => {
        const options = {
          method: 'POST',
          url: process.env.BLOCKCHAIN_ADDRESS + process.env.PORT + process.env.PRODUCT_URL,
          body: res
        };
        request(options, (error, response, body) => {
          if (error != null) {
            return reject(error);
          }
          console.log('sending to BC', body);
          return resolve(body);
          // Get product model
        });
      });
    }
  };
};
