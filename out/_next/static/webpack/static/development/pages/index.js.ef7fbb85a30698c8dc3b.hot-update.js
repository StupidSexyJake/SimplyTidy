webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BookingModal.js":
/*!************************************!*\
  !*** ./components/BookingModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/Stepper/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/Step/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
var _jsxFileName = "C:\\Google Drive\\Shared\\Simply Tidy\\Website\\public-website\\components\\BookingModal.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Material components





 // Custom components


var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      height: '90vh',
      background: theme.palette.grey[200]
    },
    container: {
      paddingTop: '2rem'
    }
  };
});

function getSteps() {
  return ['Choose Your Service', 'Select A Date', 'Confirm & Pay'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';

    case 1:
      return 'What is an ad group anyways?';

    case 2:
      return 'This is the bit I really care about!';

    default:
      return 'Uknown stepIndex';
  }
}

function BookingForm() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = getSteps();

  function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  }

  function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    activeStep: activeStep,
    alternativeLabel: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, steps.map(function (label) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, label));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "All steps completed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    onClick: handleReset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Reset")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, getStepContent(activeStep)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.backButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next'))))));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/Step/Step.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Step/Step.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8,
    '&:first-child': {
      paddingLeft: 0
    },
    '&:last-child': {
      paddingRight: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  },

  /* Styles applied to the root element if `completed={true}`. */
  completed: {}
};
exports.styles = styles;

function Step(props) {
  var _classNames;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      connector = props.connector,
      disabled = props.disabled,
      index = props.index,
      last = props.last,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties2.default)(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "index", "last", "orientation"]);
  var className = (0, _classnames.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.alternativeLabel, alternativeLabel), (0, _defineProperty2.default)(_classNames, classes.completed, completed), _classNames), classNameProp);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: className
  }, other), connector && alternativeLabel && index !== 0 && _react.default.cloneElement(connector, {
    orientation: orientation,
    alternativeLabel: alternativeLabel,
    index: index,
    active: active,
    completed: completed,
    disabled: disabled
  }), _react.default.Children.map(children, function (child) {
    if (!_react.default.isValidElement(child)) {
      return null;
    }

     true ? (0, _warning.default)(child.type !== _react.default.Fragment, ["Material-UI: the Step component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : undefined;
    return _react.default.cloneElement(child, (0, _extends2.default)({
      active: active,
      alternativeLabel: alternativeLabel,
      completed: completed,
      disabled: disabled,
      last: last,
      icon: index + 1,
      orientation: orientation
    }, child.props));
  }));
}

 true ? Step.propTypes = {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes.default.bool,

  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes.default.bool,

  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes.default.bool,

  /**
   * @ignore
   * Passed down from Stepper if alternativeLabel is also set.
   */
  connector: _propTypes.default.element,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   * Used internally for numbering.
   */
  index: _propTypes.default.number,

  /**
   * @ignore
   */
  last: _propTypes.default.bool,

  /**
   * @ignore
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical'])
} : undefined;
Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStep'
})(Step);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Step/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/Step/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Step.default;
  }
});

var _Step = _interopRequireDefault(__webpack_require__(/*! ./Step */ "./node_modules/@material-ui/core/Step/Step.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/StepConnector/StepConnector.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/StepConnector/StepConnector.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto'
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: '0 0 8px'
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: 'absolute',
      top: 8 + 4,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)'
    },

    /* Styles applied to the root element if `active={true}`. */
    active: {},

    /* Styles applied to the root element if `completed={true}`. */
    completed: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the line element. */
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24
    }
  };
};

exports.styles = styles;

function StepConnector(props) {
  var _classNames, _classNames2;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      index = props.index,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties2.default)(props, ["active", "alternativeLabel", "classes", "className", "completed", "disabled", "index", "orientation"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.alternativeLabel, alternativeLabel), (0, _defineProperty2.default)(_classNames, classes.active, active), (0, _defineProperty2.default)(_classNames, classes.completed, completed), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp)
  }, other), _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.line, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.lineHorizontal, orientation === 'horizontal'), (0, _defineProperty2.default)(_classNames2, classes.lineVertical, orientation === 'vertical'), _classNames2))
  }));
}

 true ? StepConnector.propTypes = {
  /**
   * @ignore
   */
  active: _propTypes.default.bool,

  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  completed: _propTypes.default.bool,

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   */
  index: _propTypes.default.number,

  /**
   * @ignore
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical'])
} : undefined;
StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStepConnector'
})(StepConnector);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/StepConnector/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/StepConnector/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _StepConnector.default;
  }
});

var _StepConnector = _interopRequireDefault(__webpack_require__(/*! ./StepConnector */ "./node_modules/@material-ui/core/StepConnector/StepConnector.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/StepIcon/StepIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/StepIcon/StepIcon.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircle = _interopRequireDefault(__webpack_require__(/*! ../internal/svg-icons/CheckCircle */ "./node_modules/@material-ui/core/internal/svg-icons/CheckCircle.js"));

var _Warning = _interopRequireDefault(__webpack_require__(/*! ../internal/svg-icons/Warning */ "./node_modules/@material-ui/core/internal/svg-icons/Warning.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ../SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/index.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      color: theme.palette.text.disabled,
      '&$active': {
        color: theme.palette.primary.main
      },
      '&$completed': {
        color: theme.palette.primary.main
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    },

    /* Styles applied to the root element if `active={true}`. */
    active: {},

    /* Styles applied to the root element if `completed={true}`. */
    completed: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {}
  };
};

exports.styles = styles;

var _ref = _react.default.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "12"
});

function StepIcon(props) {
  var completed = props.completed,
      icon = props.icon,
      active = props.active,
      error = props.error,
      classes = props.classes;

  if (typeof icon === 'number' || typeof icon === 'string') {
    if (error) {
      return _react.default.createElement(_Warning.default, {
        className: (0, _classnames.default)(classes.root, classes.error)
      });
    }

    if (completed) {
      return _react.default.createElement(_CheckCircle.default, {
        className: (0, _classnames.default)(classes.root, classes.completed)
      });
    }

    return _react.default.createElement(_SvgIcon.default, {
      className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.active, active))
    }, _ref, _react.default.createElement("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, icon));
  }

  return icon;
}

 true ? StepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes.default.bool,

  /**
   * Mark the step as failed.
   */
  error: _propTypes.default.bool,

  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes.default.node.isRequired
} : undefined;
StepIcon.defaultProps = {
  active: false,
  completed: false,
  error: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStepIcon'
})(StepIcon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/StepIcon/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/StepIcon/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _StepIcon.default;
  }
});

var _StepIcon = _interopRequireDefault(__webpack_require__(/*! ./StepIcon */ "./node_modules/@material-ui/core/StepIcon/StepIcon.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/StepLabel/StepLabel.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/StepLabel/StepLabel.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/Typography/index.js"));

var _StepIcon = _interopRequireDefault(__webpack_require__(/*! ../StepIcon */ "./node_modules/@material-ui/core/StepIcon/index.js"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      '&$alternativeLabel': {
        flexDirection: 'column'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `orientation="horizontal". */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical". */
    vertical: {},

    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      color: theme.palette.text.secondary,
      '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: 16
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the `Typography` component if `active={true}`. */
    active: {},

    /* Styles applied to the `Typography` component if `completed={true}`. */
    completed: {},

    /* Styles applied to the root element and `Typography` component if `error={true}`. */
    error: {},

    /* Styles applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the `icon` container element. */
    iconContainer: {
      flexShrink: 0,
      // Fix IE 11 issue
      display: 'flex',
      paddingRight: 8,
      '&$alternativeLabel': {
        paddingRight: 0
      }
    },

    /* Styles applied to the root & icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},

    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
      width: '100%'
    }
  };
};

exports.styles = styles;

function StepLabel(props) {
  var _classNames, _classNames3;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      StepIconComponentProp = props.StepIconComponent,
      StepIconProps = props.StepIconProps,
      other = (0, _objectWithoutProperties2.default)(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "icon", "last", "optional", "orientation", "StepIconComponent", "StepIconProps"]);
  var StepIconComponent = StepIconComponentProp;

  if (icon && !StepIconComponent) {
    StepIconComponent = _StepIcon.default;
  }

  return _react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.alternativeLabel, alternativeLabel), (0, _defineProperty2.default)(_classNames, classes.error, error), _classNames), classNameProp)
  }, other), icon || StepIconComponent ? _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.iconContainer, (0, _defineProperty2.default)({}, classes.alternativeLabel, alternativeLabel))
  }, _react.default.createElement(StepIconComponent, (0, _extends2.default)({
    completed: completed,
    active: active,
    error: error,
    icon: icon
  }, StepIconProps))) : null, _react.default.createElement("span", {
    className: classes.labelContainer
  }, _react.default.createElement(_Typography.default, {
    component: "span",
    className: (0, _classnames.default)(classes.label, (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.alternativeLabel, alternativeLabel), (0, _defineProperty2.default)(_classNames3, classes.completed, completed), (0, _defineProperty2.default)(_classNames3, classes.active, active), (0, _defineProperty2.default)(_classNames3, classes.error, error), _classNames3))
  }, children), optional));
}

 true ? StepLabel.propTypes = {
  /**
   * @ignore
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes.default.bool,

  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes.default.bool,

  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes.default.bool,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: _propTypes.default.bool,

  /**
   * Mark the step as failed.
   */
  error: _propTypes.default.bool,

  /**
   * Override the default icon.
   */
  icon: _propTypes.default.node,

  /**
   * @ignore
   */
  last: _propTypes.default.bool,

  /**
   * The optional node to display.
   */
  optional: _propTypes.default.node,

  /**
   * @ignore
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),

  /**
   * The component to render in place of the [`StepIcon`](/api/step-icon/).
   */
  StepIconComponent: _utils.componentPropType,

  /**
   * Properties applied to the [`StepIcon`](/api/step-icon/) element.
   */
  StepIconProps: _propTypes.default.object
} : undefined;
StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  error: false,
  last: false,
  orientation: 'horizontal'
};
StepLabel.muiName = 'StepLabel';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStepLabel'
})(StepLabel);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/StepLabel/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/StepLabel/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _StepLabel.default;
  }
});

var _StepLabel = _interopRequireDefault(__webpack_require__(/*! ./StepLabel */ "./node_modules/@material-ui/core/StepLabel/StepLabel.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Stepper/Stepper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/Stepper/Stepper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _StepConnector = _interopRequireDefault(__webpack_require__(/*! ../StepConnector */ "./node_modules/@material-ui/core/StepConnector/index.js"));

// @inheritedComponent Paper
var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: 24
  },

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    alignItems: 'flex-start'
  }
};
exports.styles = styles;

function Stepper(props) {
  var activeStep = props.activeStep,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      connectorProp = props.connector,
      nonLinear = props.nonLinear,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties2.default)(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);
  var className = (0, _classnames.default)(classes.root, classes[orientation], (0, _defineProperty2.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);
  var connector = _react.default.isValidElement(connectorProp) ? _react.default.cloneElement(connectorProp, {
    orientation: orientation
  }) : null;

  var childrenArray = _react.default.Children.toArray(children);

  var steps = childrenArray.map(function (step, index) {
    var controlProps = {
      alternativeLabel: alternativeLabel,
      connector: connectorProp,
      last: index + 1 === childrenArray.length,
      orientation: orientation
    };
    var state = {
      index: index,
      active: false,
      completed: false,
      disabled: false
    };

    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }

    return [!alternativeLabel && connector && index !== 0 && _react.default.cloneElement(connector, (0, _extends2.default)({
      key: index
    }, state)), _react.default.cloneElement(step, (0, _extends2.default)({}, controlProps, state, step.props))];
  });
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    square: true,
    elevation: 0,
    className: className
  }, other), steps);
}

 true ? Stepper.propTypes = {
  /**
   * Set the active step (zero based index).
   */
  activeStep: _propTypes.default.number,

  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: _propTypes.default.bool,

  /**
   * Two or more `<Step />` components.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * A component to be placed between each step.
   */
  connector: _propTypes.default.element,

  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: _propTypes.default.bool,

  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical'])
} : undefined;
Stepper.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
  connector: _react.default.createElement(_StepConnector.default, null),
  nonLinear: false,
  orientation: 'horizontal'
};
Stepper.muiName = 'Stepper';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiStepper'
})(Stepper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Stepper/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Stepper/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Stepper.default;
  }
});

var _Stepper = _interopRequireDefault(__webpack_require__(/*! ./Stepper */ "./node_modules/@material-ui/core/Stepper/Stepper.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/CheckCircle.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/CheckCircle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _pure = _interopRequireDefault(__webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ../../SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/index.js"));

var _ref = _react.default.createElement("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
});

/**
 * @ignore - internal component.
 */
var CheckCircle = function CheckCircle(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref);
};

CheckCircle = (0, _pure.default)(CheckCircle);
CheckCircle.muiName = 'SvgIcon';
var _default = CheckCircle;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/Warning.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/internal/svg-icons/Warning.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _pure = _interopRequireDefault(__webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ../../SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/index.js"));

var _ref = _react.default.createElement("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
});

/**
 * @ignore - internal component.
 */
var Warning = function Warning(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref);
};

Warning = (0, _pure.default)(Warning);
Warning.muiName = 'SvgIcon';
var _default = Warning;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.ef7fbb85a30698c8dc3b.hot-update.js.map