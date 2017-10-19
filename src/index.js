'use strict';
import Services from './services';
import Swagger from './swagger';
import Api from './api/';

export default (server) => {
  const services = Services();
  return Promise.all([
    Swagger(server),
    Api(server, services),
  ]);
};
