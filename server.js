'use strict';
import Hapi from 'hapi';
import './bootstrap';
import src from './src/';

export const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: config.api.port,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
});

export default (hapiServer) => {
  src(hapiServer)
    .then(() => {
      hapiServer.start(err => {
        console.log(err || `Server running at ${hapiServer.info.uri}`);
      });
    }).catch(err => {
      throw err;
    });
};
