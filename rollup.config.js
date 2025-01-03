import path from 'path'
import copy from 'rollup-plugin-copy'

const input = path.join(__dirname, 'browser.js')

export default [
    /**
     * Ponyfill for CommonJS or EcmaScript Modules
     * Usage examples:
     * - const { AudioContext } = require('universal-audio')
     * - import { AudioContext } from 'universal-audio')
     */
    {
        input,
        output: {
            file: path.join(__dirname, 'dist', 'browser-ponyfill.js'),
            format: 'iife',
            name: 'irrelevant',
        },
        plugins: [
            copy({
                targets: [{ src: 'src/*-ponyfill.js', dest: 'dist' }],
                verbose: true,
            }),
        ],
        context: 'this',
    },
    /**
     * Polyfill for CommonJS or EcmaScript Modules
     * Usage examples:
     * - require('universal-audio/polyfill')
     * - import 'universal-audio/polyfill'
     */
    {
        input,
        output: {
            file: path.join(__dirname, 'dist', 'browser-polyfill.js'),
            format: 'iife',
            name: 'irrelevant',
            strict: false,
        },
        plugins: [
            copy({
                targets: [{ src: 'src/*-polyfill.js', dest: 'dist' }],
                verbose: true,
            }),
        ],
        context: 'this',
    },
]
