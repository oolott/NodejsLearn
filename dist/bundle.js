/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// console.log("dirname:"+__dirname);
// console.log("process.cwd():"+process.cwd());
// console.log("process.execPath:"+process.execPath);
// var t = require("./Test.js");
__webpack_require__(1);
// t.test();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(2);
var url = __webpack_require__(3);
var path = __webpack_require__(4);
var http = __webpack_require__(5);
var root = path.resolve(process.argv[2] || '.');

var server = http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log('---------------------------------------------');
    console.log('url='+request.url);
    console.log('pathname='+pathname);
    var filepath = path.join(root, pathname);
    console.log('root='+root);
    console.log('filepath='+filepath);
    fs.stat(filepath, (err, stats)=>{
        if (!err && stats.isFile()) {
            // process.execPath
            // process.cwd();
            // process.run
            console.log('200'+request.url);
            // response.write('200');
            // response.writeHead(200,{"Content-type":"text/plain"});
            response.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(filepath).pipe(response);
            
        } else if(fs.existsSync(filepath = path.join(root, 'index.html'))){
            response.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404'+request.url);
            response.writeHead(404,{"Content-type":"text/html"});
            response.end('404 Not Found!');
        }
    });
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);