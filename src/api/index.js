'use strict';
import Routes from './routes/';
import Validations from './validations';
import Handlers from './handlers';
export default (server, services) => {
  const validations = Validations();
  const handlers = Handlers(services);
  return Routes(server, handlers, validations);
};
