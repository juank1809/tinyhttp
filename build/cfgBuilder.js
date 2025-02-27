import ts from '@rollup/plugin-typescript'
import deps from './deps'

export default (cfg) => ({
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm'
    }
  ],
  plugins: [ts({ include: ['./src/**/*.ts'] }), ...(cfg.plugins || [])],
  external: [...deps(cfg.external)]
})
