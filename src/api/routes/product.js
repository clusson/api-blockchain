'use strict';
import _ from 'lodash';

export default (server, handlers, validations, defaultConfig) => {
  // PRODUCT ROUTES
  // server.route({
  //   method: 'GET',
  //   path: '/product',
  //   config: _.assign({}, defaultConfig, {
  //     handler: handlers.product.findById,
  //     validate: validations.product.findById
  //   })
  // });

  // server.route({
  //   method: 'GET',
  //   path: '/product/{productIdentifier}',
  //   config: _.assign({}, defaultConfig, {
  //     handler: handlers.product.findById,
  //     validate: validations.product.findById
  //   })
  // });

  server.route({
    method: 'POST',
    path: '/product',
    config: _.assign({}, defaultConfig, {
      handler: handlers.product.create_a_product,
      // validate: validations.product.findById
    })
  });

  // server.route({
  //   method: 'PUT',
  //   path: '/product/{productIdentifier}',
  //   config: _.assign({}, defaultConfig, {
  //     handler: handlers.product.findById,
  //     validate: validations.product.findById
  //   })
  // });

  // server.route({
  //   method: 'DELETE',
  //   path: '/product/{productIdentifier}',
  //   config: _.assign({}, defaultConfig, {
  //     handler: handlers.product.findById,
  //     validate: validations.product.findById
  //   })
  // });

  // // SCAN ROUTES
  // server.route({
  //   method: 'GET',
  //   path: '/scan',
  //   config: _.assign({}, defaultConfig, {
  //     handler: handlers.product.findById,
  //     validate: validations.product.findById
  //   })
  // });

  // server.route({
  //   method: 'GET',
  //   path: '/scan/{scanId}',
  //   config: _.assign({}, defaultConfig, {
  //     handler: handlers.scan.findById,
  //     validate: validations.scan.findById
  //   })
  // });

  return Promise.resolve();
};
