'use strict';
import moment from 'moment';

export default () => {
  return {
    // send image to grimu
    sendPicture: (picture) => {
      //send image to grimu with Post
      return new Promise((resolve, reject) => {
        const options = {
          method: 'POST',
          url: 'grimu route'
        }
        request(options, function (err, res, body) {
          if (err) throw new Error(err)
          let transactionId = body
        })
      }).then(response)
      // get id from Nathan (scanID)

      // get response from Nathan with product
    }
  };
};
