import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    return config;
  }
};