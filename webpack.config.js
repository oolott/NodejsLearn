const path = require('path');
// const fs = require('fs');
// const url = require('url');
// const http = require("http");

module.exports = {
    entry: './src/Main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        // fs: true,
        // http: true,
        // url: true
    }
    // externals:{
    //     fs:"fs"
    // } 

};