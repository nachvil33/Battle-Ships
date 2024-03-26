/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgroundbatleships.png */ "./src/images/backgroundbatleships.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.cell {
  background-size: contain;
  background-color: rgb(255 255 255 / 63%);
  border: 1px solid rgb(255, 255, 255);
  height: 0;
  padding-bottom: 100%;
  width: 100%;
}

.cell.has-background-danger {
  background-color: rgba(255, 0, 0, 0.63) !important;
}

.cell.has-background-success {
  background-color: rgba(30, 255, 0, 0.63) !important;
}

.cell:hover {
  background-color: rgb(215, 215, 215, 0.5);
  cursor: pointer;
}

.is-fullheight {
  min-height: 100vh;
}

.tittle-tag > span {
  font-family: monospace;
  width: 135px;
}

.has-ocean {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;EACxB,wCAAwC;EACxC,oCAAoC;EACpC,SAAS;EACT,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,yDAAwD;AAC1D","sourcesContent":[".board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.cell {\n  background-size: contain;\n  background-color: rgb(255 255 255 / 63%);\n  border: 1px solid rgb(255, 255, 255);\n  height: 0;\n  padding-bottom: 100%;\n  width: 100%;\n}\n\n.cell.has-background-danger {\n  background-color: rgba(255, 0, 0, 0.63) !important;\n}\n\n.cell.has-background-success {\n  background-color: rgba(30, 255, 0, 0.63) !important;\n}\n\n.cell:hover {\n  background-color: rgb(215, 215, 215, 0.5);\n  cursor: pointer;\n}\n\n.is-fullheight {\n  min-height: 100vh;\n}\n\n.tittle-tag > span {\n  font-family: monospace;\n  width: 135px;\n}\n\n.has-ocean {\n  background-image: url(./images/backgroundbatleships.png);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDomElements)
/* harmony export */ });
// Get the Actual DOM elements
const board = document.getElementById('player1');
const board2 = document.getElementById('player2');
const playerAction = document.getElementById('playerAction');
const enemyAction = document.getElementById('enemyAction');
const placingShip = document.getElementById('placingShip');
const alert = document.getElementById('alert');
const enemyStatusTag = document.getElementById('status').querySelector('span');

// Get the DOM elements from the player cards
const player1Card = document.getElementById('player1Card');
// Aircrafcarrier
const player1Aircraftcarrier = player1Card.querySelector('#aircraftcarrier');
const player1AircraftcarrierQuantity = player1Aircraftcarrier.querySelector('#quantity');
// Battleship
const player1Battleship = player1Card.querySelector('#battleship');
const player1BattleshipQuantity = player1Battleship.querySelector('#quantity');
// Submarine
const player1Submarine = player1Card.querySelector('#submarine');
const player1SubmarineQuantity = player1Submarine.querySelector('#quantity');
// cruiser
const player1Cruiser = player1Card.querySelector('#cruiser');
const player1CruiserQuantity = player1Cruiser.querySelector('#quantity');
// Destroyer
const player1Destroyer = player1Card.querySelector('#destroyer');
const player1DestroyerQuantity = player1Destroyer.querySelector('#quantity');
// patrol ship
const player1Boat = player1Card.querySelector('#boat');
const player1BoatQuantity = player1Boat.querySelector('#quantity');

// Get the DOM elements from the computer cards
const player2Card = document.getElementById('player2Card');
// Carrier
const player2Aircraftcarrier = player2Card.querySelector('#aircraftcarrier');
const player2AircraftcarrierQuantity = player2Aircraftcarrier.querySelector('#quantity');
// Battleship
const player2Battleship = player2Card.querySelector('#battleship');
const player2BattleshipQuantity = player2Battleship.querySelector('#quantity');
// Submarine
const player2Submarine = player2Card.querySelector('#submarine');
const player2SubmarineQuantity = player2Submarine.querySelector('#quantity');
// cruiser
const player2Cruiser = player2Card.querySelector('#cruiser');
const player2CruiserQuantity = player2Cruiser.querySelector('#quantity');
// Destroyer
const player2Destroyer = player2Card.querySelector('#destroyer');
const player2DestroyerQuantity = player2Destroyer.querySelector('#quantity');
// patrol ship
const player2Boat = player2Card.querySelector('#boat');
const player2BoatQuantity = player2Boat.querySelector('#quantity');

function getDomElements() {
  return {
    board,
    board2,
    playerAction,
    enemyAction,
    placingShip,
    alert,
    enemyStatusTag,
    player1Card,
    player1Aircraftcarrier,
    player1AircraftcarrierQuantity,
    player1Battleship,
    player1BattleshipQuantity,
    player1Submarine,
    player1SubmarineQuantity,
    player1Cruiser,
    player1CruiserQuantity,
    player1Destroyer,
    player1DestroyerQuantity,
    player1Boat,
    player1BoatQuantity,
    player2Card,
    player2Aircraftcarrier,
    player2AircraftcarrierQuantity,
    player2Battleship,
    player2BattleshipQuantity,
    player2Submarine,
    player2SubmarineQuantity,
    player2Cruiser,
    player2CruiserQuantity,
    player2Destroyer,
    player2DestroyerQuantity,
    player2Boat,
    player2BoatQuantity,
  };
}

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAlert: () => (/* binding */ createAlert),
/* harmony export */   drawGrid: () => (/* binding */ drawGrid),
/* harmony export */   showAction: () => (/* binding */ showAction),
/* harmony export */   startPlacing: () => (/* binding */ startPlacing),
/* harmony export */   updatePlacingShip: () => (/* binding */ updatePlacingShip)
/* harmony export */ });
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/ships.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");




function createAlert(type, message) {
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.innerHTML = `
    <div class="container">
      <div class="notification is-${type}">
        <button class="delete"></button>
        <p class="has-text-weight-bold">${message}</p>
      </div>
    </div>
  `;
  const button = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.querySelector('button');
  button.addEventListener('click', () => {
    button.removeEventListener('click', () => {});
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.innerHTML = '';
  });
}

function drawGrid(type = 'player') {
  const board = type === 'enemy' ? (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2 : (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board;
  board.innerHTML = '';
  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    // assign the id to each cell
    cell.setAttribute('id', 'P1');
    // assign the coordinates to each cell
    cell.setAttribute('data-x', i % 10);
    cell.setAttribute('data-y', Math.floor(i / 10));

    // delete any event listener
    cell.removeEventListener('click', () => {});
    cell.removeEventListener('mouseenter', () => {});
    cell.removeEventListener('mouseleave', () => {});
  }
}

function updateGrid(type = 'player', board) {
  const domBoard = type === 'enemy' ? (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2 : (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board;
  const { ships } = board;
  const { missedAttacks } = board;

  if (type === 'player') {
    // show the ships
    ships.forEach((ship) => {
      for (let i = 0; i < ship.length; i += 1) {
        const cell = domBoard.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`);
        cell.classList.add('ship');
        const images = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(ship.name);
        cell.style.backgroundImage = `url(${images[i]})`;
      }
    });
  }

  // update the missed attacks
  missedAttacks.forEach((coord) => {
    const cell = domBoard.querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`);
    cell.classList.add('has-background-danger');
  });

  // update the hit attacks
  ships.forEach((ship) => {
    ship.hits.forEach((coord) => {
      const cell = domBoard.querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`);
      cell.classList.add('has-background-success');
      if (type === 'enemy') {
        cell.style.backgroundImage = `url(${(0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getExplosionImage)()})`;
      }
      // if ship is sunk so add the full image
      if (ship.isSunk()) {
        cell.classList.remove('has-background-success');
        cell.classList.add('has-background-success-dark');
        const images = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(ship.name);
        const actualShipPart = ship.coordinates
          .findIndex((shipCoord) => shipCoord[0] === coord[0] && shipCoord[1] === coord[1]);
        cell.style.backgroundImage = `url(${images[actualShipPart]})`;
        // rotate to the correct orientation
        const actualOrientation = () => {
          if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
            return 'vertical';
          }
          return 'horizontal';
        };
        if (actualOrientation() === 'vertical') {
          cell.style.transform = 'rotate(90deg)';
        }
      }
    });
  });
}

function updateCard(board, type = 'Player') {
  const aircraftcarrier = board.ships.filter((ship) => ship.name === 'Aircraftcarrier');
  const battleship = board.ships.filter((ship) => ship.name === 'Battleship');
  const cruiser = board.ships.filter((ship) => ship.name === 'Cruiser');
  const submarine = board.ships.filter((ship) => ship.name === 'Submarine');
  const destroyer = board.ships.filter((ship) => ship.name === 'Destroyer');
  const boat = board.ships.filter((ship) => ship.name === 'Boat');

  let ships = [];
  if (type === 'Player') {
    ships = [
      [aircraftcarrier, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1AircraftcarrierQuantity],
      [battleship, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1BattleshipQuantity],
      [cruiser, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1CruiserQuantity],
      [submarine, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1SubmarineQuantity],
      [destroyer, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1DestroyerQuantity],
      [patroller, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1BoatQuantity],
    ];
  } else {
    ships = [
      [aircraftcarrier, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2AircraftcarrierQuantity],
      [battleship, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2BattleshipQuantity],
      [cruiser, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2CruiserQuantity],
      [submarine, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2SubmarineQuantity],
      [destroyer, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2DestroyerQuantity],
      [boat, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2BoatQuantity],
    ];
  }
  for (let i = 0; i < ships.length; i += 1) {
    if (ships[i][0].length === 0) {
      ships[i][1].innerHTML = '0';
      ships[i][1].classList.remove('has-text-success');
      ships[i][1].classList.add('has-text-danger');
    } else {
      const sunked = ships[i][0][0].isSunk();
      if (sunked) {
        ships[i][1].innerHTML = '0';
        ships[i][1].classList.remove('has-text-success');
        ships[i][1].classList.add('has-text-danger');
      } else {
        ships[i][1].innerHTML = '1';
        ships[i][1].classList.remove('has-text-danger');
        ships[i][1].classList.add('has-text-success');
      }
    }
  }
}

function updatePlacingShip(shipName) {
  if (shipName === 'none') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.add('is-hidden');
    return;
  }
  const ship = _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find((ship) => ship.name === shipName);
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.remove('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.innerHTML = `
    <img src="${ship.fullImage}" alt="${shipName}" width="${ship.size * 20}">
  `;
}

function showAction(type, message, color = 'green') {
  if (type === 'player') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-hidden');
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.innerHTML = message;
    if (color === 'green') {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-success');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-warning');
    } else {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-warning');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-success');
    }
  } else if (type === 'enemy') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-hidden');
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.innerHTML = message;
    if (color === 'green') {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-success');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-warning');
    } else {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-warning');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-success');
    }
  }
}

function checkValidMove(board, cell, orientation, shipLength, shipName) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const coords = [x, y];
  try {
    (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__.boardValidation)(shipName, shipLength, coords, orientation, board.ships);
  } catch (e) {
    return false;
  }
  return true;
}

function setShipImage(board, cell, shipImages, orientation, shipLength, shipName) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  for (let i = 0; i < shipLength; i += 1) {
    const cellToChange = orientation === 'horizontal'
      ? document.querySelector(`#P1[data-x="${x + i}"][data-y="${y}"]`)
      : document.querySelector(`#P1[data-x="${x}"][data-y="${y + i}"]`);
    if (cellToChange) {
      if (validMove) {
        cellToChange.style.transform = orientation === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)';
        cellToChange.style.backgroundImage = `url(${shipImages[i]})`;
        cellToChange.classList.add('has-background-success');
      } else {
        cellToChange.classList.add('has-background-danger');
      }
    }
  }
}

function removeShipImage(cell, orientation, shipLength) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  for (let i = 0; i < shipLength; i += 1) {
    const cellToChange = orientation === 'horizontal'
      ? document.querySelector(`#P1[data-x="${x + i}"][data-y="${y}"]`)
      : document.querySelector(`#P1[data-x="${x}"][data-y="${y + i}"]`);
    if (cellToChange) {
      if (!cellToChange.classList.contains('ship')) {
        cellToChange.style.backgroundImage = '';
      }
      cellToChange.classList.remove('has-background-success');
      cellToChange.classList.remove('has-background-danger');
    }
  }
}

function tryPlaceShip(cell, orientation, shipName, shipLength, board) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  if (validMove) {
    board.placeShip(shipName, shipLength, [x, y], orientation);
    updateCard(board);
    updateGrid('player', board);
    return true;
  }
  return false;
}

function stopPlacing() {
  const cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.querySelectorAll('.cell');

  cells.forEach((cell) => {
    if (!cell.classList.contains('ship')) {
      cell.style.backgroundImage = '';
    }
    cell.classList.remove('has-background-success');
    cell.classList.remove('has-background-danger');
    cell.replaceWith(cell.cloneNode(true));
  });
}

function createResetButton() {
  const resetButton = document.createElement('button');
  resetButton.classList.add('button', 'is-danger', 'is-large', 'is-fullwidth');
  resetButton.innerHTML = 'Reset Game';
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.appendChild(resetButton);
}

function endGame(winner) {
  createAlert('success', `${winner}`);
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-hidden');
  createResetButton();
}

function startAttacking(gameInstance) {
  const cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
      cell.addEventListener('click', () => {
        const x = parseInt(cell.getAttribute('data-x'), 10);
        const y = parseInt(cell.getAttribute('data-y'), 10);
        try {
          const attack = gameInstance.playerAttack(x, y);
          if (attack === 'hit') {
            cell.classList.add('hit');
            createAlert('success', 'You hit a ship!, keep going!');
          } else if (attack === 'doubleMiss') {
            cell.classList.add('miss');
            createAlert('none', 'You missed! also the computer missed!');
          } else if (attack === 'missAndHit') {
            cell.classList.add('miss');
            createAlert('danger', 'You missed! the computer hit a ship!');
          }
          updateGrid('enemy', gameInstance.computerBoard);
          updateGrid('player', gameInstance.playerBoard);
          updateCard(gameInstance.computerBoard, 'enemy');
          updateCard(gameInstance.playerBoard);
          if (gameInstance.gameEnd()) {
            endGame(gameInstance.gameEnd());
            gameInstance.resetGame();
          }
        } catch (e) {
          createAlert('warning', e.message);
        }
      });
    }
    cell.addEventListener('mouseenter', () => {});
    cell.addEventListener('mouseleave', () => {});
  });
}

let placing = true;

function startPlacing(gameInstance, orientation, shipName) {
  updateCard(gameInstance.computerBoard, 'enemy');

  const cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.querySelectorAll('.cell');
  const shipImages = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(shipName);
  const shipLength = shipImages.length;

  const shipTypes = ['Aircraftcarrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer', 'Boat'];
  const nextShip = shipTypes.indexOf(shipName) + 1;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'r' && placing) {
      stopPlacing();
      startPlacing(gameInstance, orientation === 'horizontal' ? 'vertical' : 'horizontal', shipName);
    }
  });

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => setShipImage(gameInstance.playerBoard, cell, shipImages, orientation, shipLength, shipName));
    cell.addEventListener('mouseleave', () => removeShipImage(cell, orientation, shipLength));
    cell.addEventListener('click', () => {
      const placed = tryPlaceShip(cell, orientation, shipName, shipLength,
        gameInstance.playerBoard);
      if (placed) {
        stopPlacing();
        if (nextShip < shipTypes.length) {
          updatePlacingShip(shipTypes[nextShip]);
          startPlacing(gameInstance, 'horizontal', shipTypes[nextShip]);
        } else {
          placing = false;
          updatePlacingShip('none');
          createAlert('success', 'All ships placed, placing computer ships');
          showAction('player', 'Waiting for computer', 'alert');
          showAction('enemy', 'Placing ships');
          // wait 3 second before placing computer ships (simulates thinking)
          setTimeout(() => {
            gameInstance.randomPlaceShips(gameInstance.computerBoard);
            updateCard(gameInstance.computerBoard, 'enemy');
            gameInstance.startGame();
            createAlert('success', 'All ships placed, Attack!');
            showAction('player', 'Attack the enemy!');
            showAction('enemy', 'Waiting for attack', 'alert');
            startAttacking(gameInstance);
          }, 3000);
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const game = {
    // properties
    actualPlayer: 1,
    gameStarted: false,
    playerBoard: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(),
    computerBoard: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(),
    // methods
    changePlayer() {
      this.actualPlayer = this.actualPlayer === 1 ? 2 : 1;
    },
    randomPlaceShips(board) {
      const ships = [
        { name: 'Aircraftcarrier', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__.createShip)({size: 5}) },
        { name: 'Battleship', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__.createShip)({size: 4}) },
        { name: 'Cruiser', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__.createShip)({size: 3}) },
        { name: 'Submarine', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__.createShip)({size: 3}) },
        { name: 'Destroyer', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__.createShip)({size: 2}) },
        { name: 'Boat', value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__.createShip)({size: 2}) },
      ];
      ships.forEach((ship) => {
        let coordinates = [];
        let orientation = '';
        let validShip = false;
        while (!validShip) {
          coordinates = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
          ];
          orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          try {
            board.placeShip(ship.name, ship.value.length, coordinates, orientation);
            validShip = true;
          } catch (error) {
            validShip = false;
          }
        }
      });
    },
    startGame() {
      if (this.playerBoard.ships.length >= 6 && this.computerBoard.ships.length >= 6) {
        this.gameStarted = true;
      } else {
        throw new Error('You need to place all the ships');
      }
    },
    checkValidAttack(x, y) {
      const coords = [x, y];
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      // check if the coordinates are valid
      if (x < 0 || x > 9 || y < 0 || y > 9) {
        throw new Error('Coordinates are not valid');
      }

      // check if the coordinates are already hit
      const misses = this.computerBoard.missedAttacks;
      const missed = misses.some((miss) => miss[0] === coords[0] && miss[1] === coords[1]);

      const hits = this.computerBoard.ships.map((ship) => ship.hits);
      const hitted = hits.some((hit) => hit.some((hitCoords) => hitCoords[0] === coords[0]
        && hitCoords[1] === coords[1]));
      if (missed || hitted) {
        throw new Error('You already attacked this coordinates');
      }
      return true;
    },
    playerAttack(x, y) {
      if (this.checkValidAttack(x, y)) {
        this.computerBoard.receiveAttack([x, y]);
        // Check if the attack hit a ship
        if (this.computerBoard.ships.some((ship) => ship.hits.some((hit) => hit[0] === x
          && hit[1] === y))) {
          return 'hit';
        }
        this.changePlayer();
        const cpuAttack = this.computerAttack();
        this.changePlayer();
        if (cpuAttack === 'miss') {
          return 'doubleMiss';
        }
      }
      return 'missAndHit';
    },
    computerAttack(hits = 0) {
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      const coordinates = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      // check if the coordinates are already hit (using .missedAttacks)
      if (this.playerBoard.missedAttacks
        .some((missedAttack) => missedAttack[0] === coordinates[0]
        && missedAttack[1] === coordinates[1])) {
        this.computerAttack();
      } else {
        this.playerBoard.receiveAttack(coordinates);
        // Check if the attack hit a ship
        if (this.playerBoard.ships.some((ship) => ship.hits.some((hit) => hit[0] === coordinates[0]
          && hit[1] === coordinates[1]))) {
          this.computerAttack(hits + 1);
          return 'hit';
        }
        this.changePlayer();
      }
      if (hits === 0) {
        return 'miss';
      }
      return hits;
    },
    gameEnd() {
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      if (this.playerBoard.allShipsSunk()) {
        return 'Computer wins';
      }
      if (this.computerBoard.allShipsSunk()) {
        return 'Player wins';
      }
      return false;
    },
    resetGame() {
      this.actualPlayer = 1;
      this.gameStarted = false;
      this.playerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
      this.computerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
    },
  };
  return game;
});

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardValidation: () => (/* binding */ boardValidation),
/* harmony export */   gameboardFactory: () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");


// function to get the coordinates of a ship
function getShipCoordinates(coordinates, length, orientation) {
  const [x, y] = coordinates;
  const shipCoordinates = [];
  for (let i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      shipCoordinates.push([x + i, y]);
    } else if (orientation === 'vertical') {
      shipCoordinates.push([x, y + i]);
    }
  }
  return shipCoordinates;
}

// function to get the ship that was hit
function getHitShip(coordinates, ships) {
  const [x, y] = coordinates;
  let shipHit = null;
  ships.forEach((ship) => {
    ship.coordinates.forEach((shipCoordinate) => {
      if (shipCoordinate[0] === x && shipCoordinate[1] === y) {
        shipHit = ship;
      }
    });
  });
  return shipHit;
}

function validateName(name) {
  // aircraftcarrier, Battleship, Cruiser, Submarine, Destroyer, boat
  if (name !== 'aircraftcarrier' && name !== 'Battleship' && name !== 'Cruiser'
  && name !== 'Submarine' && name !== 'Destroyer' && name !== 'boat') {
    throw new Error('Ship name must be aircraftcarrier, Battleship, Cruiser, Submarine, Destroyer or boat');
  }
}

function validateShipLength(length) {
  if (length < 1 || length > 5) {
    throw new Error('Ship length must be between 1 and 5');
  }
}

function validateOrientation(orientation) {
  if (orientation !== 'horizontal' && orientation !== 'vertical') {
    throw new Error('Ship orientation must be horizontal or vertical');
  }
}

function validateCoordinates(coordinates) {
  if (!Array.isArray(coordinates)) {
    throw new Error('Ship coordinates must be an array');
  }
  if (coordinates.length !== 2) {
    throw new Error('Ship coordinates must be an array of two numbers');
  }
  coordinates.forEach((coordinate) => {
    if (typeof coordinate !== 'number') {
      throw new Error('Ship coordinates must be an array of two numbers');
    }
    if (coordinate < 0 || coordinate > 9) {
      throw new Error('Ship coordinates must be between 0 and 9');
    }
  });
}

function validateOverlap(coordinates, length, orientation, ships) {
  const shipCoordinates = getShipCoordinates(coordinates, length, orientation);
  ships.forEach((ship) => {
    shipCoordinates.forEach((shipCoordinate) => {
      ship.coordinates.forEach((shipCoordinate2) => {
        if (shipCoordinate[0] === shipCoordinate2[0] && shipCoordinate[1] === shipCoordinate2[1]) {
          throw new Error('Ships cannot overlap');
        }
      });
    });
  });
}

function boardValidation(name, length, coordinates, orientation, ships) {
  validateName(name);
  validateShipLength(length);
  validateOrientation(orientation);
  validateCoordinates(coordinates);
  validateOverlap(coordinates, length, orientation, ships);
  return true;
}

// gameboard factory function
function gameboardFactory() {
  const gameboard = {
    ships: [],
    missedAttacks: [],
    placeShip(name, length, coordinates, orientation) {
      // validate ship
      if (boardValidation(name, length, coordinates, orientation, this.ships) === false) {
        return;
      }

      const ship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.createShip)({size: length, name: name}); // Ajustado para incluir el nombre del barco si es necesario
      ship.coordinates = getShipCoordinates(coordinates, length, orientation);

      // check if ship is off the board
      const shipOffBoard = ship.coordinates.some(([x, y]) => x < 0 || x > 9 || y < 0 || y > 9);
      if (shipOffBoard) {
        throw new Error('Ships cannot be placed off the board');
      }

      this.ships.push(ship);
    },
    receiveAttack(coordinates) {
      const shipHit = getHitShip(coordinates, this.ships);
      if (shipHit) {
        // Aquí necesitas asegurarte de que existe y funciona el método hit en el objeto ship
        shipHit.hit(coordinates); // Asegúrate de que el objeto ship tenga un método hit que funcione como esperas.
      } else {
        this.missedAttacks.push(coordinates);
      }
    },
    allShipsSunk() {
      // Asegúrate de que todos los barcos tienen y pueden llamar correctamente a isSunk
      return this.ships.every(ship => ship.isSunk());
    },
  };
  return gameboard;
}

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });
function createShip(shipData) {
  const ship = {
    name: shipData.name,
    size: shipData.size,
    hits: 0,
    images: shipData.images,
    isSunk() {
      return this.hits === this.size;
    },
    hit() {
      this.hits++;
    },
  };
  return ship;
}


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllShipImages: () => (/* binding */ getAllShipImages),
/* harmony export */   getExplosionImage: () => (/* binding */ getExplosionImage),
/* harmony export */   ships: () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _images_aircraftcarrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/aircraftcarrier.png */ "./src/images/aircraftcarrier.png");
/* harmony import */ var _images_aircraftcarrier1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/aircraftcarrier1.png */ "./src/images/aircraftcarrier1.png");
/* harmony import */ var _images_aircraftcarrier2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/aircraftcarrier2.png */ "./src/images/aircraftcarrier2.png");
/* harmony import */ var _images_aircraftcarrier3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/aircraftcarrier3.png */ "./src/images/aircraftcarrier3.png");
/* harmony import */ var _images_aircraftcarrier4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/aircraftcarrier4.png */ "./src/images/aircraftcarrier4.png");
/* harmony import */ var _images_aircraftcarrier5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/aircraftcarrier5.png */ "./src/images/aircraftcarrier5.png");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/battleship.png */ "./src/images/battleship.png");
/* harmony import */ var _images_battleship1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/battleship1.png */ "./src/images/battleship1.png");
/* harmony import */ var _images_battleship2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/battleship2.png */ "./src/images/battleship2.png");
/* harmony import */ var _images_battleship3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/battleship3.png */ "./src/images/battleship3.png");
/* harmony import */ var _images_battleship4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/battleship4.png */ "./src/images/battleship4.png");
/* harmony import */ var _images_cruiser_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/cruiser.png */ "./src/images/cruiser.png");
/* harmony import */ var _images_cruiser1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/cruiser1.png */ "./src/images/cruiser1.png");
/* harmony import */ var _images_cruiser2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/cruiser2.png */ "./src/images/cruiser2.png");
/* harmony import */ var _images_cruiser3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/cruiser3.png */ "./src/images/cruiser3.png");
/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/destroyer.png */ "./src/images/destroyer.png");
/* harmony import */ var _images_destroyer1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/destroyer1.png */ "./src/images/destroyer1.png");
/* harmony import */ var _images_destroyer2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/destroyer2.png */ "./src/images/destroyer2.png");
/* harmony import */ var _images_destroyer3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/destroyer3.png */ "./src/images/destroyer3.png");
/* harmony import */ var _images_submarine_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/submarine.png */ "./src/images/submarine.png");
/* harmony import */ var _images_submarine1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/submarine1.png */ "./src/images/submarine1.png");
/* harmony import */ var _images_submarine2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/submarine2.png */ "./src/images/submarine2.png");
/* harmony import */ var _images_boat_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/boat.png */ "./src/images/boat.png");
/* harmony import */ var _images_boat1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/boat1.png */ "./src/images/boat1.png");
/* harmony import */ var _images_boat2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/boat2.png */ "./src/images/boat2.png");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/explosion.png */ "./src/images/explosion.png");
// Get the images from webpack

































const aircraftcarrierShip = {
  name: 'Aircraftcarrier',
  size: 5,
  fullImage: _images_aircraftcarrier_png__WEBPACK_IMPORTED_MODULE_0__,
  images: [_images_aircraftcarrier1_png__WEBPACK_IMPORTED_MODULE_1__, _images_aircraftcarrier2_png__WEBPACK_IMPORTED_MODULE_2__, _images_aircraftcarrier3_png__WEBPACK_IMPORTED_MODULE_3__, _images_aircraftcarrier4_png__WEBPACK_IMPORTED_MODULE_4__, _images_aircraftcarrier5_png__WEBPACK_IMPORTED_MODULE_5__],
};

const battleshipShip = {
  name: 'Battleship',
  size: 4,
  fullImage: _images_battleship_png__WEBPACK_IMPORTED_MODULE_6__,
  images: [_images_battleship1_png__WEBPACK_IMPORTED_MODULE_7__, _images_battleship2_png__WEBPACK_IMPORTED_MODULE_8__, _images_battleship3_png__WEBPACK_IMPORTED_MODULE_9__, _images_battleship4_png__WEBPACK_IMPORTED_MODULE_10__],
};

const cruiserShip = {
  name: 'Cruiser',
  size: 3,
  fullImage: _images_cruiser_png__WEBPACK_IMPORTED_MODULE_11__,
  images: [_images_cruiser1_png__WEBPACK_IMPORTED_MODULE_12__, _images_cruiser2_png__WEBPACK_IMPORTED_MODULE_13__, _images_cruiser3_png__WEBPACK_IMPORTED_MODULE_14__],
};

const submarineShip = {
  name: 'Submarine',
  size: 3,
  fullImage: _images_submarine_png__WEBPACK_IMPORTED_MODULE_19__,
  images: [_images_submarine1_png__WEBPACK_IMPORTED_MODULE_20__, _images_submarine2_png__WEBPACK_IMPORTED_MODULE_21__,],
};

const destroyerShip = {
  name: 'Destroyer',
  size: 3,
  fullImage: _images_destroyer_png__WEBPACK_IMPORTED_MODULE_15__,
  images: [_images_destroyer1_png__WEBPACK_IMPORTED_MODULE_16__, _images_destroyer2_png__WEBPACK_IMPORTED_MODULE_17__, _images_destroyer3_png__WEBPACK_IMPORTED_MODULE_18__],
};

const boatShip = {
  name: 'boat',
  size: 2,
  fullImage: _images_boat_png__WEBPACK_IMPORTED_MODULE_22__,
  images: [_images_boat1_png__WEBPACK_IMPORTED_MODULE_23__, _images_boat2_png__WEBPACK_IMPORTED_MODULE_24__],
};

const ships = [
  aircraftcarrierShip,
  battleshipShip,
  cruiserShip,
  submarineShip,
  destroyerShip,
  boatShip,
];

function getAllShipImages(shipName) {
  const ship = ships.find((ship) => ship.name === shipName);
  return ship.images;
}

function getExplosionImage() {
  return _images_explosion_png__WEBPACK_IMPORTED_MODULE_25__;
}

/***/ }),

/***/ "./src/images/aircraftcarrier.png":
/*!****************************************!*\
  !*** ./src/images/aircraftcarrier.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/42cd323ecd768684ce12.png";

/***/ }),

/***/ "./src/images/aircraftcarrier1.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4977da941a83831686d0.png";

/***/ }),

/***/ "./src/images/aircraftcarrier2.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c9ae8814436d2ee4c3cf.png";

/***/ }),

/***/ "./src/images/aircraftcarrier3.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/92dcba906715609095a6.png";

/***/ }),

/***/ "./src/images/aircraftcarrier4.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e3427a45558aecfa8de1.png";

/***/ }),

/***/ "./src/images/aircraftcarrier5.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/401d67367e2a595a77ea.png";

/***/ }),

/***/ "./src/images/backgroundbatleships.png":
/*!*********************************************!*\
  !*** ./src/images/backgroundbatleships.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4ff1db63c602fe81d490.png";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/43e3cce36f2d411af47d.png";

/***/ }),

/***/ "./src/images/battleship1.png":
/*!************************************!*\
  !*** ./src/images/battleship1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4b54792a581829e50eb6.png";

/***/ }),

/***/ "./src/images/battleship2.png":
/*!************************************!*\
  !*** ./src/images/battleship2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/69bbe0fe3f8d3009c24e.png";

/***/ }),

/***/ "./src/images/battleship3.png":
/*!************************************!*\
  !*** ./src/images/battleship3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1a4f57a725937bb9a079.png";

/***/ }),

/***/ "./src/images/battleship4.png":
/*!************************************!*\
  !*** ./src/images/battleship4.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ca1509dda9231f941bf4.png";

/***/ }),

/***/ "./src/images/boat.png":
/*!*****************************!*\
  !*** ./src/images/boat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7a75e8f0674640ef527d.png";

/***/ }),

/***/ "./src/images/boat1.png":
/*!******************************!*\
  !*** ./src/images/boat1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1d4bb527c0d06f8f2c25.png";

/***/ }),

/***/ "./src/images/boat2.png":
/*!******************************!*\
  !*** ./src/images/boat2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/76415aaa60c1460be853.png";

/***/ }),

/***/ "./src/images/cruiser.png":
/*!********************************!*\
  !*** ./src/images/cruiser.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fb6771fa0ce9c671fb19.png";

/***/ }),

/***/ "./src/images/cruiser1.png":
/*!*********************************!*\
  !*** ./src/images/cruiser1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/022d210da155be93d38f.png";

/***/ }),

/***/ "./src/images/cruiser2.png":
/*!*********************************!*\
  !*** ./src/images/cruiser2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/55cd9d73cb74af59c47f.png";

/***/ }),

/***/ "./src/images/cruiser3.png":
/*!*********************************!*\
  !*** ./src/images/cruiser3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ca433ab07317158962e5.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d96461c1d77b9c5c2033.png";

/***/ }),

/***/ "./src/images/destroyer1.png":
/*!***********************************!*\
  !*** ./src/images/destroyer1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/022d210da155be93d38f.png";

/***/ }),

/***/ "./src/images/destroyer2.png":
/*!***********************************!*\
  !*** ./src/images/destroyer2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/55cd9d73cb74af59c47f.png";

/***/ }),

/***/ "./src/images/destroyer3.png":
/*!***********************************!*\
  !*** ./src/images/destroyer3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ca433ab07317158962e5.png";

/***/ }),

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/12ea9e6c44069a2e2b41.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/37abf0dba8a364dfaa31.png";

/***/ }),

/***/ "./src/images/submarine1.png":
/*!***********************************!*\
  !*** ./src/images/submarine1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c4339db7e1e7adbe146c.png";

/***/ }),

/***/ "./src/images/submarine2.png":
/*!***********************************!*\
  !*** ./src/images/submarine2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/eefe2ed8b16fa80a5384.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");




const gameInstance = (0,_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// draw the boards
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.drawGrid)();
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.drawGrid)('enemy');

// Show action to the player
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.showAction)('player', 'Place your ships');
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.showAction)('enemy', 'Waiting For Ships', 'alert');

(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacingShip)('Aircraftcarrier');

// Show the alert
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.createAlert)('success', 'Game started, place your ships (Press R to rotate)');

(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.startPlacing)(gameInstance, 'horizontal', 'Aircraftcarrier');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBT0k7QUFDSTs7QUFFN0IscUJBQXFCLG9EQUFJOztBQUV6QjtBQUNBLHdEQUFRO0FBQ1Isd0RBQVE7O0FBRVI7QUFDQSwwREFBVTtBQUNWLDBEQUFVOztBQUVWLGlFQUFpQjs7QUFFakI7QUFDQSwyREFBVzs7QUFFWCw0REFBWSxnRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kYmF0bGVzaGlwcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmNlbGwge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYzJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYzKSAhaW1wb3J0YW50O1xufVxuXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMjU1LCAwLCAwLjYzKSAhaW1wb3J0YW50O1xufVxuXG4uY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pcy1mdWxsaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi50aXR0bGUtdGFnID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMzVweDtcbn1cblxuLmhhcy1vY2VhbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5REFBd0Q7QUFDMURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MyUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNlbGwuaGFzLWJhY2tncm91bmQtZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDI1NSwgMCwgMC42MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjE1LCAyMTUsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pcy1mdWxsaGVpZ2h0IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udGl0dGxlLXRhZyA+IHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAxMzVweDtcXG59XFxuXFxuLmhhcy1vY2VhbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmFja2dyb3VuZGJhdGxlc2hpcHMucG5nKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBHZXQgdGhlIEFjdHVhbCBET00gZWxlbWVudHNcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEnKTtcbmNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyJyk7XG5jb25zdCBwbGF5ZXJBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQWN0aW9uJyk7XG5jb25zdCBlbmVteUFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteUFjdGlvbicpO1xuY29uc3QgcGxhY2luZ1NoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2luZ1NoaXAnKTtcbmNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0Jyk7XG5jb25zdCBlbmVteVN0YXR1c1RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIHBsYXllciBjYXJkc1xuY29uc3QgcGxheWVyMUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMUNhcmQnKTtcbi8vIEFpcmNyYWZjYXJyaWVyXG5jb25zdCBwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2FpcmNyYWZ0Y2FycmllcicpO1xuY29uc3QgcGxheWVyMUFpcmNyYWZ0Y2FycmllclF1YW50aXR5ID0gcGxheWVyMUFpcmNyYWZ0Y2Fycmllci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIEJhdHRsZXNoaXBcbmNvbnN0IHBsYXllcjFCYXR0bGVzaGlwID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbmNvbnN0IHBsYXllcjFCYXR0bGVzaGlwUXVhbnRpdHkgPSBwbGF5ZXIxQmF0dGxlc2hpcC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIFN1Ym1hcmluZVxuY29uc3QgcGxheWVyMVN1Ym1hcmluZSA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtYXJpbmUnKTtcbmNvbnN0IHBsYXllcjFTdWJtYXJpbmVRdWFudGl0eSA9IHBsYXllcjFTdWJtYXJpbmUucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBjcnVpc2VyXG5jb25zdCBwbGF5ZXIxQ3J1aXNlciA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjcnVpc2VyJyk7XG5jb25zdCBwbGF5ZXIxQ3J1aXNlclF1YW50aXR5ID0gcGxheWVyMUNydWlzZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBEZXN0cm95ZXJcbmNvbnN0IHBsYXllcjFEZXN0cm95ZXIgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG5jb25zdCBwbGF5ZXIxRGVzdHJveWVyUXVhbnRpdHkgPSBwbGF5ZXIxRGVzdHJveWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gcGF0cm9sIHNoaXBcbmNvbnN0IHBsYXllcjFCb2F0ID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2JvYXQnKTtcbmNvbnN0IHBsYXllcjFCb2F0UXVhbnRpdHkgPSBwbGF5ZXIxQm9hdC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcblxuLy8gR2V0IHRoZSBET00gZWxlbWVudHMgZnJvbSB0aGUgY29tcHV0ZXIgY2FyZHNcbmNvbnN0IHBsYXllcjJDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjJDYXJkJyk7XG4vLyBDYXJyaWVyXG5jb25zdCBwbGF5ZXIyQWlyY3JhZnRjYXJyaWVyID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2FpcmNyYWZ0Y2FycmllcicpO1xuY29uc3QgcGxheWVyMkFpcmNyYWZ0Y2FycmllclF1YW50aXR5ID0gcGxheWVyMkFpcmNyYWZ0Y2Fycmllci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIEJhdHRsZXNoaXBcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwUXVhbnRpdHkgPSBwbGF5ZXIyQmF0dGxlc2hpcC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIFN1Ym1hcmluZVxuY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtYXJpbmUnKTtcbmNvbnN0IHBsYXllcjJTdWJtYXJpbmVRdWFudGl0eSA9IHBsYXllcjJTdWJtYXJpbmUucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBjcnVpc2VyXG5jb25zdCBwbGF5ZXIyQ3J1aXNlciA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjcnVpc2VyJyk7XG5jb25zdCBwbGF5ZXIyQ3J1aXNlclF1YW50aXR5ID0gcGxheWVyMkNydWlzZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBEZXN0cm95ZXJcbmNvbnN0IHBsYXllcjJEZXN0cm95ZXIgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG5jb25zdCBwbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHkgPSBwbGF5ZXIyRGVzdHJveWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gcGF0cm9sIHNoaXBcbmNvbnN0IHBsYXllcjJCb2F0ID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2JvYXQnKTtcbmNvbnN0IHBsYXllcjJCb2F0UXVhbnRpdHkgPSBwbGF5ZXIyQm9hdC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9tRWxlbWVudHMoKSB7XG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgYm9hcmQyLFxuICAgIHBsYXllckFjdGlvbixcbiAgICBlbmVteUFjdGlvbixcbiAgICBwbGFjaW5nU2hpcCxcbiAgICBhbGVydCxcbiAgICBlbmVteVN0YXR1c1RhZyxcbiAgICBwbGF5ZXIxQ2FyZCxcbiAgICBwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyLFxuICAgIHBsYXllcjFBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIxQmF0dGxlc2hpcCxcbiAgICBwbGF5ZXIxQmF0dGxlc2hpcFF1YW50aXR5LFxuICAgIHBsYXllcjFTdWJtYXJpbmUsXG4gICAgcGxheWVyMVN1Ym1hcmluZVF1YW50aXR5LFxuICAgIHBsYXllcjFDcnVpc2VyLFxuICAgIHBsYXllcjFDcnVpc2VyUXVhbnRpdHksXG4gICAgcGxheWVyMURlc3Ryb3llcixcbiAgICBwbGF5ZXIxRGVzdHJveWVyUXVhbnRpdHksXG4gICAgcGxheWVyMUJvYXQsXG4gICAgcGxheWVyMUJvYXRRdWFudGl0eSxcbiAgICBwbGF5ZXIyQ2FyZCxcbiAgICBwbGF5ZXIyQWlyY3JhZnRjYXJyaWVyLFxuICAgIHBsYXllcjJBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcCxcbiAgICBwbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5LFxuICAgIHBsYXllcjJTdWJtYXJpbmUsXG4gICAgcGxheWVyMlN1Ym1hcmluZVF1YW50aXR5LFxuICAgIHBsYXllcjJDcnVpc2VyLFxuICAgIHBsYXllcjJDcnVpc2VyUXVhbnRpdHksXG4gICAgcGxheWVyMkRlc3Ryb3llcixcbiAgICBwbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHksXG4gICAgcGxheWVyMkJvYXQsXG4gICAgcGxheWVyMkJvYXRRdWFudGl0eSxcbiAgfTtcbn0iLCJpbXBvcnQgeyBzaGlwcywgZ2V0QWxsU2hpcEltYWdlcywgZ2V0RXhwbG9zaW9uSW1hZ2UgfSBmcm9tICcuL3NoaXBzLmpzJztcbmltcG9ydCBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGJvYXJkVmFsaWRhdGlvbiB9IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbGVydCh0eXBlLCBtZXNzYWdlKSB7XG4gIGRvbUVsZW1lbnRzKCkuYWxlcnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24gaXMtJHt0eXBlfVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+PC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj4ke21lc3NhZ2V9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvbUVsZW1lbnRzKCkuYWxlcnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG4gICAgZG9tRWxlbWVudHMoKS5hbGVydC5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3R3JpZCh0eXBlID0gJ3BsYXllcicpIHtcbiAgY29uc3QgYm9hcmQgPSB0eXBlID09PSAnZW5lbXknID8gZG9tRWxlbWVudHMoKS5ib2FyZDIgOiBkb21FbGVtZW50cygpLmJvYXJkO1xuICBib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAvLyBhc3NpZ24gdGhlIGlkIHRvIGVhY2ggY2VsbFxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsICdQMScpO1xuICAgIC8vIGFzc2lnbiB0aGUgY29vcmRpbmF0ZXMgdG8gZWFjaCBjZWxsXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGkgJSAxMCk7XG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIE1hdGguZmxvb3IoaSAvIDEwKSk7XG5cbiAgICAvLyBkZWxldGUgYW55IGV2ZW50IGxpc3RlbmVyXG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge30pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyaWQodHlwZSA9ICdwbGF5ZXInLCBib2FyZCkge1xuICBjb25zdCBkb21Cb2FyZCA9IHR5cGUgPT09ICdlbmVteScgPyBkb21FbGVtZW50cygpLmJvYXJkMiA6IGRvbUVsZW1lbnRzKCkuYm9hcmQ7XG4gIGNvbnN0IHsgc2hpcHMgfSA9IGJvYXJkO1xuICBjb25zdCB7IG1pc3NlZEF0dGFja3MgfSA9IGJvYXJkO1xuXG4gIGlmICh0eXBlID09PSAncGxheWVyJykge1xuICAgIC8vIHNob3cgdGhlIHNoaXBzXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb21Cb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtzaGlwLmNvb3JkaW5hdGVzW2ldWzBdfVwiXVtkYXRhLXk9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMV19XCJdYCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBnZXRBbGxTaGlwSW1hZ2VzKHNoaXAubmFtZSk7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlc1tpXX0pYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0aGUgbWlzc2VkIGF0dGFja3NcbiAgbWlzc2VkQXR0YWNrcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb21Cb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtjb29yZFswXX1cIl1bZGF0YS15PVwiJHtjb29yZFsxXX1cIl1gKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicpO1xuICB9KTtcblxuICAvLyB1cGRhdGUgdGhlIGhpdCBhdHRhY2tzXG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmhpdHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb21Cb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtjb29yZFswXX1cIl1bZGF0YS15PVwiJHtjb29yZFsxXX1cIl1gKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgaWYgKHR5cGUgPT09ICdlbmVteScpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Z2V0RXhwbG9zaW9uSW1hZ2UoKX0pYDtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHNoaXAgaXMgc3VuayBzbyBhZGQgdGhlIGZ1bGwgaW1hZ2VcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MtZGFyaycpO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBnZXRBbGxTaGlwSW1hZ2VzKHNoaXAubmFtZSk7XG4gICAgICAgIGNvbnN0IGFjdHVhbFNoaXBQYXJ0ID0gc2hpcC5jb29yZGluYXRlc1xuICAgICAgICAgIC5maW5kSW5kZXgoKHNoaXBDb29yZCkgPT4gc2hpcENvb3JkWzBdID09PSBjb29yZFswXSAmJiBzaGlwQ29vcmRbMV0gPT09IGNvb3JkWzFdKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VzW2FjdHVhbFNoaXBQYXJ0XX0pYDtcbiAgICAgICAgLy8gcm90YXRlIHRvIHRoZSBjb3JyZWN0IG9yaWVudGF0aW9uXG4gICAgICAgIGNvbnN0IGFjdHVhbE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzWzBdWzBdID09PSBzaGlwLmNvb3JkaW5hdGVzWzFdWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFjdHVhbE9yaWVudGF0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FyZChib2FyZCwgdHlwZSA9ICdQbGF5ZXInKSB7XG4gIGNvbnN0IGFpcmNyYWZ0Y2FycmllciA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQWlyY3JhZnRjYXJyaWVyJyk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgY3J1aXNlciA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQ3J1aXNlcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ1N1Ym1hcmluZScpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBib2F0ID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdCb2F0Jyk7XG5cbiAgbGV0IHNoaXBzID0gW107XG4gIGlmICh0eXBlID09PSAnUGxheWVyJykge1xuICAgIHNoaXBzID0gW1xuICAgICAgW2FpcmNyYWZ0Y2FycmllciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHldLFxuICAgICAgW2JhdHRsZXNoaXAsIGRvbUVsZW1lbnRzKCkucGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eV0sXG4gICAgICBbY3J1aXNlciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQ3J1aXNlclF1YW50aXR5XSxcbiAgICAgIFtzdWJtYXJpbmUsIGRvbUVsZW1lbnRzKCkucGxheWVyMVN1Ym1hcmluZVF1YW50aXR5XSxcbiAgICAgIFtkZXN0cm95ZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMURlc3Ryb3llclF1YW50aXR5XSxcbiAgICAgIFtwYXRyb2xsZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMUJvYXRRdWFudGl0eV0sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIFthaXJjcmFmdGNhcnJpZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkFpcmNyYWZ0Y2FycmllclF1YW50aXR5XSxcbiAgICAgIFtiYXR0bGVzaGlwLCBkb21FbGVtZW50cygpLnBsYXllcjJCYXR0bGVzaGlwUXVhbnRpdHldLFxuICAgICAgW2NydWlzZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkNydWlzZXJRdWFudGl0eV0sXG4gICAgICBbc3VibWFyaW5lLCBkb21FbGVtZW50cygpLnBsYXllcjJTdWJtYXJpbmVRdWFudGl0eV0sXG4gICAgICBbZGVzdHJveWVyLCBkb21FbGVtZW50cygpLnBsYXllcjJEZXN0cm95ZXJRdWFudGl0eV0sXG4gICAgICBbYm9hdCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQm9hdFF1YW50aXR5XSxcbiAgICBdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc2hpcHNbaV1bMF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMCc7XG4gICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdGV4dC1zdWNjZXNzJyk7XG4gICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vua2VkID0gc2hpcHNbaV1bMF1bMF0uaXNTdW5rKCk7XG4gICAgICBpZiAoc3Vua2VkKSB7XG4gICAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtc3VjY2VzcycpO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcxJztcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5hZGQoJ2hhcy10ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYWNpbmdTaGlwKHNoaXBOYW1lKSB7XG4gIGlmIChzaGlwTmFtZSA9PT0gJ25vbmUnKSB7XG4gICAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz1cIiR7c2hpcC5mdWxsSW1hZ2V9XCIgYWx0PVwiJHtzaGlwTmFtZX1cIiB3aWR0aD1cIiR7c2hpcC5zaXplICogMjB9XCI+XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWN0aW9uKHR5cGUsIG1lc3NhZ2UsIGNvbG9yID0gJ2dyZWVuJykge1xuICBpZiAodHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgIGlmIChjb2xvciA9PT0gJ2dyZWVuJykge1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlbmVteScpIHtcbiAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBpZiAoY29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IGNvb3JkcyA9IFt4LCB5XTtcbiAgdHJ5IHtcbiAgICBib2FyZFZhbGlkYXRpb24oc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGNvb3Jkcywgb3JpZW50YXRpb24sIGJvYXJkLnNoaXBzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0U2hpcEltYWdlKGJvYXJkLCBjZWxsLCBzaGlwSW1hZ2VzLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IHZhbGlkTW92ZSA9IGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGxUb0NoYW5nZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApO1xuICAgIGlmIChjZWxsVG9DaGFuZ2UpIHtcbiAgICAgIGlmICh2YWxpZE1vdmUpIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzaGlwSW1hZ2VzW2ldfSlgO1xuICAgICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwSW1hZ2UoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbFRvQ2hhbmdlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4ICsgaX1cIl1bZGF0YS15PVwiJHt5fVwiXWApXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYCk7XG4gICAgaWYgKGNlbGxUb0NoYW5nZSkge1xuICAgICAgaWYgKCFjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgfVxuICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGxhY2VTaGlwKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSwgc2hpcExlbmd0aCwgYm9hcmQpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IHZhbGlkTW92ZSA9IGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICBpZiAodmFsaWRNb3ZlKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBbeCwgeV0sIG9yaWVudGF0aW9uKTtcbiAgICB1cGRhdGVDYXJkKGJvYXJkKTtcbiAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBib2FyZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdG9wUGxhY2luZygpIHtcbiAgY29uc3QgY2VsbHMgPSBkb21FbGVtZW50cygpLmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICB9XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICBjZWxsLnJlcGxhY2VXaXRoKGNlbGwuY2xvbmVOb2RlKHRydWUpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc2V0QnV0dG9uKCkge1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtZGFuZ2VyJywgJ2lzLWxhcmdlJywgJ2lzLWZ1bGx3aWR0aCcpO1xuICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXQgR2FtZSc7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG4gIGRvbUVsZW1lbnRzKCkuYWxlcnQuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBjcmVhdGVBbGVydCgnc3VjY2VzcycsIGAke3dpbm5lcn1gKTtcbiAgZG9tRWxlbWVudHMoKS5ib2FyZC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5ib2FyZDIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBjcmVhdGVSZXNldEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBzdGFydEF0dGFja2luZyhnYW1lSW5zdGFuY2UpIHtcbiAgY29uc3QgY2VsbHMgPSBkb21FbGVtZW50cygpLmJvYXJkMi5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGF0dGFjayA9IGdhbWVJbnN0YW5jZS5wbGF5ZXJBdHRhY2soeCwgeSk7XG4gICAgICAgICAgaWYgKGF0dGFjayA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnc3VjY2VzcycsICdZb3UgaGl0IGEgc2hpcCEsIGtlZXAgZ29pbmchJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdkb3VibGVNaXNzJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnbm9uZScsICdZb3UgbWlzc2VkISBhbHNvIHRoZSBjb21wdXRlciBtaXNzZWQhJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdtaXNzQW5kSGl0Jykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnZGFuZ2VyJywgJ1lvdSBtaXNzZWQhIHRoZSBjb21wdXRlciBoaXQgYSBzaGlwIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVHcmlkKCdlbmVteScsIGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkKTtcbiAgICAgICAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBnYW1lSW5zdGFuY2UucGxheWVyQm9hcmQpO1xuICAgICAgICAgIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQsICdlbmVteScpO1xuICAgICAgICAgIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgICAgICBpZiAoZ2FtZUluc3RhbmNlLmdhbWVFbmQoKSkge1xuICAgICAgICAgICAgZW5kR2FtZShnYW1lSW5zdGFuY2UuZ2FtZUVuZCgpKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5yZXNldEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjcmVhdGVBbGVydCgnd2FybmluZycsIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge30pO1xuICB9KTtcbn1cblxubGV0IHBsYWNpbmcgPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgb3JpZW50YXRpb24sIHNoaXBOYW1lKSB7XG4gIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQsICdlbmVteScpO1xuXG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBjb25zdCBzaGlwSW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwTmFtZSk7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwSW1hZ2VzLmxlbmd0aDtcblxuICBjb25zdCBzaGlwVHlwZXMgPSBbJ0FpcmNyYWZ0Y2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llcicsICdCb2F0J107XG4gIGNvbnN0IG5leHRTaGlwID0gc2hpcFR5cGVzLmluZGV4T2Yoc2hpcE5hbWUpICsgMTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdyJyAmJiBwbGFjaW5nKSB7XG4gICAgICBzdG9wUGxhY2luZygpO1xuICAgICAgc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsIHNoaXBOYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBzZXRTaGlwSW1hZ2UoZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkLCBjZWxsLCBzaGlwSW1hZ2VzLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiByZW1vdmVTaGlwSW1hZ2UoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2VkID0gdHJ5UGxhY2VTaGlwKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSwgc2hpcExlbmd0aCxcbiAgICAgICAgZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgc3RvcFBsYWNpbmcoKTtcbiAgICAgICAgaWYgKG5leHRTaGlwIDwgc2hpcFR5cGVzLmxlbmd0aCkge1xuICAgICAgICAgIHVwZGF0ZVBsYWNpbmdTaGlwKHNoaXBUeXBlc1tuZXh0U2hpcF0pO1xuICAgICAgICAgIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsICdob3Jpem9udGFsJywgc2hpcFR5cGVzW25leHRTaGlwXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICAgIHVwZGF0ZVBsYWNpbmdTaGlwKCdub25lJyk7XG4gICAgICAgICAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnQWxsIHNoaXBzIHBsYWNlZCwgcGxhY2luZyBjb21wdXRlciBzaGlwcycpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ3BsYXllcicsICdXYWl0aW5nIGZvciBjb21wdXRlcicsICdhbGVydCcpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1BsYWNpbmcgc2hpcHMnKTtcbiAgICAgICAgICAvLyB3YWl0IDMgc2Vjb25kIGJlZm9yZSBwbGFjaW5nIGNvbXB1dGVyIHNoaXBzIChzaW11bGF0ZXMgdGhpbmtpbmcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmFuZG9tUGxhY2VTaGlwcyhnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0FsbCBzaGlwcyBwbGFjZWQsIEF0dGFjayEnKTtcbiAgICAgICAgICAgIHNob3dBY3Rpb24oJ3BsYXllcicsICdBdHRhY2sgdGhlIGVuZW15IScpO1xuICAgICAgICAgICAgc2hvd0FjdGlvbignZW5lbXknLCAnV2FpdGluZyBmb3IgYXR0YWNrJywgJ2FsZXJ0Jyk7XG4gICAgICAgICAgICBzdGFydEF0dGFja2luZyhnYW1lSW5zdGFuY2UpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vc2hpcEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSB7XG4gICAgLy8gcHJvcGVydGllc1xuICAgIGFjdHVhbFBsYXllcjogMSxcbiAgICBnYW1lU3RhcnRlZDogZmFsc2UsXG4gICAgcGxheWVyQm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBjb21wdXRlckJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgLy8gbWV0aG9kc1xuICAgIGNoYW5nZVBsYXllcigpIHtcbiAgICAgIHRoaXMuYWN0dWFsUGxheWVyID0gdGhpcy5hY3R1YWxQbGF5ZXIgPT09IDEgPyAyIDogMTtcbiAgICB9LFxuICAgIHJhbmRvbVBsYWNlU2hpcHMoYm9hcmQpIHtcbiAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICB7IG5hbWU6ICdBaXJjcmFmdGNhcnJpZXInLCB2YWx1ZTogY3JlYXRlU2hpcCh7c2l6ZTogNX0pIH0sXG4gICAgICAgIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCB2YWx1ZTogY3JlYXRlU2hpcCh7c2l6ZTogNH0pIH0sXG4gICAgICAgIHsgbmFtZTogJ0NydWlzZXInLCB2YWx1ZTogY3JlYXRlU2hpcCh7c2l6ZTogM30pIH0sXG4gICAgICAgIHsgbmFtZTogJ1N1Ym1hcmluZScsIHZhbHVlOiBjcmVhdGVTaGlwKHtzaXplOiAzfSkgfSxcbiAgICAgICAgeyBuYW1lOiAnRGVzdHJveWVyJywgdmFsdWU6IGNyZWF0ZVNoaXAoe3NpemU6IDJ9KSB9LFxuICAgICAgICB7IG5hbWU6ICdCb2F0JywgdmFsdWU6IGNyZWF0ZVNoaXAoe3NpemU6IDJ9KSB9LFxuICAgICAgXTtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9ICcnO1xuICAgICAgICBsZXQgdmFsaWRTaGlwID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghdmFsaWRTaGlwKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgXTtcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCBzaGlwLnZhbHVlLmxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHZhbGlkU2hpcCA9IHRydWU7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhbGlkU2hpcCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGggPj0gNiAmJiB0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMubGVuZ3RoID49IDYpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHBsYWNlIGFsbCB0aGUgc2hpcHMnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrVmFsaWRBdHRhY2soeCwgeSkge1xuICAgICAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgc3RhcnRlZFxuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb29yZGluYXRlcyBhcmUgdmFsaWRcbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIGFyZSBub3QgdmFsaWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBhbHJlYWR5IGhpdFxuICAgICAgY29uc3QgbWlzc2VzID0gdGhpcy5jb21wdXRlckJvYXJkLm1pc3NlZEF0dGFja3M7XG4gICAgICBjb25zdCBtaXNzZWQgPSBtaXNzZXMuc29tZSgobWlzcykgPT4gbWlzc1swXSA9PT0gY29vcmRzWzBdICYmIG1pc3NbMV0gPT09IGNvb3Jkc1sxXSk7XG5cbiAgICAgIGNvbnN0IGhpdHMgPSB0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMubWFwKChzaGlwKSA9PiBzaGlwLmhpdHMpO1xuICAgICAgY29uc3QgaGl0dGVkID0gaGl0cy5zb21lKChoaXQpID0+IGhpdC5zb21lKChoaXRDb29yZHMpID0+IGhpdENvb3Jkc1swXSA9PT0gY29vcmRzWzBdXG4gICAgICAgICYmIGhpdENvb3Jkc1sxXSA9PT0gY29vcmRzWzFdKSk7XG4gICAgICBpZiAobWlzc2VkIHx8IGhpdHRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgY29vcmRpbmF0ZXMnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcGxheWVyQXR0YWNrKHgsIHkpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrVmFsaWRBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMuc29tZSgoc2hpcCkgPT4gc2hpcC5oaXRzLnNvbWUoKGhpdCkgPT4gaGl0WzBdID09PSB4XG4gICAgICAgICAgJiYgaGl0WzFdID09PSB5KSkpIHtcbiAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgY29uc3QgY3B1QXR0YWNrID0gdGhpcy5jb21wdXRlckF0dGFjaygpO1xuICAgICAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xuICAgICAgICBpZiAoY3B1QXR0YWNrID09PSAnbWlzcycpIHtcbiAgICAgICAgICByZXR1cm4gJ2RvdWJsZU1pc3MnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ21pc3NBbmRIaXQnO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soaGl0cyA9IDApIHtcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHN0YXJ0IHRoZSBnYW1lJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICBdO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBhbHJlYWR5IGhpdCAodXNpbmcgLm1pc3NlZEF0dGFja3MpXG4gICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2tzXG4gICAgICAgIC5zb21lKChtaXNzZWRBdHRhY2spID0+IG1pc3NlZEF0dGFja1swXSA9PT0gY29vcmRpbmF0ZXNbMF1cbiAgICAgICAgJiYgbWlzc2VkQXR0YWNrWzFdID09PSBjb29yZGluYXRlc1sxXSkpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLnNvbWUoKHNoaXApID0+IHNoaXAuaGl0cy5zb21lKChoaXQpID0+IGhpdFswXSA9PT0gY29vcmRpbmF0ZXNbMF1cbiAgICAgICAgICAmJiBoaXRbMV0gPT09IGNvb3JkaW5hdGVzWzFdKSkpIHtcbiAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKGhpdHMgKyAxKTtcbiAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChoaXRzID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGl0cztcbiAgICB9LFxuICAgIGdhbWVFbmQoKSB7XG4gICAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBzdGFydGVkXG4gICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZScpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuICdDb21wdXRlciB3aW5zJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuICdQbGF5ZXIgd2lucyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZXNldEdhbWUoKSB7XG4gICAgICB0aGlzLmFjdHVhbFBsYXllciA9IDE7XG4gICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnBsYXllckJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgICAgdGhpcy5jb21wdXRlckJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBnYW1lO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgY29vcmRpbmF0ZXMgb2YgYSBzaGlwXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFt4ICsgaSwgeV0pO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFt4LCB5ICsgaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xufVxuXG4vLyBmdW5jdGlvbiB0byBnZXQgdGhlIHNoaXAgdGhhdCB3YXMgaGl0XG5mdW5jdGlvbiBnZXRIaXRTaGlwKGNvb3JkaW5hdGVzLCBzaGlwcykge1xuICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgbGV0IHNoaXBIaXQgPSBudWxsO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgaWYgKHNoaXBDb29yZGluYXRlWzBdID09PSB4ICYmIHNoaXBDb29yZGluYXRlWzFdID09PSB5KSB7XG4gICAgICAgIHNoaXBIaXQgPSBzaGlwO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHNoaXBIaXQ7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZShuYW1lKSB7XG4gIC8vIGFpcmNyYWZ0Y2FycmllciwgQmF0dGxlc2hpcCwgQ3J1aXNlciwgU3VibWFyaW5lLCBEZXN0cm95ZXIsIGJvYXRcbiAgaWYgKG5hbWUgIT09ICdhaXJjcmFmdGNhcnJpZXInICYmIG5hbWUgIT09ICdCYXR0bGVzaGlwJyAmJiBuYW1lICE9PSAnQ3J1aXNlcidcbiAgJiYgbmFtZSAhPT0gJ1N1Ym1hcmluZScgJiYgbmFtZSAhPT0gJ0Rlc3Ryb3llcicgJiYgbmFtZSAhPT0gJ2JvYXQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIG5hbWUgbXVzdCBiZSBhaXJjcmFmdGNhcnJpZXIsIEJhdHRsZXNoaXAsIENydWlzZXIsIFN1Ym1hcmluZSwgRGVzdHJveWVyIG9yIGJvYXQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNoaXBMZW5ndGgobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPCAxIHx8IGxlbmd0aCA+IDUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgbGVuZ3RoIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICBpZiAob3JpZW50YXRpb24gIT09ICdob3Jpem9udGFsJyAmJiBvcmllbnRhdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBvcmllbnRhdGlvbiBtdXN0IGJlIGhvcml6b250YWwgb3IgdmVydGljYWwnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShjb29yZGluYXRlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgY29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9XG4gIGlmIChjb29yZGluYXRlcy5sZW5ndGggIT09IDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgY29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gbnVtYmVycycpO1xuICB9XG4gIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAodHlwZW9mIGNvb3JkaW5hdGUgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgY29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gbnVtYmVycycpO1xuICAgIH1cbiAgICBpZiAoY29vcmRpbmF0ZSA8IDAgfHwgY29vcmRpbmF0ZSA+IDkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgOScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3ZlcmxhcChjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbiwgc2hpcHMpIHtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZTIpID0+IHtcbiAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlWzBdID09PSBzaGlwQ29vcmRpbmF0ZTJbMF0gJiYgc2hpcENvb3JkaW5hdGVbMV0gPT09IHNoaXBDb29yZGluYXRlMlsxXSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IG92ZXJsYXAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9hcmRWYWxpZGF0aW9uKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uLCBzaGlwcykge1xuICB2YWxpZGF0ZU5hbWUobmFtZSk7XG4gIHZhbGlkYXRlU2hpcExlbmd0aChsZW5ndGgpO1xuICB2YWxpZGF0ZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcbiAgdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gIHZhbGlkYXRlT3ZlcmxhcChjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbiwgc2hpcHMpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZ2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSB7XG4gICAgc2hpcHM6IFtdLFxuICAgIG1pc3NlZEF0dGFja3M6IFtdLFxuICAgIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgLy8gdmFsaWRhdGUgc2hpcFxuICAgICAgaWYgKGJvYXJkVmFsaWRhdGlvbihuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbiwgdGhpcy5zaGlwcykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAoe3NpemU6IGxlbmd0aCwgbmFtZTogbmFtZX0pOyAvLyBBanVzdGFkbyBwYXJhIGluY2x1aXIgZWwgbm9tYnJlIGRlbCBiYXJjbyBzaSBlcyBuZWNlc2FyaW9cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgICAvLyBjaGVjayBpZiBzaGlwIGlzIG9mZiB0aGUgYm9hcmRcbiAgICAgIGNvbnN0IHNoaXBPZmZCb2FyZCA9IHNoaXAuY29vcmRpbmF0ZXMuc29tZSgoW3gsIHldKSA9PiB4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSk7XG4gICAgICBpZiAoc2hpcE9mZkJvYXJkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcHMgY2Fubm90IGJlIHBsYWNlZCBvZmYgdGhlIGJvYXJkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHNoaXBIaXQgPSBnZXRIaXRTaGlwKGNvb3JkaW5hdGVzLCB0aGlzLnNoaXBzKTtcbiAgICAgIGlmIChzaGlwSGl0KSB7XG4gICAgICAgIC8vIEFxdcOtIG5lY2VzaXRhcyBhc2VndXJhcnRlIGRlIHF1ZSBleGlzdGUgeSBmdW5jaW9uYSBlbCBtw6l0b2RvIGhpdCBlbiBlbCBvYmpldG8gc2hpcFxuICAgICAgICBzaGlwSGl0LmhpdChjb29yZGluYXRlcyk7IC8vIEFzZWfDunJhdGUgZGUgcXVlIGVsIG9iamV0byBzaGlwIHRlbmdhIHVuIG3DqXRvZG8gaGl0IHF1ZSBmdW5jaW9uZSBjb21vIGVzcGVyYXMuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSB0b2RvcyBsb3MgYmFyY29zIHRpZW5lbiB5IHB1ZWRlbiBsbGFtYXIgY29ycmVjdGFtZW50ZSBhIGlzU3Vua1xuICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwKHNoaXBEYXRhKSB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbmFtZTogc2hpcERhdGEubmFtZSxcbiAgICBzaXplOiBzaGlwRGF0YS5zaXplLFxuICAgIGhpdHM6IDAsXG4gICAgaW1hZ2VzOiBzaGlwRGF0YS5pbWFnZXMsXG4gICAgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5zaXplO1xuICAgIH0sXG4gICAgaGl0KCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIHNoaXA7XG59XG4iLCIvLyBHZXQgdGhlIGltYWdlcyBmcm9tIHdlYnBhY2tcbmltcG9ydCBhaXJjcmFmdGNhcnJpZXIgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMSBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIxLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMiBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIyLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMyBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIzLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyNCBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXI0LnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyNSBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXI1LnBuZyc7XG5cbmltcG9ydCBiYXR0bGVzaGlwIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwMS5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAyLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcDMucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwNCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwNC5wbmcnO1xuXG5pbXBvcnQgY3J1aXNlciBmcm9tICcuL2ltYWdlcy9jcnVpc2VyLnBuZyc7XG5pbXBvcnQgY3J1aXNlcjEgZnJvbSAnLi9pbWFnZXMvY3J1aXNlcjEucG5nJztcbmltcG9ydCBjcnVpc2VyMiBmcm9tICcuL2ltYWdlcy9jcnVpc2VyMi5wbmcnO1xuaW1wb3J0IGNydWlzZXIzIGZyb20gJy4vaW1hZ2VzL2NydWlzZXIzLnBuZyc7XG5cbmltcG9ydCBkZXN0cm95ZXIgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMSBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIxLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMiBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIyLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMyBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIzLnBuZyc7XG5cbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi9pbWFnZXMvc3VibWFyaW5lLnBuZyc7XG5pbXBvcnQgc3VibWFyaW5lMSBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUxLnBuZyc7XG5pbXBvcnQgc3VibWFyaW5lMiBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUyLnBuZyc7XG5cbmltcG9ydCBib2F0IGZyb20gJy4vaW1hZ2VzL2JvYXQucG5nJztcbmltcG9ydCBib2F0MSBmcm9tICcuL2ltYWdlcy9ib2F0MS5wbmcnO1xuaW1wb3J0IGJvYXQyIGZyb20gJy4vaW1hZ2VzL2JvYXQyLnBuZyc7XG5cbmltcG9ydCBleHBsb3Npb24gZnJvbSAnLi9pbWFnZXMvZXhwbG9zaW9uLnBuZyc7XG5cbmNvbnN0IGFpcmNyYWZ0Y2FycmllclNoaXAgPSB7XG4gIG5hbWU6ICdBaXJjcmFmdGNhcnJpZXInLFxuICBzaXplOiA1LFxuICBmdWxsSW1hZ2U6IGFpcmNyYWZ0Y2FycmllcixcbiAgaW1hZ2VzOiBbYWlyY3JhZnRjYXJyaWVyMSwgYWlyY3JhZnRjYXJyaWVyMiwgYWlyY3JhZnRjYXJyaWVyMywgYWlyY3JhZnRjYXJyaWVyNCwgYWlyY3JhZnRjYXJyaWVyNV0sXG59O1xuXG5jb25zdCBiYXR0bGVzaGlwU2hpcCA9IHtcbiAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICBzaXplOiA0LFxuICBmdWxsSW1hZ2U6IGJhdHRsZXNoaXAsXG4gIGltYWdlczogW2JhdHRsZXNoaXAxLCBiYXR0bGVzaGlwMiwgYmF0dGxlc2hpcDMsIGJhdHRsZXNoaXA0XSxcbn07XG5cbmNvbnN0IGNydWlzZXJTaGlwID0ge1xuICBuYW1lOiAnQ3J1aXNlcicsXG4gIHNpemU6IDMsXG4gIGZ1bGxJbWFnZTogY3J1aXNlcixcbiAgaW1hZ2VzOiBbY3J1aXNlcjEsIGNydWlzZXIyLCBjcnVpc2VyM10sXG59O1xuXG5jb25zdCBzdWJtYXJpbmVTaGlwID0ge1xuICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgc2l6ZTogMyxcbiAgZnVsbEltYWdlOiBzdWJtYXJpbmUsXG4gIGltYWdlczogW3N1Ym1hcmluZTEsIHN1Ym1hcmluZTIsXSxcbn07XG5cbmNvbnN0IGRlc3Ryb3llclNoaXAgPSB7XG4gIG5hbWU6ICdEZXN0cm95ZXInLFxuICBzaXplOiAzLFxuICBmdWxsSW1hZ2U6IGRlc3Ryb3llcixcbiAgaW1hZ2VzOiBbZGVzdHJveWVyMSwgZGVzdHJveWVyMiwgZGVzdHJveWVyM10sXG59O1xuXG5jb25zdCBib2F0U2hpcCA9IHtcbiAgbmFtZTogJ2JvYXQnLFxuICBzaXplOiAyLFxuICBmdWxsSW1hZ2U6IGJvYXQsXG4gIGltYWdlczogW2JvYXQxLCBib2F0Ml0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSBbXG4gIGFpcmNyYWZ0Y2FycmllclNoaXAsXG4gIGJhdHRsZXNoaXBTaGlwLFxuICBjcnVpc2VyU2hpcCxcbiAgc3VibWFyaW5lU2hpcCxcbiAgZGVzdHJveWVyU2hpcCxcbiAgYm9hdFNoaXAsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU2hpcEltYWdlcyhzaGlwTmFtZSkge1xuICBjb25zdCBzaGlwID0gc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSk7XG4gIHJldHVybiBzaGlwLmltYWdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGxvc2lvbkltYWdlKCkge1xuICByZXR1cm4gZXhwbG9zaW9uO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBkcmF3R3JpZCxcbiAgc2hvd0FjdGlvbixcbiAgdXBkYXRlUGxhY2luZ1NoaXAsXG4gIGNyZWF0ZUFsZXJ0LFxuICBzdGFydFBsYWNpbmcsXG59IGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCBnYW1lSW5zdGFuY2UgPSBnYW1lKCk7XG5cbi8vIGRyYXcgdGhlIGJvYXJkc1xuZHJhd0dyaWQoKTtcbmRyYXdHcmlkKCdlbmVteScpO1xuXG4vLyBTaG93IGFjdGlvbiB0byB0aGUgcGxheWVyXG5zaG93QWN0aW9uKCdwbGF5ZXInLCAnUGxhY2UgeW91ciBzaGlwcycpO1xuc2hvd0FjdGlvbignZW5lbXknLCAnV2FpdGluZyBGb3IgU2hpcHMnLCAnYWxlcnQnKTtcblxudXBkYXRlUGxhY2luZ1NoaXAoJ0FpcmNyYWZ0Y2FycmllcicpO1xuXG4vLyBTaG93IHRoZSBhbGVydFxuY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnR2FtZSBzdGFydGVkLCBwbGFjZSB5b3VyIHNoaXBzIChQcmVzcyBSIHRvIHJvdGF0ZSknKTtcblxuc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgJ2hvcml6b250YWwnLCAnQWlyY3JhZnRjYXJyaWVyJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9