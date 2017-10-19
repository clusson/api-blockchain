'use strict';
const fetch = require('node-fetch')
const FormData = require('form-data')
import moment from 'moment';
import request from 'request'
import Global from '../api/global'

export default () => {
  return {
    // send image to grimu
    sendPicture: (picture) => {
      const object = { image: picture.source }

      return new Promise((resolve, reject) => {
        const options = {
          method: 'POST',
          url: 'http://192.168.43.78:8000/label',
          json: true,
          body: object
        };
        request(options, (error, response, body) => {
          console.log(error);
        });
      });
    }
  };
};
