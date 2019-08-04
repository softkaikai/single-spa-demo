const path = require('path');

module.exports = {
    mode: 'production',
    entry: './buildCommonEntry/commonReact.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'reactCommon.js',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-export-default-from",
                                "@babel/plugin-proposal-export-namespace-from",
                                "@babel/plugin-proposal-object-rest-spread"
                            ]
                        }

                    }
                ]
            }
        ]
    }
}