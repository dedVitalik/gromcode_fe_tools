module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        }
                    }
                ]
            }
        ]
    }
}