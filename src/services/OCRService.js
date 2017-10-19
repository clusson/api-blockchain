'use strict';
const fetch = require('node-fetch')
const FormData = require('form-data')
import moment from 'moment';
import request from 'request'
import Global from '../api/global'
import blockchainService from '../services/blockchainService'

export default () => {
  return {
    // send image to ocr
    sendPicture: (picture) => {
      return new Promise((resolve, reject) => {
        const options = {
          url: 'http://192.168.43.78:8000/label',
          method: 'POST',
          headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
          },
          json: true,
          body: { image: picture }
        };

        request(options, (error, response, body) => {
          if (error != null) {
            return reject(error);
          }
          console.log(body)
          return resolve(body)
          //Get product model
        });
      });
    }
  };
};
