'use strict';
import request from 'request';

export default function({ OCRService }) {
  const onError = (reply) => (err) => {
    reply(Boom.wrap(err));
  };

  return {
    list_all_products: () => {
      return new Promise((resolve, reject) => {
        const options = {
          method: 'GET',
          url: process.env.BLOCKCHAIN_ADDRESS + process.env.PORT + process.env.PRODUCT_URL,
          headers: { 'Content-Type': 'application/json' }
        };
        request(options, (error, response, body) => {
          if (error) throw new Error(error);
          const jsonData = JSON.parse(body);
          const nMessage = jsonData[0];
          const message = Object.assign($message.message, { content: nMessage });
          resolve(message);
        });
      });
    },
    create_a_product(product) {
      OCRService.sendPicture(picture).then((response) =>
        blockchainService.sendScan(response)).then((idScan) => send(idScan));
    },
    read_a_product(req, res) {
      return new Promise((resolve, reject) => {
        const options = {
          method: 'GET',
          url: process.env.BLOCKCHAIN_ADDRESS + process.env.PORT + process.env.PRODUCT_URL + req,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.params)
        };
        request(options, (error, response, body) => {
          console.log(error, body);
        });
      });
    },
    update_a_product(req, res) {
    },
    delete_a_product(req, res) {
    }
  };
}
