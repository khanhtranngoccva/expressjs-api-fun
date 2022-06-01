const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, "public", "js"),
    },
    watch: true,
};