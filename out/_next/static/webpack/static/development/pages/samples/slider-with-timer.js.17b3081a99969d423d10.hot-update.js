webpackHotUpdate("static/development/pages/samples/slider-with-timer.js",{

/***/ "./pages/samples/slider-with-timer/index.tsx":
/*!***************************************************!*\
  !*** ./pages/samples/slider-with-timer/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_samples_slider_with_timer_SliderWithTimer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/samples/slider-with-timer/SliderWithTimer */ "./components/samples/slider-with-timer/SliderWithTimer.tsx");
/* harmony import */ var _components_samples_slider_with_timer_ProgressBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/samples/slider-with-timer/ProgressBar */ "./components/samples/slider-with-timer/ProgressBar.tsx");









var _jsxFileName = "/Users/arakiken/works/mine/react-code-samples/pages/samples/slider-with-timer/index.tsx";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  font-size: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n\n  /* Color the border and text with theme.main */\n  color: ", ";\n  border: 2px solid ", ";\n  &:hover {\n    cursor: pointer;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  height: 500px;\n  width: 350px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  padding-top: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  width: 100%;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].section(_templateObject());
var VerticalPadding = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2(), function (props) {
  return props.padding;
});
var SliderBox = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject3());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button(_templateObject4(), function (props) {
  return props.theme.main;
}, function (props) {
  return props.theme.main;
});
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
      focus: {
        key: 1,
        state: _components_samples_slider_with_timer_ProgressBar__WEBPACK_IMPORTED_MODULE_12__["ProgressFocusedStates"].Running
      },
      progresses: [{
        key: 1,
        url: 'https://images.unsplash.com/photo-1558120343-2d140d454594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        subtitle: 'By Penguinuhh on Unsplash'
      }, {
        key: 2,
        url: 'https://images.unsplash.com/photo-1558118720-df4cd73fe6a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        subtitle: 'By Sven Brandsma on Unsplash'
      }, {
        key: 3,
        url: 'https://images.unsplash.com/photo-1557791137-cfd61182e7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
        subtitle: 'By Sua Song on Unsplash'
      }, {
        key: 4,
        url: 'https://images.unsplash.com/photo-1554629816-15083e43468a?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        subtitle: 'By Damon Lam on Unsplash'
      }]
    };
    _this.onSlideClick = _this.onSlideClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onPlayerClick = _this.onPlayerClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.animationEnded = _this.animationEnded.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "onSlideClick",
    value: function onSlideClick(direction) {
      var _this2 = this;

      return function () {
        var focus = _this2.state.focus;
        focus.state = _components_samples_slider_with_timer_ProgressBar__WEBPACK_IMPORTED_MODULE_12__["ProgressFocusedStates"].Running;
        var key = focus.key + direction;
        var progresses = _this2.state.progresses;

        if (key < 1) {
          focus.key = progresses.length;
        } else if (progresses.length < key) {
          focus.key = 1;
        } else {
          focus.key = key;
        }

        _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.state, {
          focus: focus
        }));
      };
    }
  }, {
    key: "onPlayerClick",
    value: function onPlayerClick() {
      var focus = this.state.focus;
      focus.state = Object(_components_samples_slider_with_timer_ProgressBar__WEBPACK_IMPORTED_MODULE_12__["toggleFocusedState"])(this.state.focus.state);
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state, {
        focus: focus
      }));
    }
  }, {
    key: "animationEnded",
    value: function animationEnded() {
      var focus = this.state.focus;
      var progresses = this.state.progresses;

      if (focus.key < progresses.length) {
        focus.key += 1;
      } else {
        focus.key = 1;
      }

      focus.state = _components_samples_slider_with_timer_ProgressBar__WEBPACK_IMPORTED_MODULE_12__["ProgressFocusedStates"].Running;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state, {
        focus: focus
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var timerSliderData = {};
      timerSliderData.handleAnimationEnded = this.animationEnded;
      timerSliderData.handlePlayerClick = this.onPlayerClick;
      timerSliderData.progresses = this.state.progresses;
      timerSliderData.focus = this.state.focus;
      timerSliderData.slideButtons = {
        handleLeftClick: this.onSlideClick(-1),
        handleRightClick: this.onSlideClick(1)
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(MainContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(VerticalPadding, {
        padding: "100px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SliderBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_samples_slider_with_timer_SliderWithTimer__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerSliderData, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=slider-with-timer.js.17b3081a99969d423d10.hot-update.js.map