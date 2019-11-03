
module.exports = {
    entry: {
        "index": "./src/index.js",
        "posts/lessons-from-developing-a-multiplayer-card-game/index": "./src/posts/lessons-from-developing-a-multiplayer-card-game/index.js",
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
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.html$/i,
                loader: 'file-loader',
                options: {
                    outputPath: (url, resourcePath, context) => {
                        const l = resourcePath.split("src/");
                        return l[l.length - 1];
                    },
                },
            }
        ]
    }
};