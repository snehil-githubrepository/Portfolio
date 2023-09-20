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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), "\uD83D\uDCCC UG at Vellore Institute of Technology. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 51
      }, _this), "\uD83D\uDCCC B.Tech in Computer Science & Engineering. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 54
      }, _this), "\uD83D\uDCCC I expertise in React.js and Next.js, creating dynamic and user-friendly applications. Proficient in the MERN stack ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 66
      }, _this), "\uD83D\uDCCCI excel in database design, RESTful APIs, and front-end development. I prioritize clean code, continuous learning, and knowledge sharing through blogging.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), "\uD83D\uDCCC Let's collaborate and bring your web projects to life! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 67
      }, _this), "\uD83D\uDCCC Proficient in C++, Javascript, React, Node, Next", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          fontFamily: "-moz-initial",
          fontSize: "3.5rem"
        },
        children: "CGPA = 8.4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          fontStyle: "oblique",
          fontWeight: "bold"
        },
        children: [" ", "Links to My DSA skills"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
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
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
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
          lineNumber: 97,
          columnNumber: 21
        }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 74
        }, _this), "Email :", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#6495ED"
          },
          children: "isnehilsharma@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), "Phone : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "#DFFF00"
          },
          children: "+91-62660-87619"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }, _this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVGltZWxpbmUiLCJ1c2VTdGF0ZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwiVGltZUxpbmVEYXRhIiwibGVuZ3RoIiwic2Nyb2xsIiwiaGFuZGxlU2Nyb2xsIiwiaW5kZXgiLCJyb3VuZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsK0NBQVEsQ0FBQyxDQUFELENBRHZCO0FBQUEsTUFDZEMsVUFEYztBQUFBLE1BQ0ZDLGFBREU7O0FBRXJCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUIsQ0FGcUIsQ0FJckI7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzVCRCxLQUFDLENBQUNFLGNBQUY7O0FBRUEsUUFBSUwsV0FBVyxDQUFDTSxPQUFoQixFQUF5QjtBQUN2QixVQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUNqQlQsV0FBVyxDQUFDTSxPQUFaLENBQW9CSSxXQUFwQixHQUFrQyxHQUFsQyxJQUF5Q04sQ0FBQyxHQUFHTyxZQUFZLENBQUNDLE1BQTFELENBRGlCLENBQW5CO0FBSUFDLFlBQU0sQ0FBQ2IsV0FBVyxDQUFDTSxPQUFiLEVBQXNCQyxVQUF0QixDQUFOO0FBQ0Q7QUFDRixHQVZEOztBQVlBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSWQsV0FBVyxDQUFDTSxPQUFoQixFQUF5QjtBQUN2QixVQUFNUyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUNYaEIsV0FBVyxDQUFDTSxPQUFaLENBQW9CQyxVQUFwQixJQUNFUCxXQUFXLENBQUNNLE9BQVosQ0FBb0JJLFdBQXBCLEdBQWtDLEdBRHBDLENBQUQsR0FFRUMsWUFBWSxDQUFDQyxNQUhILENBQWQ7QUFNQWIsbUJBQWEsQ0FBQ2dCLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FWRCxDQXBCcUIsQ0FnQ3JCO0FBQ0E7OztBQUNBRSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCTCxZQUFNLENBQUNiLFdBQVcsQ0FBQ00sT0FBYixFQUFzQixDQUF0QixDQUFOO0FBQ0QsS0FGRDs7QUFJQWEsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0YsWUFBbEM7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0UsOERBQUMsNkRBQUQ7QUFBUyxNQUFFLEVBQUMsT0FBWjtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxpRUFBRDtBQUFhLFdBQUssRUFBRTtBQUFFRyxrQkFBVSxFQUFFO0FBQWQsT0FBcEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsdUVBRzRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFINUMsMEVBSStDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKL0MsbUpBTTJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOM0QseUxBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLHVGQVc0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWDVELGdGQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRixlQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQWdCRTtBQUFNLGFBQUssRUFBRTtBQUFFQSxvQkFBVSxFQUFFLGNBQWQ7QUFBOEJDLGtCQUFRLEVBQUU7QUFBeEMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGLGVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRixlQXNCRTtBQUFNLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLFNBQWI7QUFBd0JDLG9CQUFVLEVBQUU7QUFBcEMsU0FBYjtBQUFBLG1CQUNHLEdBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLEVBeUJVLEdBekJWLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkYsZUEyQkUsOERBQUMsNkRBQUQ7QUFBYSxZQUFJLEVBQUMsOEJBQWxCO0FBQUEsZ0NBQ0U7QUFBTSxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCRixlQStCRSw4REFBQyw2REFBRDtBQUFhLFlBQUksRUFBQyw2Q0FBbEI7QUFBQSxnQ0FDRTtBQUFNLGVBQUssRUFBRTtBQUFFQSxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JGLGVBbUNFLDhEQUFDLDZEQUFEO0FBQWEsWUFBSSxFQUFDLDJDQUFsQjtBQUFBLCtCQUNFO0FBQU0sZUFBSyxFQUFFO0FBQUVBLGlCQUFLLEVBQUU7QUFBVCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DRixlQXNDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENGLGVBdUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0YsZUF3Q0U7QUFBTSxhQUFLLEVBQUU7QUFBRUYsbUJBQVMsRUFBRTtBQUFiLFNBQWI7QUFBQSw4Q0FDWTtBQUFNLGVBQUssRUFBRTtBQUFFRSxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWixvQkFDaUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEakUsYUFFVSxHQUZWLGVBR0U7QUFBTSxlQUFLLEVBQUU7QUFBRUEsaUJBQUssRUFBRTtBQUFULFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFHb0UsR0FIcEUsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLDJCQUtVO0FBQU0sZUFBSyxFQUFFO0FBQUVBLGlCQUFLLEVBQUU7QUFBVCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxWLEVBS29FLEdBTHBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQW1ERSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdURELENBakdEOztHQUFNN0IsUTs7S0FBQUEsUTtBQW1HTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZjlhMDllNDdkNDRkMGFlZTdlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTb2NpYWxJY29ucyB9IGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyU3R5bGVzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRleHQsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXHJcbiAgICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICpcclxuICAgICAgICAgIFRpbWVMaW5lRGF0YS5sZW5ndGhcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcclxuICAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxyXG5cclxuICAgICAgPFNlY3Rpb25UZXh0IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiY3Vyc2l2ZVwiIH19PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIPCfk4wgVUcgYXQgVmVsbG9yZSBJbnN0aXR1dGUgb2YgVGVjaG5vbG9neS4gPGJyIC8+XHJcbiAgICAgICAg8J+TjCBCLlRlY2ggaW4gQ29tcHV0ZXIgU2NpZW5jZSAmIEVuZ2luZWVyaW5nLiA8YnIgLz5cclxuICAgICAgICDwn5OMIEkgZXhwZXJ0aXNlIGluIFJlYWN0LmpzIGFuZCBOZXh0LmpzLCBjcmVhdGluZyBkeW5hbWljIGFuZFxyXG4gICAgICAgIHVzZXItZnJpZW5kbHkgYXBwbGljYXRpb25zLiBQcm9maWNpZW50IGluIHRoZSBNRVJOIHN0YWNrIDxiciAvPlxyXG4gICAgICAgIPCfk4xJIGV4Y2VsIGluIGRhdGFiYXNlIGRlc2lnbiwgUkVTVGZ1bCBBUElzLCBhbmQgZnJvbnQtZW5kIGRldmVsb3BtZW50LiBJXHJcbiAgICAgICAgcHJpb3JpdGl6ZSBjbGVhbiBjb2RlLCBjb250aW51b3VzIGxlYXJuaW5nLCBhbmQga25vd2xlZGdlIHNoYXJpbmdcclxuICAgICAgICB0aHJvdWdoIGJsb2dnaW5nLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIPCfk4wgTGV0J3MgY29sbGFib3JhdGUgYW5kIGJyaW5nIHlvdXIgd2ViIHByb2plY3RzIHRvIGxpZmUhIDxiciAvPlxyXG4gICAgICAgIPCfk4wgUHJvZmljaWVudCBpbiBDKyssIEphdmFzY3JpcHQsIFJlYWN0LCBOb2RlLCBOZXh0XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udEZhbWlseTogXCItbW96LWluaXRpYWxcIiwgZm9udFNpemU6IFwiMy41cmVtXCIgfX0+XHJcbiAgICAgICAgICBDR1BBID0gOC40XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTdHlsZTogXCJvYmxpcXVlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgTGlua3MgdG8gTXkgRFNBIHNraWxsc1xyXG4gICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2xlZXRjb2RlLmNvbS9TTjNISUwvXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRkZGRjAwXCIgfX0+8J+TjCBMZWV0Q29kZTwvc3Bhbj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2F1dGguZ2Vla3Nmb3JnZWVrcy5vcmcvdXNlci9zbjNoaWwvXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMzlGRjE0XCIgfX0+8J+TjCBHZWVrc0ZvckdlZWtzPC9zcGFuPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS91c2Vycy9zbmVoaWxfODgwXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjQTA1MjJEXCIgfX0+8J+TjCBDb2RlY2hlZjwvc3Bhbj5cclxuICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9fT5cclxuICAgICAgICAgIEFkZHJlc3MgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjM2ViNDg5XCIgfX0+VklUIEhvc3RlbDwvc3Bhbj4gPGJyIC8+XHJcbiAgICAgICAgICBFbWFpbCA6e1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzY0OTVFRFwiIH19PmlzbmVoaWxzaGFybWFAZ21haWwuY29tPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgUGhvbmUgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjREZGRjAwXCIgfX0+KzkxLTYyNjYwLTg3NjE5PC9zcGFuPntcIiBcIn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==