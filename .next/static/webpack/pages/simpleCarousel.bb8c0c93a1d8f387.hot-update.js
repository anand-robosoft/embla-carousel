"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/simpleCarousel",{

/***/ "./node_modules/embla-carousel-class-names/embla-carousel-class-names.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/embla-carousel-class-names/embla-carousel-class-names.esm.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClassNames; }\n/* harmony export */ });\n/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! embla-carousel */ \"./node_modules/embla-carousel/embla-carousel.esm.js\");\n\n\nvar defaultOptions = {\n  active: true,\n  breakpoints: {},\n  selected: 'is-selected',\n  draggable: 'is-draggable',\n  dragging: 'is-dragging'\n};\n\nfunction removeClass(node, className) {\n  var cl = node.classList;\n  if (className && cl.contains(className)) cl.remove(className);\n}\nfunction addClass(node, className) {\n  var cl = node.classList;\n  if (className && !cl.contains(className)) cl.add(className);\n}\n\nfunction ClassNames(userOptions) {\n  var optionsHandler = embla_carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].optionsHandler();\n  var optionsBase = optionsHandler.merge(defaultOptions, ClassNames.globalOptions);\n  var options;\n  var carousel;\n  var root;\n  var slides;\n  var selectedEvents = ['select', 'pointerUp'];\n  var draggingEvents = ['pointerDown', 'pointerUp'];\n\n  function init(embla) {\n    carousel = embla;\n    options = optionsHandler.atMedia(self.options);\n    root = carousel.rootNode();\n    slides = carousel.slideNodes();\n    var isDraggable = carousel.internalEngine().options.draggable;\n\n    if (isDraggable) {\n      addClass(root, options.draggable);\n    }\n\n    if (options.dragging) {\n      draggingEvents.forEach(function (evt) {\n        return carousel.on(evt, toggleDraggingClass);\n      });\n    }\n\n    if (options.selected) {\n      selectedEvents.forEach(function (evt) {\n        return carousel.on(evt, toggleSelectedClass);\n      });\n      toggleSelectedClass();\n    }\n  }\n\n  function destroy() {\n    removeClass(root, options.draggable);\n    draggingEvents.forEach(function (evt) {\n      return carousel.off(evt, toggleDraggingClass);\n    });\n    selectedEvents.forEach(function (evt) {\n      return carousel.off(evt, toggleSelectedClass);\n    });\n    slides.forEach(function (slide) {\n      return removeClass(slide, options.selected);\n    });\n  }\n\n  function toggleDraggingClass(evt) {\n    if (evt === 'pointerDown') addClass(root, options.dragging);else removeClass(root, options.dragging);\n  }\n\n  function toggleSelectedClass() {\n    var inView = carousel.slidesInView(true);\n    var notInView = carousel.slidesNotInView(true);\n    notInView.forEach(function (index) {\n      return removeClass(slides[index], options.selected);\n    });\n    inView.forEach(function (index) {\n      return addClass(slides[index], options.selected);\n    });\n  }\n\n  var self = {\n    name: 'classNames',\n    options: optionsHandler.merge(optionsBase, userOptions),\n    init: init,\n    destroy: destroy\n  };\n  return self;\n}\n\nClassNames.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-class-names.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtY2xhc3MtbmFtZXMvZW1ibGEtY2Fyb3VzZWwtY2xhc3MtbmFtZXMuZXNtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDOztBQUUzQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIscUVBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVpQztBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtY2xhc3MtbmFtZXMvZW1ibGEtY2Fyb3VzZWwtY2xhc3MtbmFtZXMuZXNtLmpzPzJmZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwnO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgYnJlYWtwb2ludHM6IHt9LFxuICBzZWxlY3RlZDogJ2lzLXNlbGVjdGVkJyxcbiAgZHJhZ2dhYmxlOiAnaXMtZHJhZ2dhYmxlJyxcbiAgZHJhZ2dpbmc6ICdpcy1kcmFnZ2luZydcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICB2YXIgY2wgPSBub2RlLmNsYXNzTGlzdDtcbiAgaWYgKGNsYXNzTmFtZSAmJiBjbC5jb250YWlucyhjbGFzc05hbWUpKSBjbC5yZW1vdmUoY2xhc3NOYW1lKTtcbn1cbmZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICB2YXIgY2wgPSBub2RlLmNsYXNzTGlzdDtcbiAgaWYgKGNsYXNzTmFtZSAmJiAhY2wuY29udGFpbnMoY2xhc3NOYW1lKSkgY2wuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIENsYXNzTmFtZXModXNlck9wdGlvbnMpIHtcbiAgdmFyIG9wdGlvbnNIYW5kbGVyID0gRW1ibGFDYXJvdXNlbC5vcHRpb25zSGFuZGxlcigpO1xuICB2YXIgb3B0aW9uc0Jhc2UgPSBvcHRpb25zSGFuZGxlci5tZXJnZShkZWZhdWx0T3B0aW9ucywgQ2xhc3NOYW1lcy5nbG9iYWxPcHRpb25zKTtcbiAgdmFyIG9wdGlvbnM7XG4gIHZhciBjYXJvdXNlbDtcbiAgdmFyIHJvb3Q7XG4gIHZhciBzbGlkZXM7XG4gIHZhciBzZWxlY3RlZEV2ZW50cyA9IFsnc2VsZWN0JywgJ3BvaW50ZXJVcCddO1xuICB2YXIgZHJhZ2dpbmdFdmVudHMgPSBbJ3BvaW50ZXJEb3duJywgJ3BvaW50ZXJVcCddO1xuXG4gIGZ1bmN0aW9uIGluaXQoZW1ibGEpIHtcbiAgICBjYXJvdXNlbCA9IGVtYmxhO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zSGFuZGxlci5hdE1lZGlhKHNlbGYub3B0aW9ucyk7XG4gICAgcm9vdCA9IGNhcm91c2VsLnJvb3ROb2RlKCk7XG4gICAgc2xpZGVzID0gY2Fyb3VzZWwuc2xpZGVOb2RlcygpO1xuICAgIHZhciBpc0RyYWdnYWJsZSA9IGNhcm91c2VsLmludGVybmFsRW5naW5lKCkub3B0aW9ucy5kcmFnZ2FibGU7XG5cbiAgICBpZiAoaXNEcmFnZ2FibGUpIHtcbiAgICAgIGFkZENsYXNzKHJvb3QsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kcmFnZ2luZykge1xuICAgICAgZHJhZ2dpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiBjYXJvdXNlbC5vbihldnQsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0ZWQpIHtcbiAgICAgIHNlbGVjdGVkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gY2Fyb3VzZWwub24oZXZ0LCB0b2dnbGVTZWxlY3RlZENsYXNzKTtcbiAgICAgIH0pO1xuICAgICAgdG9nZ2xlU2VsZWN0ZWRDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlQ2xhc3Mocm9vdCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGRyYWdnaW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgcmV0dXJuIGNhcm91c2VsLm9mZihldnQsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpO1xuICAgIH0pO1xuICAgIHNlbGVjdGVkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgcmV0dXJuIGNhcm91c2VsLm9mZihldnQsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpO1xuICAgIH0pO1xuICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKHNsaWRlLCBvcHRpb25zLnNlbGVjdGVkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZURyYWdnaW5nQ2xhc3MoZXZ0KSB7XG4gICAgaWYgKGV2dCA9PT0gJ3BvaW50ZXJEb3duJykgYWRkQ2xhc3Mocm9vdCwgb3B0aW9ucy5kcmFnZ2luZyk7ZWxzZSByZW1vdmVDbGFzcyhyb290LCBvcHRpb25zLmRyYWdnaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNlbGVjdGVkQ2xhc3MoKSB7XG4gICAgdmFyIGluVmlldyA9IGNhcm91c2VsLnNsaWRlc0luVmlldyh0cnVlKTtcbiAgICB2YXIgbm90SW5WaWV3ID0gY2Fyb3VzZWwuc2xpZGVzTm90SW5WaWV3KHRydWUpO1xuICAgIG5vdEluVmlldy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKHNsaWRlc1tpbmRleF0sIG9wdGlvbnMuc2VsZWN0ZWQpO1xuICAgIH0pO1xuICAgIGluVmlldy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGFkZENsYXNzKHNsaWRlc1tpbmRleF0sIG9wdGlvbnMuc2VsZWN0ZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbmFtZTogJ2NsYXNzTmFtZXMnLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNIYW5kbGVyLm1lcmdlKG9wdGlvbnNCYXNlLCB1c2VyT3B0aW9ucyksXG4gICAgaW5pdDogaW5pdCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5DbGFzc05hbWVzLmdsb2JhbE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1ibGEtY2Fyb3VzZWwtY2xhc3MtbmFtZXMuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/embla-carousel-class-names/embla-carousel-class-names.esm.js\n"));

/***/ }),

/***/ "./pages/simpleCarousel.tsx":
/*!**********************************!*\
  !*** ./pages/simpleCarousel.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel-react */ \"./node_modules/embla-carousel-react/embla-carousel-react.esm.js\");\n/* harmony import */ var embla_carousel_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel-class-names */ \"./node_modules/embla-carousel-class-names/embla-carousel-class-names.esm.js\");\n/* harmony import */ var _styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/SimpleCarousel.module.css */ \"./styles/SimpleCarousel.module.css\");\n/* harmony import */ var _styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SimpleCarousel = ()=>{\n    _s();\n    // const [emblaRef] = useEmblaCarousel({ loop: true, inViewThreshold: 2 }, [Autoplay()], [ClassNames()])\n    const [emblaRef] = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        loop: true,\n        slidesToScroll: \"auto\"\n    }, [\n        (0,embla_carousel_class_names__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4___default().embla),\n        ref: emblaRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4___default().embla__container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4___default().embla__slide),\n                    children: \"Slide 1\"\n                }, void 0, false, {\n                    fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/simpleCarousel.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4___default().embla__slide),\n                    children: \"Slide 2\"\n                }, void 0, false, {\n                    fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/simpleCarousel.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_SimpleCarousel_module_css__WEBPACK_IMPORTED_MODULE_4___default().embla__slide),\n                    children: \"Slide 3\"\n                }, void 0, false, {\n                    fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/simpleCarousel.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/simpleCarousel.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anandkaruppusamy/Desktop/Anand/anand_git/embla-carousel/pages/simpleCarousel.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SimpleCarousel, \"BN2vR/vl7fsLhdJTsv9iP0ZFN38=\", false, function() {\n    return [\n        embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SimpleCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleCarousel);\nvar _c;\n$RefreshReg$(_c, \"SimpleCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaW1wbGVDYXJvdXNlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQzBCO0FBRUE7QUFDSztBQUV4RCxNQUFNSSxpQkFBaUIsSUFBTTs7SUFDM0Isd0dBQXdHO0lBQ3hHLE1BQU0sQ0FBQ0MsU0FBUyxHQUFHSixnRUFBZ0JBLENBQUM7UUFBRUssTUFBTSxJQUFJO1FBQUVDLGdCQUFnQjtJQUFPLEdBQUc7UUFBQ0wsc0VBQVVBO0tBQUc7SUFFMUYscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdOLGdGQUFZO1FBQUVRLEtBQUtOO2tCQUNqQyw0RUFBQ0c7WUFBSUMsV0FBV04sMkZBQXVCOzs4QkFDckMsOERBQUNLO29CQUFJQyxXQUFXTix1RkFBbUI7OEJBQUU7Ozs7Ozs4QkFDckMsOERBQUNLO29CQUFJQyxXQUFXTix1RkFBbUI7OEJBQUU7Ozs7Ozs4QkFDckMsOERBQUNLO29CQUFJQyxXQUFXTix1RkFBbUI7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0dBYk1DOztRQUVlSCw0REFBZ0JBOzs7S0FGL0JHO0FBZU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2ltcGxlQ2Fyb3VzZWwudHN4P2FhY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZUVtYmxhQ2Fyb3VzZWwgZnJvbSAnZW1ibGEtY2Fyb3VzZWwtcmVhY3QnXG5pbXBvcnQgQXV0b3BsYXkgZnJvbSAnZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXknXG5pbXBvcnQgQ2xhc3NOYW1lcyBmcm9tICdlbWJsYS1jYXJvdXNlbC1jbGFzcy1uYW1lcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1NpbXBsZUNhcm91c2VsLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFNpbXBsZUNhcm91c2VsID0gKCkgPT4ge1xuICAvLyBjb25zdCBbZW1ibGFSZWZdID0gdXNlRW1ibGFDYXJvdXNlbCh7IGxvb3A6IHRydWUsIGluVmlld1RocmVzaG9sZDogMiB9LCBbQXV0b3BsYXkoKV0sIFtDbGFzc05hbWVzKCldKVxuICBjb25zdCBbZW1ibGFSZWZdID0gdXNlRW1ibGFDYXJvdXNlbCh7IGxvb3A6IHRydWUsIHNsaWRlc1RvU2Nyb2xsOiAnYXV0bycgfSwgW0NsYXNzTmFtZXMoKV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYmxhfSByZWY9e2VtYmxhUmVmfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGFfX2NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGFfX3NsaWRlfT5TbGlkZSAxPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGFfX3NsaWRlfT5TbGlkZSAyPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1ibGFfX3NsaWRlfT5TbGlkZSAzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVDYXJvdXNlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFbWJsYUNhcm91c2VsIiwiQ2xhc3NOYW1lcyIsInN0eWxlcyIsIlNpbXBsZUNhcm91c2VsIiwiZW1ibGFSZWYiLCJsb29wIiwic2xpZGVzVG9TY3JvbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJlbWJsYSIsInJlZiIsImVtYmxhX19jb250YWluZXIiLCJlbWJsYV9fc2xpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/simpleCarousel.tsx\n"));

/***/ })

});