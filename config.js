'use strict';
import commonEnv from 'common-env';
export default () =>
  commonEnv().getOrElseAll({
    nodeEnv: 'developement',
    api: {
      port: 3010
    },
  }
);
