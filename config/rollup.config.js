import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/scripts/main.js',
    output: {
        file: 'build/bundle.js',
        format: 'iife'
    },
    plugins: [ resolve() ]
};