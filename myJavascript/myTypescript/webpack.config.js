// webpack files will be read by Node js
// set input/output directory in webpack config.
// 1) entry dir 2) output dir 

const path = require('path')

module.exports = {
    // entry is a relative path
    mode: 'development',
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
        publicPath : '/public/webpack/', // relative path letting webpack-dev-server know where to serve(build) codes
        filename : 'dist.js',
        path: path.resolve(__dirname, 'public/webpack') // output is an absolute path
    },
    resolve : {
        extensions: ['.ts', '.js', '...']
    }
}

