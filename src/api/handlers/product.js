'use strict';
import request from 'request';

export default function ({ OCRService, blockchainService }) {
  const onError = (reply) => (err) => {
    reply(Boom.wrap(err));
  };

  return {
    list_all_products(req, res) {
      blockchainService.listProducts();
    },
    create_a_product(req, res) {
      const picture = req.payload.file.toString('base64');
      OCRService.sendPicture(picture).then((resolve) =>
        blockchainService.sendScan(resolve)).then((idScan) => send(idScan));
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
