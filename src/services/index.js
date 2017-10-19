'use strict';
import blockchainService from './blockchainService';
import OCRService from './OCRService';

export default () => {
  return {
    blockchainService: blockchainService(),
    OCRService: OCRService(),

  };
};
