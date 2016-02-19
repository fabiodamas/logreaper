module.exports = require("./make-webpack-config")({
    env: "development",
    browserPath: '/labs/logreaper',
    devServer: true,
    publicPath: "http://localhost:8080/labs/logreaper/_assets/",
    hotComponents: true,
    separateStylesheet: true,
    //devtool: "eval",
    devtool: "eval-source-map",
    //devtool: "source-map",
    debug: true
});