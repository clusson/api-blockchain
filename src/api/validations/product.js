'use strict';

import Joi from 'joi';

export default () => {
  const params = {
    productIdentifier: Joi.number().integer().required()
  };
  const payload = {

  };

  return {
    findById: {
      params
    }
  };
};
