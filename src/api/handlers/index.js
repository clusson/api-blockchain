'use strict';
import Product from './product';

export default (services) => {
  return {
    scan: Scan(services),
    product: Product(services)
  };
};
