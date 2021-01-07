import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.peerDependencies || {}),
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [typescript({ rootDir: 'src' })],
};
