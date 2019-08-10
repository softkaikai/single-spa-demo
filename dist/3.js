(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/apps/top.js":
/*!*************************!*\
  !*** ./src/apps/top.js ***!
  \*************************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrap\", function() { return bootstrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unmount\", function() { return unmount; });\nfunction bootstrap(props) {\n  return Promise.resolve().then(function () {\n    var customProps = props.customProps;\n    customProps.instance = Vue.extend({\n      template: '<div>this is top</div>'\n    });\n  });\n}\nfunction mount(props) {\n  return Promise.resolve().then(function () {\n    var customProps = props.customProps;\n    customProps.event = new customProps.eventConstructor();\n    customProps.globalEventDispatch.add('top', customProps.event);\n    customProps.event.on('mount', function () {\n      console.log('this is top');\n    });\n    customProps.event.trigger('mount');\n    customProps.globalEventDispatch.trigger('mount');\n    customProps.instance = new customProps.instance().$mount('#top');\n  });\n}\nfunction unmount(props) {\n  return Promise.resolve().then(function () {\n    var customProps = props.customProps;\n    customProps.globalEventDispatch.remove('top');\n    customProps.instance.$destroy();\n  });\n}\n\n//# sourceURL=webpack:///./src/apps/top.js?");

/***/ })

}]);