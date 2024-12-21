const typescript = require('rollup-plugin-typescript2');

module.exports = {
    input: 'src/index.ts',  // 输入文件
    output: [
        {
            file: 'lib/index.cjs.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'lib/index.esm.js',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json', useTsconfigDeclarationDir: true })
    ]
};
