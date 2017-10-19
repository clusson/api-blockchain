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
      const data = new FormData()
      data.append('file', image)

      fetch(Global.back + '/image', {
        method: 'POST',
        body: data
      }).then(() => {
        console.log('ok')
      }).catch(err => console.error(err))
    }
  };
};
