var webpack = require("webpack")

module.exports = {
    entry: {
        app: "./src/index.ts",
        vendor: ['lodash'],
    },
    output: {
        filename: "[name].bundle.js",
        publicPath: "dist",
        path: __dirname + "/dist"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({ names: ["vendor", "manifest" ] }),
    ],

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // TSLint
            { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader', options: { emitErrors: true, failOnHint: true, }, },
        ]
    },
};
