'use strict';

import Joi from 'joi';

export default () => {
  const params = {
    scanId: Joi.number().integer().required()
  };
  const payload = {
  };

  return {
    findById: {
      params
    }
  };
};
