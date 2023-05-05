import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import { join } from 'path'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: join('./dist', 'cjs', 'bundle.cjs'),
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: join('./dist', 'esm', 'bundle.mjs'),
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [typescript(), typescriptPaths()],
    external: ['axios']
}
