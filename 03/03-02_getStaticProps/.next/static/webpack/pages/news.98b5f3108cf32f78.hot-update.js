"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\nvar __N_SSG = true;\nfunction News(param) {\n    var results = param.results;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Top Stories\"\n            }, void 0, false, {\n                fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-02_getStaticProps/pages/news/index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: result.title\n                        }, void 0, false, {\n                            fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-02_getStaticProps/pages/news/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, _this)\n                    }, result.uri, false, {\n                        fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-02_getStaticProps/pages/news/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-02_getStaticProps/pages/news/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-02_getStaticProps/pages/news/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n};\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNkM7O0FBRTlCLFNBQVNDLElBQUksQ0FBQyxLQUFTLEVBQUU7UUFBWCxPQUFRLEdBQVIsS0FBUyxDQUFSQyxPQUFPOztJQUNuQyxxQkFDRSw4REFBQ0YsMERBQU07OzBCQUNMLDhEQUFDRyxJQUFFOzBCQUFDLGFBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ0MsSUFBRTswQkFDQUYsT0FBTyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsTUFBTTt5Q0FDbEIsOERBQUNDLElBQUU7a0NBQ0gsNEVBQUNDLEdBQUM7NEJBQUNDLElBQUksRUFBQyxFQUFFO3NDQUVUSCxNQUFNLENBQUNJLEtBQUs7Ozs7O2lDQUNUO3VCQUpLSixNQUFNLENBQUNLLEdBQUc7Ozs7NkJBS2Q7aUJBQ04sQ0FBQzs7Ozs7b0JBQ0M7Ozs7OztZQUNFLENBQ1Q7Q0FDSDtBQWhCdUJWLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcz83YWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3Moe3Jlc3VsdHN9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5Ub3AgU3RvcmllczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cmVzdWx0LnVyaX0+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiPlxuXG4gICAgICAgICAge3Jlc3VsdC50aXRsZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBBUElfS0VZID0gXCJhMkdwMGJXR0N6ZWZjWEJCanp2cGxBcDBuVkV1YXZlZVwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBUaGUgdmFsdWUgb2YgdGhlIGBwcm9wc2Aga2V5IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBgSG9tZWAgY29tcG9uZW50XG4gIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92Mi9hcnRzLmpzb24/YXBpLWtleT0ke0FQSV9LRVl9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlc3VsdHM6IGRhdGEucmVzdWx0cyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIk5ld3MiLCJyZXN1bHRzIiwiaDEiLCJ1bCIsIm1hcCIsInJlc3VsdCIsImxpIiwiYSIsImhyZWYiLCJ0aXRsZSIsInVyaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/index.js\n");

/***/ })

});