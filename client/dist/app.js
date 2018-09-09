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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/conf.js":
/*!*********************!*\
  !*** ./src/conf.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    webapihost: \"http://localhost:3000\"\n};\n\n//# sourceURL=webpack:///./src/conf.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(/*! ../src/conf */ \"./src/conf.js\");\nvar mainplay = __webpack_require__(/*! ../src/play */ \"./src/play.js\");\nvar respond2Me = __webpack_require__(/*! ../src/respond */ \"./src/respond.js\");\n(function () {\n    function joinMe() {\n        var myRequest = new XMLHttpRequest();\n        myRequest.open(\"POST\", settings.webapihost + \"/add\");\n        myRequest.overrideMimeType(\"application/json\");\n        myRequest.send();\n        myRequest.onload = function () {\n            var myid = document.getElementById(\"myuserId\");\n            var mytoken = document.getElementById(\"mytoken\");\n            var obj = JSON.parse(myRequest.response);\n            myid.textContent = obj.id;\n            mytoken.textContent = obj.token;\n            console.log(myRequest.response);\n        };\n    }\n    var myplay,\n        myres,\n        reg = document.getElementById(\"register\");\n    reg.addEventListener(\"click\", joinMe, false);\n    myplay = document.getElementById(\"play\");\n    myplay.addEventListener(\"click\", mainplay, false);\n    myres = document.getElementById(\"myresponse\");\n    myres.addEventListener(\"click\", respond2Me, false);\n})();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(/*! ../src/conf */ \"./src/conf.js\");\nmodule.exports = function play() {\n    var myRequest = new XMLHttpRequest();\n    var myid = document.getElementById(\"myuserId\");\n    var mytoken = document.getElementById(\"mytoken\");\n    var challengeRequest = { \"id\": Number(myid.textContent), \"token\": mytoken.textContent };\n    myRequest.open(\"POST\", settings.webapihost + \"/challenge\");\n    myRequest.overrideMimeType(\"application/json\");\n    myRequest.setRequestHeader(\"Content-Type\", \"application/json\");\n    myRequest.send(JSON.stringify(challengeRequest));\n    myRequest.onload = function () {\n        var challenge = document.getElementById(\"mychallenge\");\n        var obj;\n        if (myRequest.response) {\n            obj = JSON.parse(myRequest.response);\n            challenge.textContent = obj.challenge;\n            console.log(obj.challenge);\n        } else {\n            challenge.textContent = \"try again\";\n        }\n    };\n};\n\n//# sourceURL=webpack:///./src/play.js?");

/***/ }),

/***/ "./src/respond.js":
/*!************************!*\
  !*** ./src/respond.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(/*! ../src/conf */ \"./src/conf.js\");\nmodule.exports = function respond() {\n    var myRequest = new XMLHttpRequest();\n    var myid = document.getElementById(\"myuserId\");\n    var mytoken = document.getElementById(\"mytoken\");\n    var myanswer = document.getElementById(\"myanswer\");\n    var player = { \"id\": Number(myid.textContent), \"token\": mytoken.textContent };\n    var res = { \"player\": player, \"answer\": myanswer.value };\n    myRequest.open(\"POST\", settings.webapihost + \"/answer\");\n    myRequest.overrideMimeType(\"application/json\");\n    myRequest.setRequestHeader(\"Content-Type\", \"application/json\");\n    myRequest.send(JSON.stringify(res));\n    myRequest.onload = function () {};\n};\n\n//# sourceURL=webpack:///./src/respond.js?");

/***/ })

/******/ });