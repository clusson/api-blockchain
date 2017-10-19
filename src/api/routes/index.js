'use strict';
import Plugins from './plugins';
const defaultConfig = {
  description: 'no notes',
  notes: 'no description',
  tags: ['api'],
};
export default (server, handlers, validations) => {
  return Promise.all([
    Plugins(server, handlers, validations, defaultConfig),
  ]);
};
