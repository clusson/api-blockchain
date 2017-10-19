'use strict';
import Product from './product';
import Scan from './scan';
const defaultConfig = {
  description: 'no notes',
  notes: 'no description',
  tags: ['api'],
};
export default (server, handlers, validations) => {
  return Promise.all([
    Product(server, handlers, validations, defaultConfig),
    Scan(server, handlers, validations, defaultConfig)
  ]);
};
