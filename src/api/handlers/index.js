'use strict';
import Product from './product';
import Scan from './scan';

export default (services) => {
  return {
    scan: Scan(services),
    product: Product(services)
  };
};
