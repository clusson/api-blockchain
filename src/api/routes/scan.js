'use strict';
import _ from 'lodash';

export default (server, handlers, validations, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/scan',
    config: _.assign({}, defaultConfig, {
      handler: handlers.product.findById,
      validate: validations.product.findById
    })
  });

  server.route({
    method: 'GET',
    path: '/scan/{scanId}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.scan.findById,
      validate: validations.scan.findById
    })
  });

  server.route({
    method: 'POST',
    path: '/scan',
    config: _.assign({}, defaultConfig, {
      handler: handlers.product.findById,
      validate: validations.product.findById
    })
  });


  return Promise.resolve();
};
