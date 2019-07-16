const path = require("path");
module.exports = {
    entry: {
        app: path.resolve(__dirname, "app.ts")
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].[chunkhash].bundle.js",

        // set the output path here:
        path: path.resolve(__dirname, "../../js")
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { transpileOnly: true }
            }
        ]
    }
};
