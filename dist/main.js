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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass DOMNodeCollection { // Equivalent of JQuery Object\n  constructor(array) { // Array of HTML Elements\n    this.nodeArray = array;  // Instance variable representing array\n  }\n\n  html(str) { // Optionally receives a string as a parameter\n    if (typeof str === 'string') { //If it receives argument, it becomes innerHMTL\n      this.nodeArray.forEach(ele => ele.innerHTML = str)\n    } else {\n      return this.nodeArray[0].innerHTML; \n    }\n  }\n\n  empty() {\n    this.html(\"\"); \n  }\n\n  // Accept either a:\n  // 1) jQuery-lite wrapped collection, \n  // 2) an HTML element, \n  // 3)or a string. \n  // Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection. \n  append(arg) {\n    debugger \n    switch (typeof arg) {\n      case 'string':\n        this.nodeArray.forEach( (ele) => ele.innerHTML += arg);\n        break;\n      case 'object': //if else statement dom node or html) \n        if (arg instanceof DOMNodeCollection) {\n          this.nodeArray.forEach( node => {\n            arg.nodeArray.forEach( (ele) => node.innerHTML += ele.outerHTML);\n          })\n        } else if (arg instanceof HTMLElement) {\n          this.nodeArray.forEach(node => (node.innerHTML += arg.outerHTML));\n        }\n        break;\n    }\n\n  }\n\n  attr(style, value) { //if else to include getter \n    if (!value) {\n      arr = [];\n       this.nodeArray.forEach(ele => arr.push(ele.className));\n       return arr;\n    } else {\n       this.nodeArray.forEach( (ele) => ele.setAttribute(style, value));\n    }\n    \n  } \n\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n// window.$l = function(arg) {\n//   let nodeList = window.querySelectorAll(arg);\n//   let nodeArr = Array.from(nodeList);\n//   // return nodeArr; //????\n//   return new DOMNodeCollection(nodeArr);\n\n// };\n\n // Is this same as DOMContentLoaded?\n\n\n window.$l = function(arg) {\n   let nodeElement;\n   if (arg instanceof HTMLElement ) {\n      nodeElement = [arg];\n       const abc = new DOMNodeCollection(nodeElement);\n       return abc \n   } else if (typeof arg === \"string\" ) { \n     \n      let nodeList = document.querySelectorAll(arg);\n       \n      let nodeArr = Array.from(nodeList);\n      const abc = new DOMNodeCollection(nodeArr);\n      return abc \n   } \n     \n   };\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });