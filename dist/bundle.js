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
/* harmony import */ var _src_images_aircraftcarrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/aircraftcarrier.png */ "./src/images/aircraftcarrier.png");
/* harmony import */ var _src_images_aircraftcarrier1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/aircraftcarrier1.png */ "./src/images/aircraftcarrier1.png");
/* harmony import */ var _src_images_aircraftcarrier2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/aircraftcarrier2.png */ "./src/images/aircraftcarrier2.png");
/* harmony import */ var _src_images_aircraftcarrier3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/aircraftcarrier3.png */ "./src/images/aircraftcarrier3.png");
/* harmony import */ var _src_images_aircraftcarrier4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/aircraftcarrier4.png */ "./src/images/aircraftcarrier4.png");
/* harmony import */ var _src_images_aircraftcarrier5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/aircraftcarrier5.png */ "./src/images/aircraftcarrier5.png");
/* harmony import */ var _src_images_battleship_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/battleship.png */ "./src/images/battleship.png");
/* harmony import */ var _src_images_battleship1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/battleship1.png */ "./src/images/battleship1.png");
/* harmony import */ var _src_images_battleship2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/battleship2.png */ "./src/images/battleship2.png");
/* harmony import */ var _src_images_battleship3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/images/battleship3.png */ "./src/images/battleship3.png");
/* harmony import */ var _src_images_battleship4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/images/battleship4.png */ "./src/images/battleship4.png");
/* harmony import */ var _src_images_cruiser_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/images/cruiser.png */ "./src/images/cruiser.png");
/* harmony import */ var _src_images_cruiser1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/images/cruiser1.png */ "./src/images/cruiser1.png");
/* harmony import */ var _src_images_cruiser2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/images/cruiser2.png */ "./src/images/cruiser2.png");
/* harmony import */ var _src_images_cruiser3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/images/cruiser3.png */ "./src/images/cruiser3.png");
/* harmony import */ var _src_images_destroyer_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/images/destroyer.png */ "./src/images/destroyer.png");
/* harmony import */ var _src_images_destroyer1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/images/destroyer1.png */ "./src/images/destroyer1.png");
/* harmony import */ var _src_images_destroyer2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/images/destroyer2.png */ "./src/images/destroyer2.png");
/* harmony import */ var _src_images_destroyer3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/images/destroyer3.png */ "./src/images/destroyer3.png");
/* harmony import */ var _src_images_submarine_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/images/submarine.png */ "./src/images/submarine.png");
/* harmony import */ var _src_images_submarine1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/images/submarine1.png */ "./src/images/submarine1.png");
/* harmony import */ var _src_images_submarine2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/images/submarine2.png */ "./src/images/submarine2.png");
/* harmony import */ var _src_images_boat_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/images/boat.png */ "./src/images/boat.png");
/* harmony import */ var _src_images_boat1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/images/boat1.png */ "./src/images/boat1.png");
/* harmony import */ var _src_images_boat2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/images/boat2.png */ "./src/images/boat2.png");
/* harmony import */ var _src_images_explosion_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/images/explosion.png */ "./src/images/explosion.png");
// Get the images from webpack

































const aircraftcarrierShip = {
  name: 'Aircraftcarrier',
  size: 5,
  fullImage: _src_images_aircraftcarrier_png__WEBPACK_IMPORTED_MODULE_0__,
  images: [_src_images_aircraftcarrier1_png__WEBPACK_IMPORTED_MODULE_1__, _src_images_aircraftcarrier2_png__WEBPACK_IMPORTED_MODULE_2__, _src_images_aircraftcarrier3_png__WEBPACK_IMPORTED_MODULE_3__, _src_images_aircraftcarrier4_png__WEBPACK_IMPORTED_MODULE_4__, _src_images_aircraftcarrier5_png__WEBPACK_IMPORTED_MODULE_5__],
};

const battleshipShip = {
  name: 'Battleship',
  size: 4,
  fullImage: _src_images_battleship_png__WEBPACK_IMPORTED_MODULE_6__,
  images: [_src_images_battleship1_png__WEBPACK_IMPORTED_MODULE_7__, _src_images_battleship2_png__WEBPACK_IMPORTED_MODULE_8__, _src_images_battleship3_png__WEBPACK_IMPORTED_MODULE_9__, _src_images_battleship4_png__WEBPACK_IMPORTED_MODULE_10__],
};

const cruiserShip = {
  name: 'Cruiser',
  size: 3,
  fullImage: _src_images_cruiser_png__WEBPACK_IMPORTED_MODULE_11__,
  images: [_src_images_cruiser1_png__WEBPACK_IMPORTED_MODULE_12__, _src_images_cruiser2_png__WEBPACK_IMPORTED_MODULE_13__, _src_images_cruiser3_png__WEBPACK_IMPORTED_MODULE_14__],
};

const submarineShip = {
  name: 'Submarine',
  size: 3,
  fullImage: _src_images_submarine_png__WEBPACK_IMPORTED_MODULE_19__,
  images: [_src_images_submarine1_png__WEBPACK_IMPORTED_MODULE_20__, _src_images_submarine2_png__WEBPACK_IMPORTED_MODULE_21__,],
};

const destroyerShip = {
  name: 'Destroyer',
  size: 3,
  fullImage: _src_images_destroyer_png__WEBPACK_IMPORTED_MODULE_15__,
  images: [_src_images_destroyer1_png__WEBPACK_IMPORTED_MODULE_16__, _src_images_destroyer2_png__WEBPACK_IMPORTED_MODULE_17__, _src_images_destroyer3_png__WEBPACK_IMPORTED_MODULE_18__],
};

const boatShip = {
  name: 'boat',
  size: 2,
  fullImage: _src_images_boat_png__WEBPACK_IMPORTED_MODULE_22__,
  images: [_src_images_boat1_png__WEBPACK_IMPORTED_MODULE_23__, _src_images_boat2_png__WEBPACK_IMPORTED_MODULE_24__],
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
  return _src_images_explosion_png__WEBPACK_IMPORTED_MODULE_25__;
}

/***/ }),

/***/ "./src/images/aircraftcarrier.png":
/*!****************************************!*\
  !*** ./src/images/aircraftcarrier.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42cd323ecd768684ce12.png";

/***/ }),

/***/ "./src/images/aircraftcarrier1.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4977da941a83831686d0.png";

/***/ }),

/***/ "./src/images/aircraftcarrier2.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9ae8814436d2ee4c3cf.png";

/***/ }),

/***/ "./src/images/aircraftcarrier3.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92dcba906715609095a6.png";

/***/ }),

/***/ "./src/images/aircraftcarrier4.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3427a45558aecfa8de1.png";

/***/ }),

/***/ "./src/images/aircraftcarrier5.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "401d67367e2a595a77ea.png";

/***/ }),

/***/ "./src/images/backgroundbatleships.png":
/*!*********************************************!*\
  !*** ./src/images/backgroundbatleships.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ff1db63c602fe81d490.png";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43e3cce36f2d411af47d.png";

/***/ }),

/***/ "./src/images/battleship1.png":
/*!************************************!*\
  !*** ./src/images/battleship1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b54792a581829e50eb6.png";

/***/ }),

/***/ "./src/images/battleship2.png":
/*!************************************!*\
  !*** ./src/images/battleship2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69bbe0fe3f8d3009c24e.png";

/***/ }),

/***/ "./src/images/battleship3.png":
/*!************************************!*\
  !*** ./src/images/battleship3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a4f57a725937bb9a079.png";

/***/ }),

/***/ "./src/images/battleship4.png":
/*!************************************!*\
  !*** ./src/images/battleship4.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca1509dda9231f941bf4.png";

/***/ }),

/***/ "./src/images/boat.png":
/*!*****************************!*\
  !*** ./src/images/boat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a75e8f0674640ef527d.png";

/***/ }),

/***/ "./src/images/boat1.png":
/*!******************************!*\
  !*** ./src/images/boat1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d4bb527c0d06f8f2c25.png";

/***/ }),

/***/ "./src/images/boat2.png":
/*!******************************!*\
  !*** ./src/images/boat2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76415aaa60c1460be853.png";

/***/ }),

/***/ "./src/images/cruiser.png":
/*!********************************!*\
  !*** ./src/images/cruiser.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb6771fa0ce9c671fb19.png";

/***/ }),

/***/ "./src/images/cruiser1.png":
/*!*********************************!*\
  !*** ./src/images/cruiser1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "022d210da155be93d38f.png";

/***/ }),

/***/ "./src/images/cruiser2.png":
/*!*********************************!*\
  !*** ./src/images/cruiser2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55cd9d73cb74af59c47f.png";

/***/ }),

/***/ "./src/images/cruiser3.png":
/*!*********************************!*\
  !*** ./src/images/cruiser3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca433ab07317158962e5.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d96461c1d77b9c5c2033.png";

/***/ }),

/***/ "./src/images/destroyer1.png":
/*!***********************************!*\
  !*** ./src/images/destroyer1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "022d210da155be93d38f.png";

/***/ }),

/***/ "./src/images/destroyer2.png":
/*!***********************************!*\
  !*** ./src/images/destroyer2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55cd9d73cb74af59c47f.png";

/***/ }),

/***/ "./src/images/destroyer3.png":
/*!***********************************!*\
  !*** ./src/images/destroyer3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca433ab07317158962e5.png";

/***/ }),

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12ea9e6c44069a2e2b41.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37abf0dba8a364dfaa31.png";

/***/ }),

/***/ "./src/images/submarine1.png":
/*!***********************************!*\
  !*** ./src/images/submarine1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4339db7e1e7adbe146c.png";

/***/ }),

/***/ "./src/images/submarine2.png":
/*!***********************************!*\
  !*** ./src/images/submarine2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eefe2ed8b16fa80a5384.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQU9JO0FBQ0k7O0FBRTdCLHFCQUFxQixvREFBSTs7QUFFekI7QUFDQSx3REFBUTtBQUNSLHdEQUFROztBQUVSO0FBQ0EsMERBQVU7QUFDViwwREFBVTs7QUFFVixpRUFBaUI7O0FBRWpCO0FBQ0EsMkRBQVc7O0FBRVgsNERBQVksZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZGJhdGxlc2hpcHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MyUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42MykgIWltcG9ydGFudDtcbn1cblxuLmNlbGwuaGFzLWJhY2tncm91bmQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDI1NSwgMCwgMC42MykgIWltcG9ydGFudDtcbn1cblxuLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSwgMC41KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXMtZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4udGl0dGxlLXRhZyA+IHNwYW4ge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICB3aWR0aDogMTM1cHg7XG59XG5cbi5oYXMtb2NlYW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseURBQXdEO0FBQzFEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjMlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmNlbGwuaGFzLWJhY2tncm91bmQtc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAyNTUsIDAsIDAuNjMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1LCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXMtZnVsbGhlaWdodCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRpdHRsZS10YWcgPiBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICB3aWR0aDogMTM1cHg7XFxufVxcblxcbi5oYXMtb2NlYW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JhY2tncm91bmRiYXRsZXNoaXBzLnBuZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gR2V0IHRoZSBBY3R1YWwgRE9NIGVsZW1lbnRzXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxJyk7XG5jb25zdCBib2FyZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMicpO1xuY29uc3QgcGxheWVyQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckFjdGlvbicpO1xuY29uc3QgZW5lbXlBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXlBY3Rpb24nKTtcbmNvbnN0IHBsYWNpbmdTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNpbmdTaGlwJyk7XG5jb25zdCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpO1xuY29uc3QgZW5lbXlTdGF0dXNUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwbGF5ZXIgY2FyZHNcbmNvbnN0IHBsYXllcjFDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjFDYXJkJyk7XG4vLyBBaXJjcmFmY2FycmllclxuY29uc3QgcGxheWVyMUFpcmNyYWZ0Y2FycmllciA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNhaXJjcmFmdGNhcnJpZXInKTtcbmNvbnN0IHBsYXllcjFBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSA9IHBsYXllcjFBaXJjcmFmdGNhcnJpZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBCYXR0bGVzaGlwXG5jb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG5jb25zdCBwbGF5ZXIxQmF0dGxlc2hpcFF1YW50aXR5ID0gcGxheWVyMUJhdHRsZXNoaXAucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBTdWJtYXJpbmVcbmNvbnN0IHBsYXllcjFTdWJtYXJpbmUgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG5jb25zdCBwbGF5ZXIxU3VibWFyaW5lUXVhbnRpdHkgPSBwbGF5ZXIxU3VibWFyaW5lLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gY3J1aXNlclxuY29uc3QgcGxheWVyMUNydWlzZXIgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY3J1aXNlcicpO1xuY29uc3QgcGxheWVyMUNydWlzZXJRdWFudGl0eSA9IHBsYXllcjFDcnVpc2VyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gRGVzdHJveWVyXG5jb25zdCBwbGF5ZXIxRGVzdHJveWVyID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuY29uc3QgcGxheWVyMURlc3Ryb3llclF1YW50aXR5ID0gcGxheWVyMURlc3Ryb3llci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIHBhdHJvbCBzaGlwXG5jb25zdCBwbGF5ZXIxQm9hdCA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNib2F0Jyk7XG5jb25zdCBwbGF5ZXIxQm9hdFF1YW50aXR5ID0gcGxheWVyMUJvYXQucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIGNvbXB1dGVyIGNhcmRzXG5jb25zdCBwbGF5ZXIyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyQ2FyZCcpO1xuLy8gQ2FycmllclxuY29uc3QgcGxheWVyMkFpcmNyYWZ0Y2FycmllciA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNhaXJjcmFmdGNhcnJpZXInKTtcbmNvbnN0IHBsYXllcjJBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSA9IHBsYXllcjJBaXJjcmFmdGNhcnJpZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBCYXR0bGVzaGlwXG5jb25zdCBwbGF5ZXIyQmF0dGxlc2hpcCA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG5jb25zdCBwbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5ID0gcGxheWVyMkJhdHRsZXNoaXAucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBTdWJtYXJpbmVcbmNvbnN0IHBsYXllcjJTdWJtYXJpbmUgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG5jb25zdCBwbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHkgPSBwbGF5ZXIyU3VibWFyaW5lLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gY3J1aXNlclxuY29uc3QgcGxheWVyMkNydWlzZXIgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY3J1aXNlcicpO1xuY29uc3QgcGxheWVyMkNydWlzZXJRdWFudGl0eSA9IHBsYXllcjJDcnVpc2VyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gRGVzdHJveWVyXG5jb25zdCBwbGF5ZXIyRGVzdHJveWVyID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuY29uc3QgcGxheWVyMkRlc3Ryb3llclF1YW50aXR5ID0gcGxheWVyMkRlc3Ryb3llci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIHBhdHJvbCBzaGlwXG5jb25zdCBwbGF5ZXIyQm9hdCA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNib2F0Jyk7XG5jb25zdCBwbGF5ZXIyQm9hdFF1YW50aXR5ID0gcGxheWVyMkJvYXQucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvbUVsZW1lbnRzKCkge1xuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGJvYXJkMixcbiAgICBwbGF5ZXJBY3Rpb24sXG4gICAgZW5lbXlBY3Rpb24sXG4gICAgcGxhY2luZ1NoaXAsXG4gICAgYWxlcnQsXG4gICAgZW5lbXlTdGF0dXNUYWcsXG4gICAgcGxheWVyMUNhcmQsXG4gICAgcGxheWVyMUFpcmNyYWZ0Y2FycmllcixcbiAgICBwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHksXG4gICAgcGxheWVyMUJhdHRsZXNoaXAsXG4gICAgcGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIxU3VibWFyaW5lLFxuICAgIHBsYXllcjFTdWJtYXJpbmVRdWFudGl0eSxcbiAgICBwbGF5ZXIxQ3J1aXNlcixcbiAgICBwbGF5ZXIxQ3J1aXNlclF1YW50aXR5LFxuICAgIHBsYXllcjFEZXN0cm95ZXIsXG4gICAgcGxheWVyMURlc3Ryb3llclF1YW50aXR5LFxuICAgIHBsYXllcjFCb2F0LFxuICAgIHBsYXllcjFCb2F0UXVhbnRpdHksXG4gICAgcGxheWVyMkNhcmQsXG4gICAgcGxheWVyMkFpcmNyYWZ0Y2FycmllcixcbiAgICBwbGF5ZXIyQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHksXG4gICAgcGxheWVyMkJhdHRsZXNoaXAsXG4gICAgcGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIyU3VibWFyaW5lLFxuICAgIHBsYXllcjJTdWJtYXJpbmVRdWFudGl0eSxcbiAgICBwbGF5ZXIyQ3J1aXNlcixcbiAgICBwbGF5ZXIyQ3J1aXNlclF1YW50aXR5LFxuICAgIHBsYXllcjJEZXN0cm95ZXIsXG4gICAgcGxheWVyMkRlc3Ryb3llclF1YW50aXR5LFxuICAgIHBsYXllcjJCb2F0LFxuICAgIHBsYXllcjJCb2F0UXVhbnRpdHksXG4gIH07XG59IiwiaW1wb3J0IHsgc2hpcHMsIGdldEFsbFNoaXBJbWFnZXMsIGdldEV4cGxvc2lvbkltYWdlIH0gZnJvbSAnLi9zaGlwcy5qcyc7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBib2FyZFZhbGlkYXRpb24gfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxlcnQodHlwZSwgbWVzc2FnZSkge1xuICBkb21FbGVtZW50cygpLmFsZXJ0LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uIGlzLSR7dHlwZX1cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+JHttZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBjb25zdCBidXR0b24gPSBkb21FbGVtZW50cygpLmFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICAgIGRvbUVsZW1lbnRzKCkuYWxlcnQuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dyaWQodHlwZSA9ICdwbGF5ZXInKSB7XG4gIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ2VuZW15JyA/IGRvbUVsZW1lbnRzKCkuYm9hcmQyIDogZG9tRWxlbWVudHMoKS5ib2FyZDtcbiAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgLy8gYXNzaWduIHRoZSBpZCB0byBlYWNoIGNlbGxcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnUDEnKTtcbiAgICAvLyBhc3NpZ24gdGhlIGNvb3JkaW5hdGVzIHRvIGVhY2ggY2VsbFxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBpICUgMTApO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBNYXRoLmZsb29yKGkgLyAxMCkpO1xuXG4gICAgLy8gZGVsZXRlIGFueSBldmVudCBsaXN0ZW5lclxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVHcmlkKHR5cGUgPSAncGxheWVyJywgYm9hcmQpIHtcbiAgY29uc3QgZG9tQm9hcmQgPSB0eXBlID09PSAnZW5lbXknID8gZG9tRWxlbWVudHMoKS5ib2FyZDIgOiBkb21FbGVtZW50cygpLmJvYXJkO1xuICBjb25zdCB7IHNoaXBzIH0gPSBib2FyZDtcbiAgY29uc3QgeyBtaXNzZWRBdHRhY2tzIH0gPSBib2FyZDtcblxuICBpZiAodHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICAvLyBzaG93IHRoZSBzaGlwc1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVswXX1cIl1bZGF0YS15PVwiJHtzaGlwLmNvb3JkaW5hdGVzW2ldWzFdfVwiXWApO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwLm5hbWUpO1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXNbaV19KWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGhlIG1pc3NlZCBhdHRhY2tzXG4gIG1pc3NlZEF0dGFja3MuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYCk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHRoZSBoaXQgYXR0YWNrc1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5oaXRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYCk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIGlmICh0eXBlID09PSAnZW5lbXknKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2dldEV4cGxvc2lvbkltYWdlKCl9KWA7XG4gICAgICB9XG4gICAgICAvLyBpZiBzaGlwIGlzIHN1bmsgc28gYWRkIHRoZSBmdWxsIGltYWdlXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzLWRhcmsnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwLm5hbWUpO1xuICAgICAgICBjb25zdCBhY3R1YWxTaGlwUGFydCA9IHNoaXAuY29vcmRpbmF0ZXNcbiAgICAgICAgICAuZmluZEluZGV4KChzaGlwQ29vcmQpID0+IHNoaXBDb29yZFswXSA9PT0gY29vcmRbMF0gJiYgc2hpcENvb3JkWzFdID09PSBjb29yZFsxXSk7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlc1thY3R1YWxTaGlwUGFydF19KWA7XG4gICAgICAgIC8vIHJvdGF0ZSB0byB0aGUgY29ycmVjdCBvcmllbnRhdGlvblxuICAgICAgICBjb25zdCBhY3R1YWxPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoc2hpcC5jb29yZGluYXRlc1swXVswXSA9PT0gc2hpcC5jb29yZGluYXRlc1sxXVswXSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhY3R1YWxPcmllbnRhdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmQoYm9hcmQsIHR5cGUgPSAnUGxheWVyJykge1xuICBjb25zdCBhaXJjcmFmdGNhcnJpZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0FpcmNyYWZ0Y2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdCYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGNydWlzZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0NydWlzZXInKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdTdWJtYXJpbmUnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdEZXN0cm95ZXInKTtcbiAgY29uc3QgYm9hdCA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQm9hdCcpO1xuXG4gIGxldCBzaGlwcyA9IFtdO1xuICBpZiAodHlwZSA9PT0gJ1BsYXllcicpIHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIFthaXJjcmFmdGNhcnJpZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMUFpcmNyYWZ0Y2FycmllclF1YW50aXR5XSxcbiAgICAgIFtiYXR0bGVzaGlwLCBkb21FbGVtZW50cygpLnBsYXllcjFCYXR0bGVzaGlwUXVhbnRpdHldLFxuICAgICAgW2NydWlzZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMUNydWlzZXJRdWFudGl0eV0sXG4gICAgICBbc3VibWFyaW5lLCBkb21FbGVtZW50cygpLnBsYXllcjFTdWJtYXJpbmVRdWFudGl0eV0sXG4gICAgICBbZGVzdHJveWVyLCBkb21FbGVtZW50cygpLnBsYXllcjFEZXN0cm95ZXJRdWFudGl0eV0sXG4gICAgICBbcGF0cm9sbGVyLCBkb21FbGVtZW50cygpLnBsYXllcjFCb2F0UXVhbnRpdHldLFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgc2hpcHMgPSBbXG4gICAgICBbYWlyY3JhZnRjYXJyaWVyLCBkb21FbGVtZW50cygpLnBsYXllcjJBaXJjcmFmdGNhcnJpZXJRdWFudGl0eV0sXG4gICAgICBbYmF0dGxlc2hpcCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5XSxcbiAgICAgIFtjcnVpc2VyLCBkb21FbGVtZW50cygpLnBsYXllcjJDcnVpc2VyUXVhbnRpdHldLFxuICAgICAgW3N1Ym1hcmluZSwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHldLFxuICAgICAgW2Rlc3Ryb3llciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHldLFxuICAgICAgW2JvYXQsIGRvbUVsZW1lbnRzKCkucGxheWVyMkJvYXRRdWFudGl0eV0sXG4gICAgXTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHNoaXBzW2ldWzBdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2hpcHNbaV1bMV0uaW5uZXJIVE1MID0gJzAnO1xuICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtc3VjY2VzcycpO1xuICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LmFkZCgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1bmtlZCA9IHNoaXBzW2ldWzBdWzBdLmlzU3VuaygpO1xuICAgICAgaWYgKHN1bmtlZCkge1xuICAgICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy10ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LmFkZCgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMSc7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy10ZXh0LWRhbmdlcicpO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1zdWNjZXNzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGFjaW5nU2hpcChzaGlwTmFtZSkge1xuICBpZiAoc2hpcE5hbWUgPT09ICdub25lJykge1xuICAgIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBOYW1lKTtcbiAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCIke3NoaXAuZnVsbEltYWdlfVwiIGFsdD1cIiR7c2hpcE5hbWV9XCIgd2lkdGg9XCIke3NoaXAuc2l6ZSAqIDIwfVwiPlxuICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjdGlvbih0eXBlLCBtZXNzYWdlLCBjb2xvciA9ICdncmVlbicpIHtcbiAgaWYgKHR5cGUgPT09ICdwbGF5ZXInKSB7XG4gICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBpZiAoY29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXdhcm5pbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZW5lbXknKSB7XG4gICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgaWYgKGNvbG9yID09PSAnZ3JlZW4nKSB7XG4gICAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkTW92ZShib2FyZCwgY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBjb25zdCBjb29yZHMgPSBbeCwgeV07XG4gIHRyeSB7XG4gICAgYm9hcmRWYWxpZGF0aW9uKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBjb29yZHMsIG9yaWVudGF0aW9uLCBib2FyZC5zaGlwcyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldFNoaXBJbWFnZShib2FyZCwgY2VsbCwgc2hpcEltYWdlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBjb25zdCB2YWxpZE1vdmUgPSBjaGVja1ZhbGlkTW92ZShib2FyZCwgY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsVG9DaGFuZ2UgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3ggKyBpfVwiXVtkYXRhLXk9XCIke3l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5ICsgaX1cIl1gKTtcbiAgICBpZiAoY2VsbFRvQ2hhbmdlKSB7XG4gICAgICBpZiAodmFsaWRNb3ZlKSB7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2hpcEltYWdlc1tpXX0pYDtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcEltYWdlKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGxUb0NoYW5nZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApO1xuICAgIGlmIChjZWxsVG9DaGFuZ2UpIHtcbiAgICAgIGlmICghY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgIH1cbiAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBsYWNlU2hpcChjZWxsLCBvcmllbnRhdGlvbiwgc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGJvYXJkKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICBjb25zdCB2YWxpZE1vdmUgPSBjaGVja1ZhbGlkTW92ZShib2FyZCwgY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcbiAgaWYgKHZhbGlkTW92ZSkge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCwgW3gsIHldLCBvcmllbnRhdGlvbik7XG4gICAgdXBkYXRlQ2FyZChib2FyZCk7XG4gICAgdXBkYXRlR3JpZCgncGxheWVyJywgYm9hcmQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RvcFBsYWNpbmcoKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgfVxuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gICAgY2VsbC5yZXBsYWNlV2l0aChjZWxsLmNsb25lTm9kZSh0cnVlKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXNldEJ1dHRvbigpIHtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2lzLWRhbmdlcicsICdpcy1sYXJnZScsICdpcy1mdWxsd2lkdGgnKTtcbiAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gJ1Jlc2V0IEdhbWUnO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuICBkb21FbGVtZW50cygpLmFsZXJ0LmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCBgJHt3aW5uZXJ9YCk7XG4gIGRvbUVsZW1lbnRzKCkuYm9hcmQuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkuYm9hcmQyLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgY3JlYXRlUmVzZXRCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRBdHRhY2tpbmcoZ2FtZUluc3RhbmNlKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZDIucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpICYmICFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhdHRhY2sgPSBnYW1lSW5zdGFuY2UucGxheWVyQXR0YWNrKHgsIHkpO1xuICAgICAgICAgIGlmIChhdHRhY2sgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnWW91IGhpdCBhIHNoaXAhLCBrZWVwIGdvaW5nIScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrID09PSAnZG91YmxlTWlzcycpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ25vbmUnLCAnWW91IG1pc3NlZCEgYWxzbyB0aGUgY29tcHV0ZXIgbWlzc2VkIScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrID09PSAnbWlzc0FuZEhpdCcpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgY3JlYXRlQWxlcnQoJ2RhbmdlcicsICdZb3UgbWlzc2VkISB0aGUgY29tcHV0ZXIgaGl0IGEgc2hpcCEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlR3JpZCgnZW5lbXknLCBnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgaWYgKGdhbWVJbnN0YW5jZS5nYW1lRW5kKCkpIHtcbiAgICAgICAgICAgIGVuZEdhbWUoZ2FtZUluc3RhbmNlLmdhbWVFbmQoKSk7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmVzZXRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY3JlYXRlQWxlcnQoJ3dhcm5pbmcnLCBlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcbiAgfSk7XG59XG5cbmxldCBwbGFjaW5nID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSkge1xuICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcblxuICBjb25zdCBjZWxscyA9IGRvbUVsZW1lbnRzKCkuYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgY29uc3Qgc2hpcEltYWdlcyA9IGdldEFsbFNoaXBJbWFnZXMoc2hpcE5hbWUpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcEltYWdlcy5sZW5ndGg7XG5cbiAgY29uc3Qgc2hpcFR5cGVzID0gWydBaXJjcmFmdGNhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdDcnVpc2VyJywgJ1N1Ym1hcmluZScsICdEZXN0cm95ZXInLCAnQm9hdCddO1xuICBjb25zdCBuZXh0U2hpcCA9IHNoaXBUeXBlcy5pbmRleE9mKHNoaXBOYW1lKSArIDE7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAncicgJiYgcGxhY2luZykge1xuICAgICAgc3RvcFBsYWNpbmcoKTtcbiAgICAgIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLCBzaGlwTmFtZSk7XG4gICAgfVxuICB9KTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gc2V0U2hpcEltYWdlKGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCwgY2VsbCwgc2hpcEltYWdlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gcmVtb3ZlU2hpcEltYWdlKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlZCA9IHRyeVBsYWNlU2hpcChjZWxsLCBvcmllbnRhdGlvbiwgc2hpcE5hbWUsIHNoaXBMZW5ndGgsXG4gICAgICAgIGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCk7XG4gICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIHN0b3BQbGFjaW5nKCk7XG4gICAgICAgIGlmIChuZXh0U2hpcCA8IHNoaXBUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICB1cGRhdGVQbGFjaW5nU2hpcChzaGlwVHlwZXNbbmV4dFNoaXBdKTtcbiAgICAgICAgICBzdGFydFBsYWNpbmcoZ2FtZUluc3RhbmNlLCAnaG9yaXpvbnRhbCcsIHNoaXBUeXBlc1tuZXh0U2hpcF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVQbGFjaW5nU2hpcCgnbm9uZScpO1xuICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0FsbCBzaGlwcyBwbGFjZWQsIHBsYWNpbmcgY29tcHV0ZXIgc2hpcHMnKTtcbiAgICAgICAgICBzaG93QWN0aW9uKCdwbGF5ZXInLCAnV2FpdGluZyBmb3IgY29tcHV0ZXInLCAnYWxlcnQnKTtcbiAgICAgICAgICBzaG93QWN0aW9uKCdlbmVteScsICdQbGFjaW5nIHNoaXBzJyk7XG4gICAgICAgICAgLy8gd2FpdCAzIHNlY29uZCBiZWZvcmUgcGxhY2luZyBjb21wdXRlciBzaGlwcyAoc2ltdWxhdGVzIHRoaW5raW5nKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZUluc3RhbmNlLnJhbmRvbVBsYWNlU2hpcHMoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQpO1xuICAgICAgICAgICAgdXBkYXRlQ2FyZChnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCwgJ2VuZW15Jyk7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2Uuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnc3VjY2VzcycsICdBbGwgc2hpcHMgcGxhY2VkLCBBdHRhY2shJyk7XG4gICAgICAgICAgICBzaG93QWN0aW9uKCdwbGF5ZXInLCAnQXR0YWNrIHRoZSBlbmVteSEnKTtcbiAgICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1dhaXRpbmcgZm9yIGF0dGFjaycsICdhbGVydCcpO1xuICAgICAgICAgICAgc3RhcnRBdHRhY2tpbmcoZ2FtZUluc3RhbmNlKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5LmpzJztcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBnYW1lID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBhY3R1YWxQbGF5ZXI6IDEsXG4gICAgZ2FtZVN0YXJ0ZWQ6IGZhbHNlLFxuICAgIHBsYXllckJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgY29tcHV0ZXJCb2FyZDogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjaGFuZ2VQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmFjdHVhbFBsYXllciA9IHRoaXMuYWN0dWFsUGxheWVyID09PSAxID8gMiA6IDE7XG4gICAgfSxcbiAgICByYW5kb21QbGFjZVNoaXBzKGJvYXJkKSB7XG4gICAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgeyBuYW1lOiAnQWlyY3JhZnRjYXJyaWVyJywgdmFsdWU6IGNyZWF0ZVNoaXAoe3NpemU6IDV9KSB9LFxuICAgICAgICB7IG5hbWU6ICdCYXR0bGVzaGlwJywgdmFsdWU6IGNyZWF0ZVNoaXAoe3NpemU6IDR9KSB9LFxuICAgICAgICB7IG5hbWU6ICdDcnVpc2VyJywgdmFsdWU6IGNyZWF0ZVNoaXAoe3NpemU6IDN9KSB9LFxuICAgICAgICB7IG5hbWU6ICdTdWJtYXJpbmUnLCB2YWx1ZTogY3JlYXRlU2hpcCh7c2l6ZTogM30pIH0sXG4gICAgICAgIHsgbmFtZTogJ0Rlc3Ryb3llcicsIHZhbHVlOiBjcmVhdGVTaGlwKHtzaXplOiAyfSkgfSxcbiAgICAgICAgeyBuYW1lOiAnQm9hdCcsIHZhbHVlOiBjcmVhdGVTaGlwKHtzaXplOiAyfSkgfSxcbiAgICAgIF07XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgbGV0IHZhbGlkU2hpcCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXZhbGlkU2hpcCkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgIF07XG4gICAgICAgICAgb3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgc2hpcC52YWx1ZS5sZW5ndGgsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICB2YWxpZFNoaXAgPSB0cnVlO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YWxpZFNoaXAgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgaWYgKHRoaXMucGxheWVyQm9hcmQuc2hpcHMubGVuZ3RoID49IDYgJiYgdGhpcy5jb21wdXRlckJvYXJkLnNoaXBzLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBwbGFjZSBhbGwgdGhlIHNoaXBzJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja1ZhbGlkQXR0YWNrKHgsIHkpIHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IFt4LCB5XTtcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHN0YXJ0IHRoZSBnYW1lJyk7XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBpZiB0aGUgY29vcmRpbmF0ZXMgYXJlIHZhbGlkXG4gICAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29yZGluYXRlcyBhcmUgbm90IHZhbGlkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb29yZGluYXRlcyBhcmUgYWxyZWFkeSBoaXRcbiAgICAgIGNvbnN0IG1pc3NlcyA9IHRoaXMuY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzO1xuICAgICAgY29uc3QgbWlzc2VkID0gbWlzc2VzLnNvbWUoKG1pc3MpID0+IG1pc3NbMF0gPT09IGNvb3Jkc1swXSAmJiBtaXNzWzFdID09PSBjb29yZHNbMV0pO1xuXG4gICAgICBjb25zdCBoaXRzID0gdGhpcy5jb21wdXRlckJvYXJkLnNoaXBzLm1hcCgoc2hpcCkgPT4gc2hpcC5oaXRzKTtcbiAgICAgIGNvbnN0IGhpdHRlZCA9IGhpdHMuc29tZSgoaGl0KSA9PiBoaXQuc29tZSgoaGl0Q29vcmRzKSA9PiBoaXRDb29yZHNbMF0gPT09IGNvb3Jkc1swXVxuICAgICAgICAmJiBoaXRDb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkpO1xuICAgICAgaWYgKG1pc3NlZCB8fCBoaXR0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNvb3JkaW5hdGVzJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHBsYXllckF0dGFjayh4LCB5KSB7XG4gICAgICBpZiAodGhpcy5jaGVja1ZhbGlkQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuICAgICAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLnNoaXBzLnNvbWUoKHNoaXApID0+IHNoaXAuaGl0cy5zb21lKChoaXQpID0+IGhpdFswXSA9PT0geFxuICAgICAgICAgICYmIGhpdFsxXSA9PT0geSkpKSB7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICAgIGNvbnN0IGNwdUF0dGFjayA9IHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGNwdUF0dGFjayA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgcmV0dXJuICdkb3VibGVNaXNzJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdtaXNzQW5kSGl0JztcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGhpdHMgPSAwKSB7XG4gICAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBzdGFydGVkXG4gICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZScpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgXTtcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb29yZGluYXRlcyBhcmUgYWxyZWFkeSBoaXQgKHVzaW5nIC5taXNzZWRBdHRhY2tzKVxuICAgICAgaWYgKHRoaXMucGxheWVyQm9hcmQubWlzc2VkQXR0YWNrc1xuICAgICAgICAuc29tZSgobWlzc2VkQXR0YWNrKSA9PiBtaXNzZWRBdHRhY2tbMF0gPT09IGNvb3JkaW5hdGVzWzBdXG4gICAgICAgICYmIG1pc3NlZEF0dGFja1sxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5zaGlwcy5zb21lKChzaGlwKSA9PiBzaGlwLmhpdHMuc29tZSgoaGl0KSA9PiBoaXRbMF0gPT09IGNvb3JkaW5hdGVzWzBdXG4gICAgICAgICAgJiYgaGl0WzFdID09PSBjb29yZGluYXRlc1sxXSkpKSB7XG4gICAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjayhoaXRzICsgMSk7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoaGl0cyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnYW1lRW5kKCkge1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgc3RhcnRlZFxuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnUGxheWVyIHdpbnMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgdGhpcy5hY3R1YWxQbGF5ZXIgPSAxO1xuICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gZ2FtZTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vc2hpcEZhY3RvcnkuanMnO1xuXG4vLyBmdW5jdGlvbiB0byBnZXQgdGhlIGNvb3JkaW5hdGVzIG9mIGEgc2hpcFxuZnVuY3Rpb24gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbeCArIGksIHldKTtcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbeCwgeSArIGldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbn1cblxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBzaGlwIHRoYXQgd2FzIGhpdFxuZnVuY3Rpb24gZ2V0SGl0U2hpcChjb29yZGluYXRlcywgc2hpcHMpIHtcbiAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gIGxldCBzaGlwSGl0ID0gbnVsbDtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUpID0+IHtcbiAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZVswXSA9PT0geCAmJiBzaGlwQ29vcmRpbmF0ZVsxXSA9PT0geSkge1xuICAgICAgICBzaGlwSGl0ID0gc2hpcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzaGlwSGl0O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUobmFtZSkge1xuICAvLyBhaXJjcmFmdGNhcnJpZXIsIEJhdHRsZXNoaXAsIENydWlzZXIsIFN1Ym1hcmluZSwgRGVzdHJveWVyLCBib2F0XG4gIGlmIChuYW1lICE9PSAnYWlyY3JhZnRjYXJyaWVyJyAmJiBuYW1lICE9PSAnQmF0dGxlc2hpcCcgJiYgbmFtZSAhPT0gJ0NydWlzZXInXG4gICYmIG5hbWUgIT09ICdTdWJtYXJpbmUnICYmIG5hbWUgIT09ICdEZXN0cm95ZXInICYmIG5hbWUgIT09ICdib2F0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBuYW1lIG11c3QgYmUgYWlyY3JhZnRjYXJyaWVyLCBCYXR0bGVzaGlwLCBDcnVpc2VyLCBTdWJtYXJpbmUsIERlc3Ryb3llciBvciBib2F0Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTaGlwTGVuZ3RoKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoIDwgMSB8fCBsZW5ndGggPiA1KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGxlbmd0aCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgaWYgKG9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgb3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgb3JpZW50YXRpb24gbXVzdCBiZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoY29vcmRpbmF0ZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoICE9PSAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHdvIG51bWJlcnMnKTtcbiAgfVxuICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjb29yZGluYXRlICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHdvIG51bWJlcnMnKTtcbiAgICB9XG4gICAgaWYgKGNvb3JkaW5hdGUgPCAwIHx8IGNvb3JkaW5hdGUgPiA5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgY29vcmRpbmF0ZXMgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDknKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU92ZXJsYXAoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24sIHNoaXBzKSB7XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IGdldFNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUpID0+IHtcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUyKSA9PiB7XG4gICAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZVswXSA9PT0gc2hpcENvb3JkaW5hdGUyWzBdICYmIHNoaXBDb29yZGluYXRlWzFdID09PSBzaGlwQ29vcmRpbmF0ZTJbMV0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGNhbm5vdCBvdmVybGFwJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkVmFsaWRhdGlvbihuYW1lLCBsZW5ndGgsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbiwgc2hpcHMpIHtcbiAgdmFsaWRhdGVOYW1lKG5hbWUpO1xuICB2YWxpZGF0ZVNoaXBMZW5ndGgobGVuZ3RoKTtcbiAgdmFsaWRhdGVPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG4gIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICB2YWxpZGF0ZU92ZXJsYXAoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24sIHNoaXBzKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeSgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0ge1xuICAgIHNoaXBzOiBbXSxcbiAgICBtaXNzZWRBdHRhY2tzOiBbXSxcbiAgICBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICAgIC8vIHZhbGlkYXRlIHNoaXBcbiAgICAgIGlmIChib2FyZFZhbGlkYXRpb24obmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHRoaXMuc2hpcHMpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKHtzaXplOiBsZW5ndGgsIG5hbWU6IG5hbWV9KTsgLy8gQWp1c3RhZG8gcGFyYSBpbmNsdWlyIGVsIG5vbWJyZSBkZWwgYmFyY28gc2kgZXMgbmVjZXNhcmlvXG4gICAgICBzaGlwLmNvb3JkaW5hdGVzID0gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBpcyBvZmYgdGhlIGJvYXJkXG4gICAgICBjb25zdCBzaGlwT2ZmQm9hcmQgPSBzaGlwLmNvb3JkaW5hdGVzLnNvbWUoKFt4LCB5XSkgPT4geCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpO1xuICAgICAgaWYgKHNoaXBPZmZCb2FyZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXBzIGNhbm5vdCBiZSBwbGFjZWQgb2ZmIHRoZSBib2FyZCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBzaGlwSGl0ID0gZ2V0SGl0U2hpcChjb29yZGluYXRlcywgdGhpcy5zaGlwcyk7XG4gICAgICBpZiAoc2hpcEhpdCkge1xuICAgICAgICAvLyBBcXXDrSBuZWNlc2l0YXMgYXNlZ3VyYXJ0ZSBkZSBxdWUgZXhpc3RlIHkgZnVuY2lvbmEgZWwgbcOpdG9kbyBoaXQgZW4gZWwgb2JqZXRvIHNoaXBcbiAgICAgICAgc2hpcEhpdC5oaXQoY29vcmRpbmF0ZXMpOyAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBlbCBvYmpldG8gc2hpcCB0ZW5nYSB1biBtw6l0b2RvIGhpdCBxdWUgZnVuY2lvbmUgY29tbyBlc3BlcmFzLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgLy8gQXNlZ8O6cmF0ZSBkZSBxdWUgdG9kb3MgbG9zIGJhcmNvcyB0aWVuZW4geSBwdWVkZW4gbGxhbWFyIGNvcnJlY3RhbWVudGUgYSBpc1N1bmtcbiAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGdhbWVib2FyZDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwRGF0YSkge1xuICBjb25zdCBzaGlwID0ge1xuICAgIG5hbWU6IHNoaXBEYXRhLm5hbWUsXG4gICAgc2l6ZTogc2hpcERhdGEuc2l6ZSxcbiAgICBoaXRzOiAwLFxuICAgIGltYWdlczogc2hpcERhdGEuaW1hZ2VzLFxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMuc2l6ZTtcbiAgICB9LFxuICAgIGhpdCgpIHtcbiAgICAgIHRoaXMuaGl0cysrO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBzaGlwO1xufVxuIiwiLy8gR2V0IHRoZSBpbWFnZXMgZnJvbSB3ZWJwYWNrXG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVySW1nIGZyb20gJy4uL3NyYy9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMSBmcm9tICcuLi9zcmMvaW1hZ2VzL2FpcmNyYWZ0Y2FycmllcjEucG5nJztcbmltcG9ydCBhaXJjcmFmdGNhcnJpZXIyIGZyb20gJy4uL3NyYy9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyMi5wbmcnO1xuaW1wb3J0IGFpcmNyYWZ0Y2FycmllcjMgZnJvbSAnLi4vc3JjL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIzLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyNCBmcm9tICcuLi9zcmMvaW1hZ2VzL2FpcmNyYWZ0Y2FycmllcjQucG5nJztcbmltcG9ydCBhaXJjcmFmdGNhcnJpZXI1IGZyb20gJy4uL3NyYy9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyNS5wbmcnO1xuXG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tICcuLi9zcmMvaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwMSBmcm9tICcuLi9zcmMvaW1hZ2VzL2JhdHRsZXNoaXAxLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDIgZnJvbSAnLi4vc3JjL2ltYWdlcy9iYXR0bGVzaGlwMi5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAzIGZyb20gJy4uL3NyYy9pbWFnZXMvYmF0dGxlc2hpcDMucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwNCBmcm9tICcuLi9zcmMvaW1hZ2VzL2JhdHRsZXNoaXA0LnBuZyc7XG5cbmltcG9ydCBjcnVpc2VyIGZyb20gJy4uL3NyYy9pbWFnZXMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IGNydWlzZXIxIGZyb20gJy4uL3NyYy9pbWFnZXMvY3J1aXNlcjEucG5nJztcbmltcG9ydCBjcnVpc2VyMiBmcm9tICcuLi9zcmMvaW1hZ2VzL2NydWlzZXIyLnBuZyc7XG5pbXBvcnQgY3J1aXNlcjMgZnJvbSAnLi4vc3JjL2ltYWdlcy9jcnVpc2VyMy5wbmcnO1xuXG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4uL3NyYy9pbWFnZXMvZGVzdHJveWVyLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMSBmcm9tICcuLi9zcmMvaW1hZ2VzL2Rlc3Ryb3llcjEucG5nJztcbmltcG9ydCBkZXN0cm95ZXIyIGZyb20gJy4uL3NyYy9pbWFnZXMvZGVzdHJveWVyMi5wbmcnO1xuaW1wb3J0IGRlc3Ryb3llcjMgZnJvbSAnLi4vc3JjL2ltYWdlcy9kZXN0cm95ZXIzLnBuZyc7XG5cbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi4vc3JjL2ltYWdlcy9zdWJtYXJpbmUucG5nJztcbmltcG9ydCBzdWJtYXJpbmUxIGZyb20gJy4uL3NyYy9pbWFnZXMvc3VibWFyaW5lMS5wbmcnO1xuaW1wb3J0IHN1Ym1hcmluZTIgZnJvbSAnLi4vc3JjL2ltYWdlcy9zdWJtYXJpbmUyLnBuZyc7XG5cbmltcG9ydCBib2F0IGZyb20gJy4uL3NyYy9pbWFnZXMvYm9hdC5wbmcnO1xuaW1wb3J0IGJvYXQxIGZyb20gJy4uL3NyYy9pbWFnZXMvYm9hdDEucG5nJztcbmltcG9ydCBib2F0MiBmcm9tICcuLi9zcmMvaW1hZ2VzL2JvYXQyLnBuZyc7XG5cbmltcG9ydCBleHBsb3Npb24gZnJvbSAnLi4vc3JjL2ltYWdlcy9leHBsb3Npb24ucG5nJztcblxuY29uc3QgYWlyY3JhZnRjYXJyaWVyU2hpcCA9IHtcbiAgbmFtZTogJ0FpcmNyYWZ0Y2FycmllcicsXG4gIHNpemU6IDUsXG4gIGZ1bGxJbWFnZTogYWlyY3JhZnRjYXJyaWVySW1nLFxuICBpbWFnZXM6IFthaXJjcmFmdGNhcnJpZXIxLCBhaXJjcmFmdGNhcnJpZXIyLCBhaXJjcmFmdGNhcnJpZXIzLCBhaXJjcmFmdGNhcnJpZXI0LCBhaXJjcmFmdGNhcnJpZXI1XSxcbn07XG5cbmNvbnN0IGJhdHRsZXNoaXBTaGlwID0ge1xuICBuYW1lOiAnQmF0dGxlc2hpcCcsXG4gIHNpemU6IDQsXG4gIGZ1bGxJbWFnZTogYmF0dGxlc2hpcCxcbiAgaW1hZ2VzOiBbYmF0dGxlc2hpcDEsIGJhdHRsZXNoaXAyLCBiYXR0bGVzaGlwMywgYmF0dGxlc2hpcDRdLFxufTtcblxuY29uc3QgY3J1aXNlclNoaXAgPSB7XG4gIG5hbWU6ICdDcnVpc2VyJyxcbiAgc2l6ZTogMyxcbiAgZnVsbEltYWdlOiBjcnVpc2VyLFxuICBpbWFnZXM6IFtjcnVpc2VyMSwgY3J1aXNlcjIsIGNydWlzZXIzXSxcbn07XG5cbmNvbnN0IHN1Ym1hcmluZVNoaXAgPSB7XG4gIG5hbWU6ICdTdWJtYXJpbmUnLFxuICBzaXplOiAzLFxuICBmdWxsSW1hZ2U6IHN1Ym1hcmluZSxcbiAgaW1hZ2VzOiBbc3VibWFyaW5lMSwgc3VibWFyaW5lMixdLFxufTtcblxuY29uc3QgZGVzdHJveWVyU2hpcCA9IHtcbiAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gIHNpemU6IDMsXG4gIGZ1bGxJbWFnZTogZGVzdHJveWVyLFxuICBpbWFnZXM6IFtkZXN0cm95ZXIxLCBkZXN0cm95ZXIyLCBkZXN0cm95ZXIzXSxcbn07XG5cbmNvbnN0IGJvYXRTaGlwID0ge1xuICBuYW1lOiAnYm9hdCcsXG4gIHNpemU6IDIsXG4gIGZ1bGxJbWFnZTogYm9hdCxcbiAgaW1hZ2VzOiBbYm9hdDEsIGJvYXQyXSxcbn07XG5cbmV4cG9ydCBjb25zdCBzaGlwcyA9IFtcbiAgYWlyY3JhZnRjYXJyaWVyU2hpcCxcbiAgYmF0dGxlc2hpcFNoaXAsXG4gIGNydWlzZXJTaGlwLFxuICBzdWJtYXJpbmVTaGlwLFxuICBkZXN0cm95ZXJTaGlwLFxuICBib2F0U2hpcCxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxTaGlwSW1hZ2VzKHNoaXBOYW1lKSB7XG4gIGNvbnN0IHNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09IHNoaXBOYW1lKTtcbiAgcmV0dXJuIHNoaXAuaW1hZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhwbG9zaW9uSW1hZ2UoKSB7XG4gIHJldHVybiBleHBsb3Npb247XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGRyYXdHcmlkLFxuICBzaG93QWN0aW9uLFxuICB1cGRhdGVQbGFjaW5nU2hpcCxcbiAgY3JlYXRlQWxlcnQsXG4gIHN0YXJ0UGxhY2luZyxcbn0gZnJvbSAnLi9kb21NYW5hZ2VyLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWVJbnN0YW5jZSA9IGdhbWUoKTtcblxuLy8gZHJhdyB0aGUgYm9hcmRzXG5kcmF3R3JpZCgpO1xuZHJhd0dyaWQoJ2VuZW15Jyk7XG5cbi8vIFNob3cgYWN0aW9uIHRvIHRoZSBwbGF5ZXJcbnNob3dBY3Rpb24oJ3BsYXllcicsICdQbGFjZSB5b3VyIHNoaXBzJyk7XG5zaG93QWN0aW9uKCdlbmVteScsICdXYWl0aW5nIEZvciBTaGlwcycsICdhbGVydCcpO1xuXG51cGRhdGVQbGFjaW5nU2hpcCgnQWlyY3JhZnRjYXJyaWVyJyk7XG5cbi8vIFNob3cgdGhlIGFsZXJ0XG5jcmVhdGVBbGVydCgnc3VjY2VzcycsICdHYW1lIHN0YXJ0ZWQsIHBsYWNlIHlvdXIgc2hpcHMgKFByZXNzIFIgdG8gcm90YXRlKScpO1xuXG5zdGFydFBsYWNpbmcoZ2FtZUluc3RhbmNlLCAnaG9yaXpvbnRhbCcsICdBaXJjcmFmdGNhcnJpZXInKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=