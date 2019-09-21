// contrived examples
import path from 'path';

export const config: Record<string, string> = {
  prop1: 'prop 1',
  prop2: 'prop 2',
  prop3: path.resolve(__dirname, '.'),
};

export default config;
