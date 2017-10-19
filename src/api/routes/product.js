'use strict';
import _ from 'lodash'

export default (server, handlers, validations, defaultConfig) => {
  server.route({
    method: 'GET',
    path: '/plugins/{pluginId}',
    config: _.assign({}, defaultConfig, {
      handler: handlers.plugins.findById,
      validate: validations.plugins.findById
    })
  });
  return Promise.resolve();
};



// product Routes
app.route('/product')
  .get(product.list_all_products)
  .post(product.create_a_product)

// scan Routes
app.route('/scan')
  .get(scan.list_all_scans)
  .post(scan.create_a_scan)

app.route('/product/:productIdentifier')
  .get(product.read_a_product)
  .put(product.update_a_product)
  .delete(product.delete_a_product)

app.route('/scan/:scanId')
  .get(scan.read_a_scan)
