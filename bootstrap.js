'use strict';
import Config from './config';
// because JavaScript has a limited standard lib,
// we want to globally expose some libraries we use in every files
// instead of require them everytime. #tradeoff
global.config = Config();
