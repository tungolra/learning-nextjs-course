"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[query]",{

/***/ "./pages/news/[query].js":
/*!*******************************!*\
  !*** ./pages/news/[query].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\nvar __N_SSP = true;\nfunction News(param) {\n    var results = param.results;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-05_getServerSideProps/pages/news/[query].js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: result.url,\n                            target: \"_blank\",\n                            children: result.title\n                        }, void 0, false, {\n                            fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-05_getServerSideProps/pages/news/[query].js\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, _this)\n                    }, result.uri, false, {\n                        fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-05_getServerSideProps/pages/news/[query].js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-05_getServerSideProps/pages/news/[query].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rtungol/Developer/Tutorials/learning-nextjs-course/03/03-05_getServerSideProps/pages/news/[query].js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1txdWVyeV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2Qzs7QUFHOUIsU0FBU0MsSUFBSSxDQUFDLEtBQVcsRUFBRTtRQUFiLE9BQVMsR0FBVCxLQUFXLENBQVRDLE9BQU87O0lBQ3BDLHFCQUNFLDhEQUFDRiwwREFBTTs7MEJBQ0wsOERBQUNHLElBQUU7MEJBQUMsUUFBTTs7Ozs7b0JBQUs7MEJBQ2YsOERBQUNDLElBQUU7MEJBQ0FGLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLE1BQU0sRUFBSztvQkFDdkIscUJBQ0UsOERBQUNDLElBQUU7a0NBQ0QsNEVBQUNDLEdBQUM7NEJBQUNDLElBQUksRUFBRUgsTUFBTSxDQUFDSSxHQUFHOzRCQUFFQyxNQUFNLEVBQUMsUUFBUTtzQ0FDakNMLE1BQU0sQ0FBQ00sS0FBSzs7Ozs7aUNBQ1g7dUJBSEdOLE1BQU0sQ0FBQ08sR0FBRzs7Ozs2QkFJZCxDQUNMO2lCQUNILENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDRSxDQUNUO0NBQ0g7QUFqQnVCWixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW3F1ZXJ5XS5qcz85Yjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBzZWFyY2ggfSBmcm9tIFwiLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoeyByZXN1bHRzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPlNlYXJjaDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3VsdC51cml9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0LnRpdGxlfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuY29uc3QgQVBJX0tFWSA9IFwiYTJHcDBiV0dDemVmY1hCQmp6dnBsQXAwblZFdWF2ZWVcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuICAvLyBUaGUgdmFsdWUgb2YgdGhlIGBwcm9wc2Aga2V5IHdpbGwgYmVcbiAgLy8gIHBhc3NlZCB0byB0aGUgYEhvbWVgIGNvbXBvbmVudFxuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT0ke3BhcmFtcy5xdWVyeX0mYXBpLWtleT0ke0FQSV9LRVl9YDtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHNlYXJjaChVUkwpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBcbiAgICAgIFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTmV3cyIsInJlc3VsdHMiLCJoMSIsInVsIiwibWFwIiwicmVzdWx0IiwibGkiLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsInRpdGxlIiwidXJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/[query].js\n");

/***/ })

});