
module.exports = {
    entry: {
        "index": "./src/pages/index.js",
        "articles/index": "./src/pages/articles/index.js",
        "articles/lessons-from-developing-a-multiplayer-card-game/index": "./src/pages/articles/lessons-from-developing-a-multiplayer-card-game/index.js",
        "articles/how-to-finish-that-side-project-you-started/index": "./src/pages/articles/how-to-finish-that-side-project-you-started/index.js",
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
                test: /\.(html|ttf|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: (url, resourcePath, context) => {
                        let splitString = null;
                        if (resourcePath.includes("pages")) {
                            splitString = "src/pages/";
                        } else if (resourcePath.includes("assets")) {
                            splitString = "src/";
                        }

                        if (splitString != null) {
                            const l = resourcePath.split(splitString);
                            return l[l.length - 1];
                        } else {
                            return resourcePath;
                        }
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