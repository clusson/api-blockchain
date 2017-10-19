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
