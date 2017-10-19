'use strict';

import Scan from './scan';
import Product from './product';

export default () => {
  return {
    scan: Scan(),
    product: Product()
  };
};
