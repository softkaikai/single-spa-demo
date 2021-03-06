const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                parser: {system: false},
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-object-rest-spread"
                            ]
                        }

                    }
                ]
            }
        ]
    },
    externals: {
        'react': 'React',
        'classNames': 'classNames',
        'react-dom': 'ReactDom',
        'react-router-dom': 'ReactRouterDom',
        'react-router': 'ReactRouter',
        'single-spa-react': 'singleSpaReact',
    },
}