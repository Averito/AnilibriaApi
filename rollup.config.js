import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        minifyInternalExports: true
    },
    plugins: [typescript(), typescriptPaths()]
}
