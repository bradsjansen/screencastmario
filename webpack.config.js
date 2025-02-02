var path = require('path');

module.exports = {

    entry: {
        mario: "./src/game.ts"
    },
    output: {
        path: path.resolve(__dirname, "./release/"),
        filename: "[name].js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader' or awesome-typescript-loader'.
            { test: /\.ts$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/, },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [
                ]
            }
        ]
    }

};