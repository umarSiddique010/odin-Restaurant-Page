/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  background-color: #e1e1e1;\n  font-family: monospace;\n  font-weight: 400;\n}\n\nh1 {\n  color: #212121;\n  text-align: center;\n  text-shadow: 2px 1px #575757;\n  font-size: 6rem;\n  font-weight: bolder;\n  border: none;\n  font-family: fantasy;\n}\n\n/* ----------- NAV BAR ------------ */\n\n.logo {\n  position: fixed;\n  left: 40px;\n  top: 5px;\n  height: 60px;\n  width: 60px;\n  z-index: 100;\n  border: none;\n}\n\nnav {\n  position: fixed;\n  width: 100vw;\n  background-color: #092d2d;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  gap: 40px;\n  align-items: center;\n  padding: 20px;\n  top: 0;\n  box-shadow: #105151 0 0 15px 0;\n  overflow-x: hidden;\n  z-index: 1;\n}\n\nnav button {\n  background-color: transparent;\n  font-size: 1.7rem;\n  height: 40px;\n  width: 120px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n}\n\nnav button:hover {\n  transition: transform 0.3s ease-in-out;\n  transform: scale(1.2);\n}\n\n\n\n/* -----Home------- */\n\n.home-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100%;\n}\n\n.home-img {\n  width: 100vw;\n  height: 85vh;\n  border: none;\n}\n\n.welcome-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  height: fit-content;\n  width: fit-content;\n  padding: 45px;\n  font-size: 1.9rem;\n  background-color: #3dadad;\n  color: #f0f0f0;\n  box-shadow: #8cbcbc 0 0 90px 0;\n  border: none;\n  margin: 50px 0;\n  border-radius: 5px;\n  font-style: oblique;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.menu-btn {\n  height: 2.6em;\n  width: 6.6em;\n  border: none;\n  border-radius: 6px;\n  padding: 5px;\n  cursor: pointer;\n  color: #d8d8d8;\n  background-color: #221b86;\n  font-size: 1.2rem;\n  font-family: cursive;\n  font-weight: 600;\n}\n\n.menu-btn:hover {\n  transition: transform 0.3s ease-in-out, background-color 0.3s ease;\n  background-color: #090087;\n  transform: scale(1.2);\n}\n\n.menu-btn:focus {\n  outline: 2px solid #090087;\n  outline-offset: 2px;\n}\n\n/* ----------- MENU ------------------  */\n\n.menu-content {\n  width: 100vw;\n  height: 100%;\n  margin: 80px 5px;\n}\n\n.menu-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 40px;\n  width: 100%;\n  height: 100%;\n  margin: 120px 10px;\n}\n\n.item-img {\n  height: 220px;\n  width: 360px;\n}\n\n.card-box {\n  height: 320px;\n  width: 420px;\n  padding: 45px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n  background-color: #cdcdcd;\n  box-shadow: #b8d4d4 0 0 2px 0;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.card-box:hover {\n  transition: transform 0.5s ease-in-out;\n  transform: scale(1.1);\n}\n\n/* --------- CONTACT ---------- */\n\n.contact-content {\n  width: 100vw;\n  height: 100%;\n  margin: 80px 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.contact-content h1 {\n  font-size: 7rem;\n  margin-bottom: 20px;\n}\n\n.contact-box h2 {\n  margin: 20px 0;\n  font-size: 2.7rem;\n  font-weight: 800;\n  font-style: italic;\n  letter-spacing: 3.9px;\n}\n\n.contact-box {\n  font-size: 2rem;\n  margin: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  height: 80%;\n  width: 80%;\n  background-color: #ab8181;\n  border: none;\n  border-radius: 10px;\n  padding: 90px;\n}\n\n/* -------- ABOUT US ------------ */\n\n.about-content {\n  width: 100vw;\n  height: 100%;\n  margin: 80px 5px;\n}\n\n.about-content h1 {\n  margin-top: 100px;\n}\n\n.about-para {\n  font-size: 2rem;\n  margin: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  height: 100%;\n  background-color: #93ab81;\n  color: #ececec;\n  border: none;\n  border-radius: 10px;\n  padding: 100px;\n  line-height: 50px;\n  letter-spacing: 4.2px;\n  text-align: center;\n  font-weight: 500;\n  font-style: oblique;\n  box-shadow: #939f89 0 0 10px 0;\n}\n\n#footer {\n  height: auto;\n  width: auto;\n  padding: 80px;\n  background-color: #94a785;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n#credit {\n  height: fit-content;\n  width: fit-content;\n  text-align: center;\n  background-color: #e0e0e0;\n  color: #212121;\n  box-shadow: #9f9f9f 0 0 18px 0;\n  padding: 40px;\n  line-height: 30px;\n}\n\n#links {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-top: 50px;\n}\n\n#links a {\n  text-decoration: none;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #3f0101;\n}\n\n/* ------media Query------- */\n\n@media (max-width: 527px) {\n  \n  h1 {\n    font-size: 4rem;\n    overflow-x: hidden;\n  }\n  \n  .logo {\n    left: 10px;\n    top: 10px; \n    height: 50px;\n    width: 50px;\n  }\n\n\n  nav {\n    flex-direction: column; \n    gap: 10px; \n    padding: 15px 10px; \n    overflow-x: hidden;\n  }\n\n \n  nav button {\n    font-size: 1.4rem; \n\n  }\n\n\n  .home-img {\n    width: 100vw;\n    height: 390px;\n    border: none;\n  }\n\n\n  #content {\n    margin-top: 220px;\n    overflow-x: hidden;\n  }\n\n\n\n  .card-box {\n    width: 320px;\n    height: auto;\n    padding: auto;\n    margin-left: -25px;\n  }\n\n  .item-img {\n    height: 190px;\n    width: 260px;\n  }\n\n\n  .contact-content h1 {\n    font-size: 4rem;\n    margin-bottom: 20px;\n  }\n\n\n\n.contact-box, .about-para  {\n  height: fit-content;\n  width: auto;\n  line-height: 56px;\n  letter-spacing: 2px;\n  word-spacing: 2px;\n}\n  \n\n\n  #footer {\n    width: 100vw;\n    height: fit-content;\n    overflow-x: hidden;\n  }\n\n  #links {\n    grid-template-columns: repeat(2, auto);\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/asset/biryani-img.jpg":
/*!***********************************!*\
  !*** ./src/asset/biryani-img.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73c2569a9dfbc6d4e540.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/biryani-img.jpg?");

/***/ }),

/***/ "./src/asset/burger-img.jpg":
/*!**********************************!*\
  !*** ./src/asset/burger-img.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc360cdb0c63d2055ee0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/burger-img.jpg?");

/***/ }),

/***/ "./src/asset/butter-paneer-img.jpg":
/*!*****************************************!*\
  !*** ./src/asset/butter-paneer-img.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea7d50ae56ee7c21eb19.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/butter-paneer-img.jpg?");

/***/ }),

/***/ "./src/asset/hero-img.jpg":
/*!********************************!*\
  !*** ./src/asset/hero-img.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57f2ffa2682c78869def.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/hero-img.jpg?");

/***/ }),

/***/ "./src/asset/home-pasta.jpeg":
/*!***********************************!*\
  !*** ./src/asset/home-pasta.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"350f5413561bfe092ce4.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/home-pasta.jpeg?");

/***/ }),

/***/ "./src/asset/hotel-logo-img.png":
/*!**************************************!*\
  !*** ./src/asset/hotel-logo-img.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"870a53c74fa2f134b3f3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/hotel-logo-img.png?");

/***/ }),

/***/ "./src/asset/mezcal-mojito-img.png":
/*!*****************************************!*\
  !*** ./src/asset/mezcal-mojito-img.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4135d1b597796456281.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/mezcal-mojito-img.png?");

/***/ }),

/***/ "./src/asset/pan-cake-img.png":
/*!************************************!*\
  !*** ./src/asset/pan-cake-img.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"380c3ca8d37dbf75778e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/pan-cake-img.png?");

/***/ }),

/***/ "./src/asset/pizza-img.jpg":
/*!*********************************!*\
  !*** ./src/asset/pizza-img.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"484b9967046a65f94fd6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/pizza-img.jpg?");

/***/ }),

/***/ "./src/asset/shakshuka-mix-veg-img.jpg":
/*!*********************************************!*\
  !*** ./src/asset/shakshuka-mix-veg-img.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2186ac1a66639f546454.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/shakshuka-mix-veg-img.jpg?");

/***/ }),

/***/ "./src/asset/spring-roll-img.jpg":
/*!***************************************!*\
  !*** ./src/asset/spring-roll-img.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acd04f6a3a5360c8781e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/spring-roll-img.jpg?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\n\n \nfunction loadAboutPage() {\n    const htmlContentId = document.querySelector(\"#content\")\n    htmlContentId.innerHTML = \"\"\n\n    const aboutContent = document.createElement(\"main\")\n    aboutContent.classList.add(\"about-content\")\n\n    const aboutHeading = document.createElement(\"h1\") \n    aboutHeading.textContent = \"About us\"\n    aboutContent.appendChild(aboutHeading)\n\n    const aboutPara = document.createElement(\"p\")\n    aboutPara.classList.add(\"about-para\")\n    aboutPara.textContent = \"Ocean View is more than just a restaurant; it’s a culinary journey. Our menu is a fusion of global flavors, inspired by the diverse cultures that have influenced coastal cuisine. From fresh seafood dishes to international favorites, we strive to create a dining experience that’s as visually stunning as it is delicious. Savor the breathtaking ocean views while indulging in our mouthwatering creations.\"\n\n    aboutContent.appendChild(aboutPara)\n    htmlContentId.appendChild(aboutContent)\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact-us.js":
/*!***************************!*\
  !*** ./src/contact-us.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\n\n\n\nfunction loadContactPage() {\n    const htmlContentId = document.querySelector(\"#content\")\n    htmlContentId.innerHTML = \"\"\n\n    const contactContent = document.createElement(\"main\")\n    contactContent.classList.add(\"contact-content\")\n\n    const contactMainHeading = document.createElement(\"h1\")\n    contactMainHeading.textContent = \"Contact us\"\n    contactContent.appendChild(contactMainHeading)\n\n\n\n    const contactBox = document.createElement(\"div\")\n    contactBox.classList.add(\"contact-box\")\n\n\n\n    const addressHeading = document.createElement(\"h2\")\n    addressHeading.textContent = \"Address:\"\n    contactBox.appendChild(addressHeading)\n\n\n\n    const paraInfo = document.createElement(\"p\")\n    paraInfo.classList.add(\"contact-para\")\n    paraInfo.textContent = \"New Street Elaem, Gotham city, Metapolis\"\n    contactBox.appendChild(paraInfo)\n\n    const pinCode = document.createElement(\"p\")\n    pinCode.classList.add(\"contact-para\")\n    pinCode.textContent = \"Zip Code: 29292\"\n    contactBox.appendChild(pinCode)\n\n    const phoneNumberPara = document.createElement(\"p\")\n    phoneNumberPara.classList.add(\"contact-para\")\n    phoneNumberPara.textContent = \"Phone Number: +00 111 222 3333\"\n    contactBox.appendChild(phoneNumberPara)\n\n\n    const emailPara = document.createElement(\"p\")\n    emailPara.classList.add(\"contact-para\")\n    emailPara.textContent = \"Email : ocean-view@exaple.com\"\n    contactBox.appendChild(emailPara)\n    \n    contactContent.appendChild(contactBox)\n    htmlContentId.appendChild(contactContent)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact-us.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _asset_hero_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/hero-img.jpg */ \"./src/asset/hero-img.jpg\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nfunction loadHomePage() {\n    const htmlContentId = document.querySelector(\"#content\"); \n  htmlContentId.innerHTML = ''; \n\n  const mainHome = document.createElement(\"main\");\n  mainHome.classList.add(\"home-content\");\n  htmlContentId.appendChild(mainHome);\n\n \n  const homeImg = document.createElement(\"img\");\n  homeImg.src = _asset_hero_img_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  homeImg.alt = \"Image of Pasta\";\n  homeImg.classList.add(\"home-img\");\n  mainHome.appendChild(homeImg);\n\n  const restaurantName = document.createElement(\"h1\");\n  restaurantName.textContent = \"Ocean view\";\n  mainHome.appendChild(restaurantName);\n\n  const welcomeDiv = document.createElement(\"div\");\n  welcomeDiv.classList.add(\"welcome-div\");\n  mainHome.appendChild(welcomeDiv);\n\n  const welcomePara = document.createElement(\"p\");\n  welcomePara.textContent = \"Welcome to Ocean view restaurant\";\n  welcomeDiv.appendChild(welcomePara);\n\n  const menuPageBtn = document.createElement(\"button\");\n  menuPageBtn.textContent = \"Visit Menu\";\n  menuPageBtn.classList.add(\"menu-btn\");\n  menuPageBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  welcomeDiv.appendChild(menuPageBtn);\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_us_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.js */ \"./src/contact-us.js\");\n/* harmony import */ var _asset_hotel_logo_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/hotel-logo-img.png */ \"./src/asset/hotel-logo-img.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    function setLogo() {\n       const header = document.querySelector(\"header\")\n\n     const logoImg = document.createElement('img')\n     logoImg.src = _asset_hotel_logo_img_png__WEBPACK_IMPORTED_MODULE_4__\n     logoImg.alt = \"Logo of Hotel\"\n     logoImg.classList.add(\"logo\")\n     header.prepend(logoImg)\n        \n    }\n    \n\n  \n  function handleRouting() {\n    const hash = window.location.hash;\n\n    if (hash === \"#home\") {\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (hash === \"#menu\") {\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (hash === \"#about\") {\n      (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (hash === \"#contact\") {\n      (0,_contact_us_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n  }\n\n  \n\n\n  window.addEventListener(\"hashchange\", handleRouting);\n\n  handleRouting();\n  setLogo()\n  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n  document.querySelector(\"#home-btn\").addEventListener(\"click\", () => {\n    window.location.hash = \"#home\"; \n  });\n\n  document.querySelector(\"#menu-btn\").addEventListener(\"click\", () => {\n    window.location.hash = \"#menu\"; \n  });\n\n  document.querySelector(\"#about-btn\").addEventListener(\"click\", () => {\n    window.location.hash = \"#about\";\n  });\n\n  document.querySelector(\"#contact-btn\").addEventListener(\"click\", () => {\n    window.location.hash = \"#contact\"; \n  });\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _asset_biryani_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/biryani-img.jpg */ \"./src/asset/biryani-img.jpg\");\n/* harmony import */ var _asset_burger_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/burger-img.jpg */ \"./src/asset/burger-img.jpg\");\n/* harmony import */ var _asset_butter_paneer_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/butter-paneer-img.jpg */ \"./src/asset/butter-paneer-img.jpg\");\n/* harmony import */ var _asset_home_pasta_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/home-pasta.jpeg */ \"./src/asset/home-pasta.jpeg\");\n/* harmony import */ var _asset_mezcal_mojito_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/mezcal-mojito-img.png */ \"./src/asset/mezcal-mojito-img.png\");\n/* harmony import */ var _asset_pan_cake_img_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/pan-cake-img.png */ \"./src/asset/pan-cake-img.png\");\n/* harmony import */ var _asset_pizza_img_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/pizza-img.jpg */ \"./src/asset/pizza-img.jpg\");\n/* harmony import */ var _asset_spring_roll_img_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset/spring-roll-img.jpg */ \"./src/asset/spring-roll-img.jpg\");\n/* harmony import */ var _asset_shakshuka_mix_veg_img_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset/shakshuka-mix-veg-img.jpg */ \"./src/asset/shakshuka-mix-veg-img.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction loadMenuPage() {\n    const htmlContentId = document.querySelector(\"#content\");\n    htmlContentId.innerHTML = ''; \n    const mainMenu = document.createElement(\"main\");\n    mainMenu.classList.add(\"menu-content\");\n    htmlContentId.appendChild(mainMenu);\n  \n    const menuHeading = document.createElement(\"h1\");\n    menuHeading.textContent = \"Our Menu\";\n    mainMenu.appendChild(menuHeading);\n\n\n    const menuSection = document.createElement(\"section\")\n    menuSection.classList.add(\"menu-section\")\n\n    meuCard(menuSection, _asset_home_pasta_jpeg__WEBPACK_IMPORTED_MODULE_3__, \"Noodles Pasta\", \"29$\")\n    meuCard(menuSection, _asset_biryani_img_jpg__WEBPACK_IMPORTED_MODULE_0__, \"Tikka chicken Biryani\", \"853$\")\n    meuCard(menuSection, _asset_pizza_img_jpg__WEBPACK_IMPORTED_MODULE_6__ , \"Hot Brazil chicken Pizza\", \"32$\")\n    meuCard(menuSection, _asset_burger_img_jpg__WEBPACK_IMPORTED_MODULE_1__ , \"Fried chicken cheese Burger\", \"31$\")\n    meuCard(menuSection, _asset_pan_cake_img_png__WEBPACK_IMPORTED_MODULE_5__ , \"Extra cheese honey blend Pan Cake\", \"23$\")\n    meuCard(menuSection, _asset_butter_paneer_img_jpg__WEBPACK_IMPORTED_MODULE_2__ , \"Butter masala Paneer\", \"33$\")\n    meuCard(menuSection, _asset_spring_roll_img_jpg__WEBPACK_IMPORTED_MODULE_7__ , \"Veg Spring Roll\", \"19$\")\n    meuCard(menuSection, _asset_shakshuka_mix_veg_img_jpg__WEBPACK_IMPORTED_MODULE_8__, \"Shakshuka mix veg\", \"30$\")\n    meuCard(menuSection, _asset_mezcal_mojito_img_png__WEBPACK_IMPORTED_MODULE_4__, \"Mezcal Mojito\", \"26$\")\n\n    mainMenu.appendChild(menuSection)\n\n  }\n\n\n\n  function meuCard(parentNode, itemPic, name, price) {\n    const cardBox = document.createElement(\"div\")\n    cardBox.classList.add(\"card-box\")\n\n    const img = document.createElement(\"img\")\n    img.classList.add(\"item-img\")\n    img.src = itemPic\n    img.alt = itemPic\n    cardBox.appendChild(img)\n\n    const heading = document.createElement(\"h2\")\n    heading.textContent = name\n    cardBox.appendChild(heading)\n\n    const pricePara = document.createElement(\"p\")\n    pricePara.classList.add(\"price\")\n    pricePara.textContent = `Price: ${price}`\n    cardBox.appendChild(pricePara)\n\n    \n\n\n    parentNode.appendChild(cardBox)\n\n  }\n  \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;