self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Snehil\\fastWork\\Portfolio\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: "smooth" });
  // };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      style: {
        fontFamily: "cursive"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), "\uD83D\uDCCC UG at Vellore Institute of Technology. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 51
      }, _this), "\uD83D\uDCCC B.Tech in Computer Science & Engineering. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 54
      }, _this), "\uD83D\uDCCC I expertise in React.js and Next.js, creating dynamic and user-friendly applications. Proficient in the MERN stack ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 66
      }, _this), "\uD83D\uDCCCI excel in database design, RESTful APIs, and front-end development. I prioritize clean code, continuous learning, and knowledge sharing through blogging.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), "\uD83D\uDCCC Let's collaborate and bring your web projects to life! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 67
      }, _this), "\uD83D\uDCCC Proficient in C++, Javascript, React, Node, Next", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          fontFamily: "-moz-initial",
          fontSize: "3.5rem"
        },
        children: "CGPA = 8.4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          fontStyle: "oblique",
          fontWeight: "bold"
        },
        children: [" ", "Links to My DSA skills"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
        href: "https://leetcode.com/SN3HIL/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#FFFF00"
          },
          children: "\uD83D\uDCCC LeetCode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
        href: "https://auth.geeksforgeeks.org/user/sn3hil/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#39FF14"
          },
          children: "\uD83D\uDCCC GeeksForGeeks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
        href: "https://www.codechef.com/users/snehil_880",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#A0522D"
          },
          children: "\uD83D\uDCCC Codechef"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          fontStyle: "italic"
        },
        children: ["Address : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#3eb489"
          },
          children: "VIT Hostel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 74
        }, _this), "Email :", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#6495ED"
          },
          children: "isnehilsharma@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), "Phone : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#DFFF00"
          },
          children: "+91-62660-87619"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 19
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVGltZWxpbmUiLCJ1c2VTdGF0ZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwiVGltZUxpbmVEYXRhIiwibGVuZ3RoIiwic2Nyb2xsIiwiaGFuZGxlU2Nyb2xsIiwiaW5kZXgiLCJyb3VuZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsK0NBQVEsQ0FBQyxDQUFELENBRHZCO0FBQUEsTUFDZEMsVUFEYztBQUFBLE1BQ0ZDLGFBREU7O0FBRXJCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUIsQ0FGcUIsQ0FJckI7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzVCRCxLQUFDLENBQUNFLGNBQUY7O0FBRUEsUUFBSUwsV0FBVyxDQUFDTSxPQUFoQixFQUF5QjtBQUN2QixVQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUNqQlQsV0FBVyxDQUFDTSxPQUFaLENBQW9CSSxXQUFwQixHQUFrQyxHQUFsQyxJQUF5Q04sQ0FBQyxHQUFHTyxZQUFZLENBQUNDLE1BQTFELENBRGlCLENBQW5C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RTtBQUFNLGVBQUssRUFBRTtBQUFFQSxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQ0YsZUFxQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJDRixlQXNDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENGLGVBdUNFO0FBQU0sYUFBSyxFQUFFO0FBQUVGLG1CQUFTLEVBQUU7QUFBYixTQUFiO0FBQUEsOENBQ1k7QUFBTSxlQUFLLEVBQUU7QUFBRUUsaUJBQUssRUFBRTtBQUFULFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFosb0JBQ2lFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGpFLGFBRVUsR0FGVixlQUdFO0FBQU0sZUFBSyxFQUFFO0FBQUVBLGlCQUFLLEVBQUU7QUFBVCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBR29FLEdBSHBFLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRiwyQkFLVTtBQUFNLGVBQUssRUFBRTtBQUFFQSxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMVixFQUtvRSxHQUxwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFrREUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQWhHRDs7R0FBTTdCLFE7O0tBQUFBLFE7QUFrR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTQ2NjQ5ZjU4ZThlMThlOTlkYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclN0eWxlc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UZXh0LFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAvLyAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgL1xyXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXHJcbiAgICAgICAgICBUaW1lTGluZURhdGEubGVuZ3RoXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cclxuXHJcbiAgICAgIDxTZWN0aW9uVGV4dCBzdHlsZT17eyBmb250RmFtaWx5OiBcImN1cnNpdmVcIiB9fT5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICDwn5OMIFVHIGF0IFZlbGxvcmUgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3kuIDxiciAvPlxyXG4gICAgICAgIPCfk4wgQi5UZWNoIGluIENvbXB1dGVyIFNjaWVuY2UgJiBFbmdpbmVlcmluZy4gPGJyIC8+XHJcbiAgICAgICAg8J+TjCBJIGV4cGVydGlzZSBpbiBSZWFjdC5qcyBhbmQgTmV4dC5qcywgY3JlYXRpbmcgZHluYW1pYyBhbmRcclxuICAgICAgICB1c2VyLWZyaWVuZGx5IGFwcGxpY2F0aW9ucy4gUHJvZmljaWVudCBpbiB0aGUgTUVSTiBzdGFjayA8YnIgLz5cclxuICAgICAgICDwn5OMSSBleGNlbCBpbiBkYXRhYmFzZSBkZXNpZ24sIFJFU1RmdWwgQVBJcywgYW5kIGZyb250LWVuZCBkZXZlbG9wbWVudC4gSVxyXG4gICAgICAgIHByaW9yaXRpemUgY2xlYW4gY29kZSwgY29udGludW91cyBsZWFybmluZywgYW5kIGtub3dsZWRnZSBzaGFyaW5nXHJcbiAgICAgICAgdGhyb3VnaCBibG9nZ2luZy5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDwn5OMIExldCdzIGNvbGxhYm9yYXRlIGFuZCBicmluZyB5b3VyIHdlYiBwcm9qZWN0cyB0byBsaWZlISA8YnIgLz5cclxuICAgICAgICDwn5OMIFByb2ZpY2llbnQgaW4gQysrLCBKYXZhc2NyaXB0LCBSZWFjdCwgTm9kZSwgTmV4dFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiLW1vei1pbml0aWFsXCIsIGZvbnRTaXplOiBcIjMuNXJlbVwiIH19PlxyXG4gICAgICAgICAgQ0dQQSA9IDguNFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U3R5bGU6IFwib2JsaXF1ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIExpbmtzIHRvIE15IERTQSBza2lsbHNcclxuICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9sZWV0Y29kZS5jb20vU04zSElML1wiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0ZGRkYwMFwiIH19PvCfk4wgTGVldENvZGU8L3NwYW4+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9hdXRoLmdlZWtzZm9yZ2Vla3Mub3JnL3VzZXIvc24zaGlsL1wiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzM5RkYxNFwiIH19PvCfk4wgR2Vla3NGb3JHZWVrczwvc3Bhbj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5jb2RlY2hlZi5jb20vdXNlcnMvc25laGlsXzg4MFwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0EwNTIyRFwiIH19PvCfk4wgQ29kZWNoZWY8L3NwYW4+XHJcbiAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U3R5bGU6IFwiaXRhbGljXCIgfX0+XHJcbiAgICAgICAgICBBZGRyZXNzIDogPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzNlYjQ4OVwiIH19PlZJVCBIb3N0ZWw8L3NwYW4+IDxiciAvPlxyXG4gICAgICAgICAgRW1haWwgOntcIiBcIn1cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM2NDk1RURcIiB9fT5pc25laGlsc2hhcm1hQGdtYWlsLmNvbTwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIFBob25lIDogPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0RGRkYwMFwiIH19Pis5MS02MjY2MC04NzYxOTwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=