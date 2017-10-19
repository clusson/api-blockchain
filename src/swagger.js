'use strict';

import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';
import packageJSON from '../package.json';

export default (server) => {
  return new Promise((resolve, reject) => {
    server.register([Inert, Vision, {
      register: HapiSwagger,
      options: {
        info: {
          title: packageJSON.name,
          version: packageJSON.version,
        }
      },
      routes: {
        prefix: '/api'
      }
    }], error => {
      return error ? reject(error) : resolve();
    });
  });
};
