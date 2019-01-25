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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
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
      height: '90vh'
    },
    container: {
      paddingTop: '2rem'
    },
    stepper: {}
  };
});

function getSteps() {
  return ['Choose Your Service', 'Select A Date', 'Review & Confirm'];
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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.stepper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    activeStep: activeStep,
    alternativeLabel: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, steps.map(function (label) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, label));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "All steps completed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: handleReset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Reset")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, getStepContent(activeStep)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.backButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))))));
}

/***/ })

})
//# sourceMappingURL=index.js.6473e573adc439a34bbf.hot-update.js.map