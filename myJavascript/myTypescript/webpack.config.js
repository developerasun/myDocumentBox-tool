// webpack files will be read by Node js
// set input/output directory in webpack config.
// 1) entry dir 2) output dir 

const path = require('path')

module.exports = {
    // entry is a relative path
    entry : './src/webpack/index.ts',
    module : {
        rules : [
            {
                test : /\.ts$/, 
                use : 'ts-loader', 
                include : [path.resolve(__dirname, 'src/webpack')]
            },
        ]
    },
    output: {
        filename : 'dist.js',
        // output is an absolute path
        path: path.resolve(__dirname, 'public/webpack')
    }
}

