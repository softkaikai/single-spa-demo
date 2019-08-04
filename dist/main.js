/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/single-spa/lib/esm/single-spa.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \***********************************************************/
/*! exports provided: BOOTSTRAPPING, LOADING_SOURCE_CODE, MOUNTED, MOUNTING, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, SKIP_BECAUSE_BROKEN, UNMOUNTING, UPDATING, addErrorHandler, checkActivityFunctions, declareChildApplication, ensureJQuerySupport, getAppNames, getAppStatus, getMountedApps, mountRootParcel, navigateToUrl, registerApplication, removeErrorHandler, setBootstrapMaxTime, setMountMaxTime, setUnloadMaxTime, setUnmountMaxTime, start, triggerAppChange, unloadApplication, unloadChildApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOOTSTRAPPING\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING_SOURCE_CODE\", function() { return m; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUNTED\", function() { return w; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOUNTING\", function() { return g; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_BOOTSTRAPPED\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_LOADED\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_MOUNTED\", function() { return v; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SKIP_BECAUSE_BROKEN\", function() { return P; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNMOUNTING\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATING\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addErrorHandler\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkActivityFunctions\", function() { return Tt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"declareChildApplication\", function() { return Pt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ensureJQuerySupport\", function() { return pt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppNames\", function() { return bt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAppStatus\", function() { return Et; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMountedApps\", function() { return yt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mountRootParcel\", function() { return V; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToUrl\", function() { return et; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerApplication\", function() { return Ot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeErrorHandler\", function() { return f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBootstrapMaxTime\", function() { return U; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMountMaxTime\", function() { return C; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnloadMaxTime\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnmountMaxTime\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return It; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triggerAppChange\", function() { return _t; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unloadApplication\", function() { return St; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unloadChildApplication\", function() { return Nt; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar t = Object.freeze({\n  get start() {\n    return It;\n  },\n\n  get ensureJQuerySupport() {\n    return pt;\n  },\n\n  get setBootstrapMaxTime() {\n    return U;\n  },\n\n  get setMountMaxTime() {\n    return C;\n  },\n\n  get setUnmountMaxTime() {\n    return I;\n  },\n\n  get setUnloadMaxTime() {\n    return L;\n  },\n\n  get registerApplication() {\n    return Ot;\n  },\n\n  get getMountedApps() {\n    return yt;\n  },\n\n  get getAppStatus() {\n    return Et;\n  },\n\n  get unloadApplication() {\n    return St;\n  },\n\n  get checkActivityFunctions() {\n    return Tt;\n  },\n\n  get getAppNames() {\n    return bt;\n  },\n\n  get declareChildApplication() {\n    return Pt;\n  },\n\n  get unloadChildApplication() {\n    return Nt;\n  },\n\n  get navigateToUrl() {\n    return et;\n  },\n\n  get triggerAppChange() {\n    return _t;\n  },\n\n  get addErrorHandler() {\n    return s;\n  },\n\n  get removeErrorHandler() {\n    return f;\n  },\n\n  get mountRootParcel() {\n    return V;\n  },\n\n  get NOT_LOADED() {\n    return p;\n  },\n\n  get LOADING_SOURCE_CODE() {\n    return m;\n  },\n\n  get NOT_BOOTSTRAPPED() {\n    return h;\n  },\n\n  get BOOTSTRAPPING() {\n    return d;\n  },\n\n  get NOT_MOUNTED() {\n    return v;\n  },\n\n  get MOUNTING() {\n    return g;\n  },\n\n  get UPDATING() {\n    return y;\n  },\n\n  get MOUNTED() {\n    return w;\n  },\n\n  get UNMOUNTING() {\n    return b;\n  },\n\n  get SKIP_BECAUSE_BROKEN() {\n    return P;\n  }\n\n}),\n    n = (\"undefined\" != typeof globalThis ? globalThis : \"undefined\" != typeof window ? window : \"undefined\" != typeof global ? global : \"undefined\" != typeof self ? self : {}).CustomEvent;\nvar e = function () {\n  try {\n    var t = new n(\"cat\", {\n      detail: {\n        foo: \"bar\"\n      }\n    });\n    return \"cat\" === t.type && \"bar\" === t.detail.foo;\n  } catch (t) {}\n\n  return !1;\n}() ? n : \"undefined\" != typeof document && \"function\" == typeof document.createEvent ? function (t, n) {\n  var e = document.createEvent(\"CustomEvent\");\n  return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e;\n} : function (t, n) {\n  var e = document.createEventObject();\n  return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e;\n};\n\nfunction r(t) {\n  return (r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n    return _typeof(t);\n  } : function (t) {\n    return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n  })(t);\n}\n\nfunction o(t, n, e) {\n  return n in t ? Object.defineProperty(t, n, {\n    value: e,\n    enumerable: !0,\n    configurable: !0,\n    writable: !0\n  }) : t[n] = e, t;\n}\n\nfunction i(t, n) {\n  var e = Object.keys(t);\n\n  if (Object.getOwnPropertySymbols) {\n    var r = Object.getOwnPropertySymbols(t);\n    n && (r = r.filter(function (n) {\n      return Object.getOwnPropertyDescriptor(t, n).enumerable;\n    })), e.push.apply(e, r);\n  }\n\n  return e;\n}\n\nfunction a(t) {\n  for (var n = 1; n < arguments.length; n++) {\n    var e = null != arguments[n] ? arguments[n] : {};\n    n % 2 ? i(e, !0).forEach(function (n) {\n      o(t, n, e[n]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(e).forEach(function (n) {\n      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));\n    });\n  }\n\n  return t;\n}\n\nvar u = [];\n\nfunction c(t, n) {\n  var e = l(t, n);\n  u.length ? u.forEach(function (t) {\n    return t(e);\n  }) : setTimeout(function () {\n    throw e;\n  });\n}\n\nfunction s(t) {\n  if (\"function\" != typeof t) throw Error(\"a single-spa error handler must be a function\");\n  u.push(t);\n}\n\nfunction f(t) {\n  if (\"function\" != typeof t) throw Error(\"a single-spa error handler must be a function\");\n  var n = !1;\n  return u = u.filter(function (e) {\n    var r = e === t;\n    return n = n || r, !r;\n  }), n;\n}\n\nfunction l(t, n) {\n  var e,\n      r = n.unmountThisParcel ? \"Parcel\" : \"Application\",\n      o = \"\".concat(r, \" '\").concat(n.name, \"' died in status \").concat(n.status, \": \");\n\n  if (t instanceof Error) {\n    try {\n      t.message = o + t.message;\n    } catch (t) {}\n\n    e = t;\n  } else {\n    console.warn(\"While \".concat(n.status, \", '\").concat(n.name, \"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate.\"));\n\n    try {\n      e = Error(o + JSON.stringify(t));\n    } catch (n) {\n      e = t;\n    }\n  }\n\n  e.appName = n.name, e.appOrParcelName = n.name;\n\n  try {\n    e.name = n.name;\n  } catch (t) {}\n\n  return e;\n}\n\nvar p = \"NOT_LOADED\",\n    m = \"LOADING_SOURCE_CODE\",\n    h = \"NOT_BOOTSTRAPPED\",\n    d = \"BOOTSTRAPPING\",\n    v = \"NOT_MOUNTED\",\n    g = \"MOUNTING\",\n    w = \"MOUNTED\",\n    y = \"UPDATING\",\n    b = \"UNMOUNTING\",\n    E = \"UNLOADING\",\n    P = \"SKIP_BECAUSE_BROKEN\";\n\nfunction O(t) {\n  return t.status === w;\n}\n\nfunction T(t) {\n  return !O(t);\n}\n\nfunction A(t) {\n  return t.status !== p && t.status !== m;\n}\n\nfunction N(t) {\n  return !A(t);\n}\n\nfunction S(t) {\n  try {\n    return t.activeWhen(window.location);\n  } catch (n) {\n    c(n, t), t.status = P;\n  }\n}\n\nfunction j(t) {\n  try {\n    return !t.activeWhen(window.location);\n  } catch (n) {\n    c(n, t), t.status = P;\n  }\n}\n\nfunction x(t) {\n  return t !== P && (!t || t.status !== P);\n}\n\nfunction D(t) {\n  return t.name;\n}\n\nvar _ = {\n  bootstrap: {\n    millis: 4e3,\n    dieOnTimeout: !1\n  },\n  mount: {\n    millis: 3e3,\n    dieOnTimeout: !1\n  },\n  unmount: {\n    millis: 3e3,\n    dieOnTimeout: !1\n  },\n  unload: {\n    millis: 3e3,\n    dieOnTimeout: !1\n  }\n};\n\nfunction U(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"bootstrap max time must be a positive integer number of milliseconds\");\n  _.bootstrap = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction C(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"mount max time must be a positive integer number of milliseconds\");\n  _.mount = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction I(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"unmount max time must be a positive integer number of milliseconds\");\n  _.unmount = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction L(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  if (\"number\" != typeof t || t <= 0) throw Error(\"unload max time must be a positive integer number of milliseconds\");\n  _.unload = {\n    millis: t,\n    dieOnTimeout: n\n  };\n}\n\nfunction M(t, n, e) {\n  var r = 1e3;\n  return new Promise(function (o, i) {\n    var a = !1,\n        u = !1;\n\n    function c(t) {\n      if (!a) if (!0 === t) u = !0, e.dieOnTimeout ? i(\"\".concat(n, \" did not resolve or reject for \").concat(e.millis, \" milliseconds\")) : console.error(\"\".concat(n, \" did not resolve or reject for \").concat(e.millis, \" milliseconds -- we're no longer going to warn you about it.\"));else if (!u) {\n        var o = t,\n            s = o * r;\n        console.warn(\"\".concat(n, \" did not resolve or reject within \").concat(s, \" milliseconds\")), s + r < e.millis && setTimeout(function () {\n          return c(o + 1);\n        }, r);\n      }\n    }\n\n    t.then(function (t) {\n      a = !0, o(t);\n    })[\"catch\"](function (t) {\n      a = !0, i(t);\n    }), setTimeout(function () {\n      return c(1);\n    }, r), setTimeout(function () {\n      return c(!0);\n    }, e.millis);\n  });\n}\n\nfunction B() {\n  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};\n  return a({}, _, {}, t);\n}\n\nfunction G(t, n) {\n  for (var e = 0; e < t.length; e++) {\n    if (n(t[e])) return t[e];\n  }\n\n  return null;\n}\n\nfunction q(t) {\n  return t && (\"function\" == typeof t || (n = t, Array.isArray(n) && !G(n, function (t) {\n    return \"function\" != typeof t;\n  })));\n  var n;\n}\n\nfunction R(t, n) {\n  return 0 === (t = Array.isArray(t) ? t : [t]).length && (t = [function () {\n    return Promise.resolve();\n  }]), function (e) {\n    return new Promise(function (r, o) {\n      !function i(a) {\n        var u = t[a](e);\n        k(u) ? u.then(function () {\n          a === t.length - 1 ? r() : i(a + 1);\n        })[\"catch\"](o) : o(\"\".concat(n, \" at index \").concat(a, \" did not return a promise\"));\n      }(0);\n    });\n  };\n}\n\nfunction k(t) {\n  return t && \"function\" == typeof t.then && \"function\" == typeof t[\"catch\"];\n}\n\nfunction W(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  return Promise.resolve().then(function () {\n    return t.status !== h ? t : (t.status = d, M(t.bootstrap(Y(t)), \"Bootstrapping appOrParcel '\".concat(t.name, \"'\"), t.timeouts.bootstrap).then(function () {\n      return t.status = v, t;\n    })[\"catch\"](function (e) {\n      if (t.status = P, n) throw l(e, t);\n      return c(e, t), t;\n    }));\n  });\n}\n\nfunction F(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  return Promise.resolve().then(function () {\n    if (t.status !== w) return t;\n    t.status = b;\n    var e = Object.keys(t.parcels).map(function (n) {\n      return t.parcels[n].unmountThisParcel();\n    });\n    return Promise.all(e).then(r, function (e) {\n      return r().then(function () {\n        var r = Error(e.message);\n\n        if (n) {\n          var o = l(r, t);\n          throw t.status = P, o;\n        }\n\n        c(r, t), t.status = P;\n      });\n    }).then(function () {\n      return t;\n    });\n\n    function r() {\n      return M(t.unmount(Y(t)), \"Unmounting application \".concat(t.name, \"'\"), t.timeouts.unmount).then(function () {\n        t.status = v;\n      })[\"catch\"](function (e) {\n        if (n) {\n          var r = l(e, t);\n          throw t.status = P, r;\n        }\n\n        c(e, t), t.status = P;\n      });\n    }\n  });\n}\n\nvar K = !1,\n    $ = !1;\n\nfunction H(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];\n  return Promise.resolve().then(function () {\n    return t.status !== v ? t : (K || (window.dispatchEvent(new e(\"single-spa:before-first-mount\")), K = !0), M(t.mount(Y(t)), \"Mounting application '\".concat(t.name, \"'\"), t.timeouts.mount).then(function () {\n      return t.status = w, $ || (window.dispatchEvent(new e(\"single-spa:first-mount\")), $ = !0), t;\n    })[\"catch\"](function (e) {\n      return t.status = w, F(t).then(r, r);\n\n      function r() {\n        if (n) {\n          var r = l(e, t);\n          throw t.status = P, r;\n        }\n\n        return c(e, t), t.status = P, t;\n      }\n    }));\n  });\n}\n\nvar J = 0,\n    Q = {\n  parcels: {}\n};\n\nfunction V() {\n  return z.apply(Q, arguments);\n}\n\nfunction z(t, n) {\n  var e = this;\n  if (!t || \"object\" !== r(t) && \"function\" != typeof t) throw Error(\"Cannot mount parcel without a config object or config loading function\");\n  if (t.name && \"string\" != typeof t.name) throw Error(\"Parcel name must be a string, if provided\");\n  if (\"object\" !== r(n)) throw Error(\"Parcel \".concat(name, \" has invalid customProps -- must be an object\"));\n  if (!n.domElement) throw Error(\"Parcel \".concat(name, \" cannot be mounted without a domElement provided as a prop\"));\n  var o,\n      i = J++,\n      a = \"function\" == typeof t,\n      u = a ? t : function () {\n    return Promise.resolve(t);\n  },\n      c = {\n    id: i,\n    parcels: {},\n    status: a ? m : h,\n    customProps: n,\n    parentName: e.name,\n    unmountThisParcel: function unmountThisParcel() {\n      if (c.status !== w) throw Error(\"Cannot unmount parcel '\".concat(name, \"' -- it is in a \").concat(c.status, \" status\"));\n      return F(c, !0).then(function (t) {\n        return c.parentName && delete e.parcels[c.id], t;\n      }).then(function (t) {\n        return f(t), t;\n      })[\"catch\"](function (t) {\n        throw c.status = P, p(t), t;\n      });\n    }\n  };\n  e.parcels[i] = c;\n  var s = u();\n  if (!s || \"function\" != typeof s.then) throw Error(\"When mounting a parcel, the config loading function must return a promise that resolves with the parcel config\");\n  var f,\n      p,\n      d = (s = s.then(function (t) {\n    if (!t) throw Error(\"When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config\");\n    var n = t.name || \"parcel-\".concat(i);\n    if (!q(t.bootstrap)) throw Error(\"Parcel \".concat(n, \" must have a valid bootstrap function\"));\n    if (!q(t.mount)) throw Error(\"Parcel \".concat(n, \" must have a valid mount function\"));\n    if (!q(t.unmount)) throw Error(\"Parcel \".concat(n, \" must have a valid unmount function\"));\n    if (t.update && !q(t.update)) throw Error(\"Parcel \".concat(n, \" provided an invalid update function\"));\n    var e = R(t.bootstrap),\n        r = R(t.mount),\n        a = R(t.unmount);\n    c.status = h, c.name = n, c.bootstrap = e, c.mount = r, c.unmount = a, c.timeouts = B(t.timeouts), t.update && (c.update = R(t.update), o.update = function (t) {\n      return c.customProps = t, X(function (t) {\n        return Promise.resolve().then(function () {\n          if (t.status !== w) throw Error(\"Cannot update parcel '\".concat(t.name, \"' because it is not mounted\"));\n          return t.status = y, M(t.update(Y(t)), \"Updating parcel '\".concat(t.name, \"'\"), t.timeouts.mount).then(function () {\n            return t.status = w, t;\n          })[\"catch\"](function (n) {\n            var e = l(n, t);\n            throw t.status = P, e;\n          });\n        });\n      }(c));\n    });\n  })).then(function () {\n    return W(c, !0);\n  }),\n      g = d.then(function () {\n    return H(c, !0);\n  }),\n      b = new Promise(function (t, n) {\n    f = t, p = n;\n  });\n  return o = {\n    mount: function mount() {\n      return X(Promise.resolve().then(function () {\n        if (c.status !== v) throw Error(\"Cannot mount parcel '\".concat(name, \"' -- it is in a \").concat(c.status, \" status\"));\n        return e.parcels[i] = c, H(c);\n      }));\n    },\n    unmount: function unmount() {\n      return X(c.unmountThisParcel());\n    },\n    getStatus: function getStatus() {\n      return c.status;\n    },\n    loadPromise: X(s),\n    bootstrapPromise: X(d),\n    mountPromise: X(g),\n    unmountPromise: X(b)\n  };\n}\n\nfunction X(t) {\n  return t.then(function () {\n    return null;\n  });\n}\n\nfunction Y(n) {\n  var e = a({}, n.customProps, {\n    name: n.name,\n    mountParcel: z.bind(n),\n    singleSpa: t\n  });\n  return n.unmountThisParcel && (e.unmountSelf = n.unmountThisParcel), e;\n}\n\nfunction Z(t) {\n  return Promise.resolve().then(function () {\n    return t.status !== p ? t : (t.status = m, Promise.resolve().then(function () {\n      var e = t.loadImpl(Y(t));\n      if (!k(e)) throw Error(\"single-spa loading function did not return a promise. Check the second argument to registerApplication('\".concat(t.name, \"', loadingFunction, activityFunction)\"));\n      return e.then(function (e) {\n        var o;\n        return \"object\" !== r(n = e) && (o = \"does not export anything\"), q(n.bootstrap) || (o = \"does not export a bootstrap function or array of functions\"), q(n.mount) || (o = \"does not export a mount function or array of functions\"), q(n.unmount) || (o = \"does not export an unmount function or array of functions\"), o ? (console.error(\"The loading function for single-spa application '\".concat(t.name, \"' resolved with the following, which does not have bootstrap, mount, and unmount functions\"), n), c(o, t), t.status = P, t) : (n.devtools && n.devtools.overlays && (t.devtools.overlays = a({}, t.devtools.overlays, {}, n.devtools.overlays)), t.status = h, t.bootstrap = R(n.bootstrap, \"App '\".concat(t.name, \"' bootstrap function\")), t.mount = R(n.mount, \"App '\".concat(t.name, \"' mount function\")), t.unmount = R(n.unmount, \"App '\".concat(t.name, \"' unmount function\")), t.unload = R(n.unload || [], \"App '\".concat(t.name, \"' unload function\")), t.timeouts = B(n.timeouts), t);\n      });\n    })[\"catch\"](function (n) {\n      return c(n, t), t.status = P, t;\n    }));\n    var n;\n  });\n}\n\nvar tt = {\n  hashchange: [],\n  popstate: []\n},\n    nt = [\"hashchange\", \"popstate\"];\n\nfunction et(t) {\n  var n,\n      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};\n  if (\"string\" == typeof t) n = t;else if (this && this.href) n = this.href;else {\n    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(\"singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag\");\n    n = t.currentTarget.href, t.preventDefault();\n  }\n  var r = ft(window.location.href),\n      o = ft(n);\n  if (0 === n.indexOf(\"#\")) window.location.hash = \"#\" + o.anchor;else if (r.host !== o.host && o.host) {\n    if (e.isTestingEnv) return {\n      wouldHaveReloadedThePage: !0\n    };\n    window.location.href = n;\n  } else !function (t, n) {\n    return n === t || n === \"/\" + t;\n  }(o.path + \"?\" + o.query, r.path + \"?\" + r.query) ? window.history.pushState(null, null, n) : window.location.hash = \"#\" + o.anchor;\n}\n\nfunction rt(t) {\n  var n = this;\n\n  if (t) {\n    var e = t[0].type;\n    nt.indexOf(e) >= 0 && tt[e].forEach(function (e) {\n      e.apply(n, t);\n    });\n  }\n}\n\nfunction ot() {\n  Ut([], arguments);\n}\n\nwindow.addEventListener(\"hashchange\", ot), window.addEventListener(\"popstate\", ot);\nvar it = window.addEventListener,\n    at = window.removeEventListener;\nwindow.addEventListener = function (t, n) {\n  if (!(\"function\" == typeof n && nt.indexOf(t) >= 0) || G(tt[t], function (t) {\n    return t === n;\n  })) return it.apply(this, arguments);\n  tt[t].push(n);\n}, window.removeEventListener = function (t, n) {\n  if (!(\"function\" == typeof n && nt.indexOf(t) >= 0)) return at.apply(this, arguments);\n  tt[t] = tt[t].filter(function (t) {\n    return t !== n;\n  });\n};\nvar ut = window.history.pushState;\n\nwindow.history.pushState = function (t) {\n  var n = ut.apply(this, arguments);\n  return ot(st(t)), n;\n};\n\nvar ct = window.history.replaceState;\n\nfunction st(t) {\n  try {\n    return new PopStateEvent(\"popstate\", {\n      state: t\n    });\n  } catch (e) {\n    var n = document.createEvent(\"PopStateEvent\");\n    return n.initPopStateEvent(\"popstate\", !1, !1, t), n;\n  }\n}\n\nfunction ft(t) {\n  for (var n = {\n    strictMode: !0,\n    key: [\"source\", \"protocol\", \"authority\", \"userInfo\", \"user\", \"password\", \"host\", \"port\", \"relative\", \"path\", \"directory\", \"file\", \"query\", \"anchor\"],\n    q: {\n      name: \"queryKey\",\n      parser: /(?:^|&)([^&=]*)=?([^&]*)/g\n    },\n    parser: {\n      strict: /^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,\n      loose: /^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/\n    }\n  }, e = n.parser.strict.exec(t), r = {}, o = 14; o--;) {\n    r[n.key[o]] = e[o] || \"\";\n  }\n\n  return r[n.q.name] = {}, r[n.key[12]].replace(n.q.parser, function (t, e, o) {\n    e && (r[n.q.name][e] = o);\n  }), r;\n}\n\nwindow.history.replaceState = function (t) {\n  var n = ct.apply(this, arguments);\n  return ot(st(t)), n;\n}, window.singleSpaNavigate = et;\nvar lt = !1;\n\nfunction pt() {\n  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;\n\n  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !lt) {\n    var n = t.fn.on,\n        e = t.fn.off;\n    t.fn.on = function (t, e) {\n      return mt.call(this, n, window.addEventListener, t, e, arguments);\n    }, t.fn.off = function (t, n) {\n      return mt.call(this, e, window.removeEventListener, t, n, arguments);\n    }, lt = !0;\n  }\n}\n\nfunction mt(t, n, e, r, o) {\n  return \"string\" != typeof e ? t.apply(this, o) : (e.split(/\\s+/).forEach(function (t) {\n    nt.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, \"\"));\n  }), \"\" === e.trim() ? this : t.apply(this, o));\n}\n\nvar ht = {};\n\nfunction dt(t) {\n  return Promise.resolve().then(function () {\n    var n = ht[t.name];\n    return n ? t.status === p ? (vt(t, n), t) : t.status === E ? n.promise.then(function () {\n      return t;\n    }) : t.status !== v ? t : (t.status = E, M(t.unload(Y(t)), \"Unloading application '\".concat(t.name, \"'\"), t.timeouts.unload).then(function () {\n      return vt(t, n), t;\n    })[\"catch\"](function (e) {\n      return function (t, n, e) {\n        delete ht[t.name], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, c(e, t), t.status = P, n.reject(e);\n      }(t, n, e), t;\n    })) : t;\n  });\n}\n\nfunction vt(t, n) {\n  delete ht[t.name], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = p, n.resolve();\n}\n\nfunction gt(t, n, e, r) {\n  ht[t.name] = {\n    app: t,\n    resolve: e,\n    reject: r\n  }, Object.defineProperty(ht[t.name], \"promise\", {\n    get: n\n  });\n}\n\nvar wt = [];\n\nfunction yt() {\n  return wt.filter(O).map(D);\n}\n\nfunction bt() {\n  return wt.map(D);\n}\n\nfunction Et(t) {\n  var n = G(wt, function (n) {\n    return n.name === t;\n  });\n  return n ? n.status : null;\n}\n\nfunction Pt(t, n, e) {\n  return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use \"registerApplication\" instead'), Ot(t, n, e);\n}\n\nfunction Ot(t, n, e) {\n  var o,\n      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};\n  if (\"string\" != typeof t || 0 === t.length) throw Error(\"The first argument must be a non-empty string 'appName'\");\n  if (-1 !== bt().indexOf(t)) throw Error(\"There is already an app declared with name \".concat(t));\n  if (\"object\" !== r(i) || Array.isArray(i)) throw Error(\"customProps must be an object\");\n  if (!n) throw Error(\"The application or loading function is required\");\n  if (o = \"function\" != typeof n ? function () {\n    return Promise.resolve(n);\n  } : n, \"function\" != typeof e) throw Error(\"The activeWhen argument must be a function\");\n  wt.push({\n    name: t,\n    loadImpl: o,\n    activeWhen: e,\n    status: p,\n    parcels: {},\n    devtools: {\n      overlays: {\n        options: {},\n        selectors: []\n      }\n    },\n    customProps: i\n  }), pt(), Ut();\n}\n\nfunction Tt(t) {\n  for (var n = [], e = 0; e < wt.length; e++) {\n    wt[e].activeWhen(t) && n.push(wt[e].name);\n  }\n\n  return n;\n}\n\nfunction At() {\n  return wt.filter(x).filter(N).filter(S);\n}\n\nfunction Nt(t, n) {\n  return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use \"unloadApplication\" instead'), St(t, n);\n}\n\nfunction St(t) {\n  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {\n    waitForUnmount: !1\n  };\n  if (\"string\" != typeof t) throw Error(\"unloadApplication requires a string 'appName'\");\n  var e = G(wt, function (n) {\n    return n.name === t;\n  });\n  if (!e) throw Error(\"Could not unload application '\".concat(t, \"' because no such application has been registered\"));\n\n  var r,\n      o = function (t) {\n    return ht[t];\n  }(e.name);\n\n  if (n && n.waitForUnmount) {\n    if (o) return o.promise;\n    var i = new Promise(function (t, n) {\n      gt(e, function () {\n        return i;\n      }, t, n);\n    });\n    return i;\n  }\n\n  return o ? (r = o.promise, jt(e, o.resolve, o.reject)) : r = new Promise(function (t, n) {\n    gt(e, function () {\n      return r;\n    }, t, n), jt(e, t, n);\n  }), r;\n}\n\nfunction jt(t, n, e) {\n  F(t).then(dt).then(function () {\n    n(), setTimeout(function () {\n      Ut();\n    });\n  })[\"catch\"](e);\n}\n\nvar xt = !1,\n    Dt = [];\n\nfunction _t() {\n  return Ut();\n}\n\nfunction Ut() {\n  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],\n      n = arguments.length > 1 ? arguments[1] : void 0;\n  if (xt) return new Promise(function (t, e) {\n    Dt.push({\n      resolve: t,\n      reject: e,\n      eventArguments: n\n    });\n  });\n  xt = !0;\n  var r = !0;\n  return Ct ? Promise.resolve().then(function () {\n    window.dispatchEvent(new e(\"single-spa:before-routing-event\", a()));\n    var n = Object.keys(ht).map(function (t) {\n      return ht[t].app;\n    }).filter(T).map(dt),\n        u = wt.filter(x).filter(O).filter(j).map(F).map(function (t) {\n      return t.then(dt);\n    }),\n        c = u.concat(n);\n    c.length > 0 && (r = !1);\n    var s = Promise.all(c),\n        f = At(),\n        l = f.map(function (t) {\n      return Z(t).then(W).then(function (t) {\n        return s.then(function () {\n          return H(t);\n        });\n      });\n    });\n    l.length > 0 && (r = !1);\n    var p = wt.filter(x).filter(T).filter(A).filter(S).filter(function (t) {\n      return f.indexOf(t) < 0;\n    }).map(function (t) {\n      return W(t).then(function () {\n        return s;\n      }).then(function () {\n        return H(t);\n      });\n    });\n    return p.length > 0 && (r = !1), s[\"catch\"](function (t) {\n      throw i(), t;\n    }).then(function () {\n      return i(), Promise.all(l.concat(p))[\"catch\"](function (n) {\n        throw t.forEach(function (t) {\n          return t.reject(n);\n        }), n;\n      }).then(function () {\n        return o(!1);\n      });\n    });\n  }) : Promise.resolve().then(function () {\n    var t = At().map(Z);\n    return t.length > 0 && (r = !1), Promise.all(t).then(o)[\"catch\"](function (t) {\n      throw i(), t;\n    });\n  });\n\n  function o() {\n    var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],\n        o = yt();\n    n && i(), t.forEach(function (t) {\n      return t.resolve(o);\n    });\n\n    try {\n      var u = r ? \"single-spa:no-app-change\" : \"single-spa:app-change\";\n      window.dispatchEvent(new e(u, a())), window.dispatchEvent(new e(\"single-spa:routing-event\", a()));\n    } catch (t) {\n      setTimeout(function () {\n        throw t;\n      });\n    }\n\n    if (xt = !1, Dt.length > 0) {\n      var c = Dt;\n      Dt = [], Ut(c);\n    }\n\n    return o;\n  }\n\n  function i() {\n    t.forEach(function (t) {\n      rt(t.eventArguments);\n    }), rt(n);\n  }\n\n  function a() {\n    var t = {\n      detail: {}\n    };\n    return n && n[0] && (t.detail.originalEvent = n[0]), t;\n  }\n}\n\nvar Ct = !1;\n\nfunction It() {\n  Ct = !0, Ut();\n}\n\nsetTimeout(function () {\n  Ct || console.warn(\"singleSpa.start() has not been called, \".concat(5e3, \"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start\"));\n}, 5e3);\nvar Lt = {\n  getRawAppData: function getRawAppData() {\n    return [].concat(wt);\n  },\n  reroute: Ut,\n  NOT_LOADED: p,\n  toLoadPromise: Z,\n  toBootstrapPromise: W,\n  unregisterApplication: function unregisterApplication(t) {\n    if (!wt.find(function (n) {\n      return n.name === t;\n    })) throw Error(\"Cannot unregister application '\".concat(t, \"' because no such application has been registered\"));\n    return St(t).then(function () {\n      var n = wt.findIndex(function (n) {\n        return n.name === t;\n      });\n      wt.splice(n, 1);\n    });\n  }\n};\nwindow && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Lt);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/single-spa/lib/esm/single-spa.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/esm/single-spa.min.js\");\n\n\nfunction addScript(url) {\n  var script = document.createElement(\"script\");\n  script.type = \"text/javascript\";\n  script.src = url;\n  document.body.appendChild(script);\n}\n\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"])('top', function () {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./apps/top.js */ \"./src/apps/top.js\"));\n}, function () {\n  return true;\n}, {\n  customProps: {}\n});\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"])('home', function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./apps/home.js */ \"./src/apps/home.js\"));\n}, function () {\n  return location.hash === '#home';\n}, {\n  customProps: {}\n});\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"])('content', function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./apps/content.js */ \"./src/apps/content.js\"));\n}, function () {\n  return location.hash === '#content';\n}, {\n  customProps: {}\n});\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"])('contact', function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./apps/contact.js */ \"./src/apps/contact.js\"));\n}, function () {\n  return location.hash === '#contact';\n}, {\n  customProps: {}\n});\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__[\"registerApplication\"])('app1', function () {\n  return new Promise(function (resolve) {\n    addScript('./app1.js');\n    setTimeout(function () {\n      console.log(window.app1Module);\n      resolve(window.app1Module);\n    }, 100);\n  });\n}, function () {\n  return location.hash.includes('#/app1');\n}, {\n  customProps: {}\n});\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });