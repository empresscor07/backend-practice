import dotenv from 'dotenv';
import devConfig from './dev.js';
//package that uses the environment file .env
dotenv.config();
//takes config definition from dev.js and uses to create values on this page
let config = devConfig;
//adds values to config object using environment variables read from dotenv
config.secret = process.env.secret;
config.port = process.env.port;
config.env = process.env.NODE_ENV;
console.log(config);

export default config;

