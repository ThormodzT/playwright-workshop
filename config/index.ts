import * as dotenv from 'dotenv';
dotenv.config();

const convict = require('convict');
import { join } from 'path';

convict.addFormat(require('convict-format-with-validator').ipaddress);

const CONFIG_FILE = join(process.cwd(), 'config/config.js');

const configFileAsJs = {
  env: {
    doc: 'The apllication environment',
    format: ['development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ...require(CONFIG_FILE),
};

const config = convict(configFileAsJs);
config.validate({ allowed: 'strict' });
const get = (val: string) => config.get(val);

export { get };
