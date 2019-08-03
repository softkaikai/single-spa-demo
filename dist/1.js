(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/apps/content.js":
/*!*****************************!*\
  !*** ./src/apps/content.js ***!
  \*****************************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrap\", function() { return bootstrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unmount\", function() { return unmount; });\nfunction bootstrap(props) {\n  return Promise.resolve().then(function () {\n    var customProps = props.customProps;\n    customProps.component = Vue.extend({\n      template: '<div>this is content</div>'\n    });\n  });\n}\nfunction mount(props) {\n  return Promise.resolve().then(function () {\n    var customProps = props.customProps;\n    customProps.instance = new customProps.component().$mount('');\n    var dom = document.getElementById('app');\n    dom.innerHTML = '';\n    dom.appendChild(customProps.instance.$el);\n  });\n}\nfunction unmount(props) {\n  return Promise.resolve().then(function () {\n    var customProps = props.customProps;\n    customProps.instance.$destroy();\n  });\n}\n\n//# sourceURL=webpack:///./src/apps/content.js?");

/***/ })

}]);