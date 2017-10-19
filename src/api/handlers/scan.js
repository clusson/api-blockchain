'use strict';

export default function ({ blockchainService }) {
  const onError = (reply) => (err) => {
    reply(Boom.wrap(err));
  };

  return {
    sendPicture(picture) {

    }
  };
}
