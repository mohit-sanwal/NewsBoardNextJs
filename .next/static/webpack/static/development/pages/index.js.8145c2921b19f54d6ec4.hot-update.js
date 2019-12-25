webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_StoryList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/StoryList */ "./components/StoryList.jsx");






var _jsxFileName = "/home/mohits/Desktop/m/p1w1a1/news-next-pwa/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
          console.log("service worker register success", registration);
        })["catch"](function (err) {
          console.log("service worker register fail", err.message);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          page = _this$props.page;

      if (!stories.length) {
        return __jsx(next_error__WEBPACK_IMPORTED_MODULE_9___default.a, {
          status: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        });
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Hacker Clone",
        description: "A hacker news clone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_StoryList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stories: stories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("footer", {
        className: "jsx-2156823782",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/?page=".concat(page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2156823782",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Next Page (", page + 1, ")"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2156823782",
        __self: this
      }, "footer.jsx-2156823782{padding:1em;}footer.jsx-2156823782 a.jsx-2156823782{font-weight:bold;color:black;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGl0cy9EZXNrdG9wL20vcDF3MWExL25ld3MtbmV4dC1wd2EvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFHeUIsQUFHSyxZQUZuQixLQUdjLFlBQ1Msa0RBQ3ZCIiwiZmlsZSI6Ii9ob21lL21vaGl0cy9EZXNrdG9wL20vcDF3MWExL25ld3MtbmV4dC1wd2EvcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1N0b3J5TGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkge1xuICAgIGxldCBzdG9yaWVzO1xuICAgIGxldCBwYWdlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHBhZ2UgPSBOdW1iZXIocXVlcnkucGFnZSkgfHwgMTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL25ld3M/cGFnZT0ke3BhZ2V9YFxuICAgICAgKTtcblxuICAgICAgc3RvcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICBzdG9yaWVzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RvcmllcywgcGFnZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlIHdvcmtlciByZWdpc3RlciBzdWNjZXNzXCIsIHJlZ2lzdHJhdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmljZSB3b3JrZXIgcmVnaXN0ZXIgZmFpbFwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JpZXMsIHBhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXN0b3JpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1cz17NTAzfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB0aXRsZT1cIkhhY2tlciBDbG9uZVwiIGRlc2NyaXB0aW9uPVwiQSBoYWNrZXIgbmV3cyBjbG9uZVwiPlxuICAgICAgICA8U3RvcnlMaXN0IHN0b3JpZXM9e3N0b3JpZXN9IC8+XG5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSArIDF9YH0+XG4gICAgICAgICAgICA8YT5OZXh0IFBhZ2UgKHtwYWdlICsgMX0pPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9mb290ZXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/mohits/Desktop/m/p1w1a1/news-next-pwa/pages/index.jsx */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, res, query, stories, page, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, res = _ref.res, query = _ref.query;
              _context.prev = 1;
              page = Number(query.page) || 1;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page)));

            case 5:
              response = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 8:
              stories = _context.sent;
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              stories = [];

            case 15:
              return _context.abrupt("return", {
                stories: stories,
                page: page
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 11]]);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.8145c2921b19f54d6ec4.hot-update.js.map