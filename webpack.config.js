
module.exports = {
    entry: {
        "index": "./src/pages/index.js",
        "articles/index": "./src/pages/articles/index.js",
        "articles/lessons-from-developing-a-multiplayer-card-game/index": "./src/pages/articles/lessons-from-developing-a-multiplayer-card-game/index.js",
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },{
                test: /\.(html|ttf)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: (url, resourcePath, context) => {
                        const l = resourcePath.split("src/pages/");
                        return l[l.length - 1];
                    },
                },
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    }
};