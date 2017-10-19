'use strict';
import moment from 'moment';

export default () => {
  return {
    findById: (id) =>
      Promise.resolve({ payload: 'lol' }),
  };
};
