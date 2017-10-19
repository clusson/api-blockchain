'use strict';

import Joi from 'joi';

export default () => {
  const params = {
    pluginId: Joi.number().integer().required()
  };
  const payload = {
    name: Joi.string().max(50),
    type: Joi.string().max(50)
  };

  return {
    findById: {
      params
    }
  };
};
