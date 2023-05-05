import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
        minifyInternalExports: true,
        exports: 'named'
    },
    plugins: [typescript(), typescriptPaths()],
    external: ['axios']
}
