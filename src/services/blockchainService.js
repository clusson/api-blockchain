'use strict';
import request from 'request';

export default () => {
  return {
    sendScan(res) {

    },
    sendProduct() {
      return new Promise((resolve, reject) => {
        const options = {
          method: 'POST',
          url: process.env.BLOCKCHAIN_ADDRESS + process.env.PORT + process.env.PRODUCT_URL,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req)
        };
        request(options, (error, response, body) => {
          console.log(error, body);
        });
      });
    }
  };
};
