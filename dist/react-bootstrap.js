(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 814:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString === Object.prototype.toString) {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        } else {
          classes.push(arg.toString());
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ 286:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),

/***/ 946:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = all;

var _createChainableTypeChecker = __webpack_require__(844);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;
    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);

      if (result != null) {
        error = result;
      }
    });
    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}

module.exports = exports['default'];

/***/ }),

/***/ 844:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

module.exports = exports['default'];

/***/ }),

/***/ 428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(134);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ 526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(428)();
}

/***/ }),

/***/ 134:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(787),
    g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ 373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(356);
} else {}

/***/ }),

/***/ 459:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function () {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);

    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 787:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Accordion": () => (/* reexport */ src_Accordion),
  "AccordionButton": () => (/* reexport */ src_AccordionButton),
  "AccordionCollapse": () => (/* reexport */ src_AccordionCollapse),
  "AccordionContext": () => (/* reexport */ AccordionContext),
  "Alert": () => (/* reexport */ src_Alert),
  "Anchor": () => (/* reexport */ src_Anchor),
  "Badge": () => (/* reexport */ src_Badge),
  "Breadcrumb": () => (/* reexport */ src_Breadcrumb),
  "BreadcrumbItem": () => (/* reexport */ src_BreadcrumbItem),
  "Button": () => (/* reexport */ src_Button),
  "ButtonGroup": () => (/* reexport */ src_ButtonGroup),
  "ButtonToolbar": () => (/* reexport */ src_ButtonToolbar),
  "Card": () => (/* reexport */ src_Card),
  "CardGroup": () => (/* reexport */ CardGroup),
  "CardImg": () => (/* reexport */ src_CardImg),
  "Carousel": () => (/* reexport */ src_Carousel),
  "CarouselItem": () => (/* reexport */ src_CarouselItem),
  "CloseButton": () => (/* reexport */ src_CloseButton),
  "Col": () => (/* reexport */ src_Col),
  "Collapse": () => (/* reexport */ src_Collapse),
  "Container": () => (/* reexport */ src_Container),
  "Dropdown": () => (/* reexport */ src_Dropdown),
  "DropdownButton": () => (/* reexport */ src_DropdownButton),
  "Fade": () => (/* reexport */ src_Fade),
  "Figure": () => (/* reexport */ src_Figure),
  "FloatingLabel": () => (/* reexport */ src_FloatingLabel),
  "Form": () => (/* reexport */ src_Form),
  "FormCheck": () => (/* reexport */ src_FormCheck),
  "FormControl": () => (/* reexport */ src_FormControl),
  "FormFloating": () => (/* reexport */ FormFloating),
  "FormGroup": () => (/* reexport */ src_FormGroup),
  "FormLabel": () => (/* reexport */ src_FormLabel),
  "FormSelect": () => (/* reexport */ src_FormSelect),
  "FormText": () => (/* reexport */ src_FormText),
  "Image": () => (/* reexport */ src_Image),
  "InputGroup": () => (/* reexport */ src_InputGroup),
  "ListGroup": () => (/* reexport */ src_ListGroup),
  "ListGroupItem": () => (/* reexport */ src_ListGroupItem),
  "Modal": () => (/* reexport */ src_Modal),
  "ModalBody": () => (/* reexport */ ModalBody),
  "ModalDialog": () => (/* reexport */ src_ModalDialog),
  "ModalFooter": () => (/* reexport */ ModalFooter),
  "ModalTitle": () => (/* reexport */ ModalTitle),
  "Nav": () => (/* reexport */ src_Nav),
  "NavDropdown": () => (/* reexport */ src_NavDropdown),
  "NavItem": () => (/* reexport */ src_NavItem),
  "NavLink": () => (/* reexport */ src_NavLink),
  "Navbar": () => (/* reexport */ src_Navbar),
  "NavbarBrand": () => (/* reexport */ src_NavbarBrand),
  "Offcanvas": () => (/* reexport */ src_Offcanvas),
  "OffcanvasBody": () => (/* reexport */ OffcanvasBody),
  "OffcanvasHeader": () => (/* reexport */ src_OffcanvasHeader),
  "OffcanvasTitle": () => (/* reexport */ OffcanvasTitle),
  "Overlay": () => (/* reexport */ src_Overlay),
  "OverlayTrigger": () => (/* reexport */ src_OverlayTrigger),
  "PageItem": () => (/* reexport */ src_PageItem),
  "Pagination": () => (/* reexport */ src_Pagination),
  "Placeholder": () => (/* reexport */ src_Placeholder),
  "PlaceholderButton": () => (/* reexport */ src_PlaceholderButton),
  "Popover": () => (/* reexport */ src_Popover),
  "PopoverBody": () => (/* reexport */ PopoverBody),
  "PopoverHeader": () => (/* reexport */ PopoverHeader),
  "ProgressBar": () => (/* reexport */ src_ProgressBar),
  "Ratio": () => (/* reexport */ src_Ratio),
  "Row": () => (/* reexport */ src_Row),
  "SSRProvider": () => (/* reexport */ src_SSRProvider),
  "Spinner": () => (/* reexport */ src_Spinner),
  "SplitButton": () => (/* reexport */ src_SplitButton),
  "Stack": () => (/* reexport */ src_Stack),
  "Tab": () => (/* reexport */ src_Tab),
  "TabContainer": () => (/* reexport */ src_TabContainer),
  "TabContent": () => (/* reexport */ TabContent),
  "TabPane": () => (/* reexport */ src_TabPane),
  "Table": () => (/* reexport */ src_Table),
  "Tabs": () => (/* reexport */ src_Tabs),
  "ThemeProvider": () => (/* reexport */ src_ThemeProvider),
  "Toast": () => (/* reexport */ src_Toast),
  "ToastBody": () => (/* reexport */ ToastBody),
  "ToastContainer": () => (/* reexport */ src_ToastContainer),
  "ToastHeader": () => (/* reexport */ src_ToastHeader),
  "ToggleButton": () => (/* reexport */ src_ToggleButton),
  "ToggleButtonGroup": () => (/* reexport */ src_ToggleButtonGroup),
  "Tooltip": () => (/* reexport */ src_Tooltip),
  "useAccordionButton": () => (/* reexport */ useAccordionButton)
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(814);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(286);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/utils.js


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/hook.js



function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(propValue !== undefined);

  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return extends_extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
;// CONCATENATED MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function react_lifecycles_compat_es_polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}


;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = Utils.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? 0 : invariant(false) : void 0;

  var UncontrolledComponent = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: _extends(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[Utils.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!Utils.isProp(props, key) && Utils.isProp(prevProps, key)) {
          nextState.values[key] = props[Utils.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return React.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(React.Component);

  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, Utils.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (React.forwardRef) {
    WrappedComponent = React.forwardRef(function (props, ref) {
      return React.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/index.js


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(373);
;// CONCATENATED MODULE: ./src/ThemeProvider.tsx



const ThemeContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({
  prefixes: {}
});
const {
  Consumer,
  Provider
} = ThemeContext;

function ThemeProvider({
  prefixes = {},
  dir,
  children
}) {
  const contextValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    prefixes: { ...prefixes
    },
    dir
  }), [prefixes, dir]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useIsRTL() {
  const {
    dir
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(ThemeContext);
  return dir === 'rtl';
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({ ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_jsx(Component, { ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}


/* harmony default export */ const src_ThemeProvider = (ThemeProvider);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/ownerDocument.js
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/ownerWindow.js

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/getComputedStyle.js

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle_getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/css.js




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle_getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ const css = (style);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function inheritsLoose_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(526);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(156);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext(null));
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  inheritsLoose_inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.only(children), childProps))
    );
  };

  return Transition;
}((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function Transition_noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: Transition_noop,
  onEntering: Transition_noop,
  onEntered: Transition_noop,
  onExit: Transition_noop,
  onExiting: Transition_noop,
  onExited: Transition_noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ const canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addEventListener.js
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}
/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */


function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ const esm_addEventListener = (addEventListener);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ const esm_removeEventListener = (removeEventListener);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/listen.js



function listen(node, eventName, handler, options) {
  esm_addEventListener(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}

/* harmony default export */ const esm_listen = (listen);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/triggerEvent.js
/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/transitionEnd.js




function parseDuration(node) {
  var str = css(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = esm_listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = esm_listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}
;// CONCATENATED MODULE: ./src/transitionEndListener.ts



function transitionEndListener_parseDuration(node, property) {
  const str = css(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = transitionEndListener_parseDuration(element, 'transitionDuration');
  const delay = transitionEndListener_parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}
;// CONCATENATED MODULE: ./src/createChainedFunction.tsx
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ const src_createChainedFunction = (createChainedFunction);
;// CONCATENATED MODULE: ./src/triggerBrowserReflow.tsx
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergedRefs.js


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ const esm_useMergedRefs = (useMergedRefs);
;// CONCATENATED MODULE: ./src/safeFindDOMNode.ts

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}
;// CONCATENATED MODULE: ./src/TransitionWrapper.tsx





// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const mergedRef = esm_useMergedRefs(nodeRef, childRef);

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Transition, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(children, {
      ref: attachRef
    })
  });
});
/* harmony default export */ const src_TransitionWrapper = (TransitionWrapper);
;// CONCATENATED MODULE: ./src/Collapse.tsx









const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css(elem, margins[1]), 10);
}

const collapseStyles = {
  [EXITED]: 'collapse',
  [EXITING]: 'collapsing',
  [ENTERING]: 'collapsing',
  [ENTERED]: 'collapse show'
};
const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
const Collapse = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  const handleEnter = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => src_createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => src_createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => src_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  /* -- Collapsing -- */

  const handleExit = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => src_createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => src_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(children, { ...innerProps,
      className: classnames_default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps;
/* harmony default export */ const src_Collapse = (Collapse);
;// CONCATENATED MODULE: ./src/AccordionContext.ts

const context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({});
context.displayName = 'AccordionContext';
/* harmony default export */ const AccordionContext = (context);
;// CONCATENATED MODULE: ./src/AccordionCollapse.tsx







const AccordionCollapse = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  as: Component = 'div',
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(AccordionContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-collapse');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Collapse, {
    ref: ref,
    in: activeEventKey === eventKey,
    ...props,
    className: classnames_default()(className, bsPrefix),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      children: external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ const src_AccordionCollapse = (AccordionCollapse);
;// CONCATENATED MODULE: ./src/AccordionItemContext.ts

const AccordionItemContext_context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({
  eventKey: ''
});
AccordionItemContext_context.displayName = 'AccordionItemContext';
/* harmony default export */ const AccordionItemContext = (AccordionItemContext_context);
;// CONCATENATED MODULE: ./src/AccordionBody.tsx







const AccordionBody = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-body');
  const {
    eventKey
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(AccordionItemContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_AccordionCollapse, {
    eventKey: eventKey,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames_default()(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = 'AccordionBody';
/* harmony default export */ const src_AccordionBody = (AccordionBody);
;// CONCATENATED MODULE: ./src/AccordionButton.tsx







function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(AccordionContext);
  return e => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    const eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}
const AccordionButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-button');
  const {
    eventKey
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(AccordionItemContext);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(AccordionContext);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": eventKey === activeEventKey,
    className: classnames_default()(className, bsPrefix, eventKey !== activeEventKey && 'collapsed')
  });
});
AccordionButton.displayName = 'AccordionButton';
/* harmony default export */ const src_AccordionButton = (AccordionButton);
;// CONCATENATED MODULE: ./src/AccordionHeader.tsx





const AccordionHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'h2',
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-header');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, bsPrefix),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src_AccordionButton, {
      onClick: onClick,
      children: children
    })
  });
});
AccordionHeader.displayName = 'AccordionHeader';
/* harmony default export */ const src_AccordionHeader = (AccordionHeader);
;// CONCATENATED MODULE: ./src/AccordionItem.tsx






const AccordionItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-item');
  const contextValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItemContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames_default()(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = 'AccordionItem';
/* harmony default export */ const src_AccordionItem = (AccordionItem);
;// CONCATENATED MODULE: ./src/Accordion.tsx












const Accordion = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'accordion');
  const contextValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect
  }), [activeKey, onSelect]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...controlledProps,
      className: classnames_default()(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = 'Accordion';
/* harmony default export */ const src_Accordion = (Object.assign(Accordion, {
  Button: src_AccordionButton,
  Collapse: src_AccordionCollapse,
  Item: src_AccordionItem,
  Header: src_AccordionHeader,
  Body: src_AccordionBody
}));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCommittedRef.js

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef_useCommittedRef(value) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(value);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ const esm_useCommittedRef = (useCommittedRef_useCommittedRef);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback(fn) {
  var ref = esm_useCommittedRef(fn);
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCallbackRef.js

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(null);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventListener.js


/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */

function useEventListener_useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = useEventCallback(listener);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useGlobalListener.js


/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */

function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = useCallback(function () {
    return document;
  }, []);
  return useEventListener(documentTarget, event, handler, capture);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useInterval.js


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = useCommittedRef(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = useCommittedRef(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  useEffect(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ const esm_useInterval = ((/* unused pure expression or super */ null && (useInterval)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useRafInterval.js



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = useCommittedRef(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = useCommittedRef(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  useEffect(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ const esm_useRafInterval = ((/* unused pure expression or super */ null && (useRafInterval)));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergeState.js
function useMergeState_extends() {
  useMergeState_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return useMergeState_extends.apply(this, arguments);
}


/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */

function useMergeState_useMergeState(initialState) {
  var _useState = useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = useCallback(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : useMergeState_extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return useMergeState_extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMergeStateFromProps.js

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = useMergeState(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMounted.js

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  var isMounted = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(function () {
    return mounted.current;
  });
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/usePrevious.js

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useImage.js

/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */

function useImage(imageOrUrl, crossOrigin) {
  var _useState = useState({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  useEffect(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useIsomorphicEffect.js

var isReactNative = typeof __webpack_require__.g !== 'undefined' && // @ts-ignore
__webpack_require__.g.navigator && // @ts-ignore
__webpack_require__.g.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const useIsomorphicEffect = (isDOM || isReactNative ? external_root_React_commonjs2_react_commonjs_react_amd_react_.useLayoutEffect : external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useResizeObserver.js


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = useState(null),
      rect = _useState[0],
      setRect = _useState[1];

  useEffect(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/index.js














;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Button.js
const _excluded = ["as", "disabled"];

function Button_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = Button_objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const esm_Button = (Button);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Anchor.js
const Anchor_excluded = ["onKeyDown"];

function Anchor_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/anchor-has-content */






function Anchor_isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */

const Anchor = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = Anchor_objectWithoutPropertiesLoose(_ref, Anchor_excluded);

  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (Anchor_isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
/* harmony default export */ const esm_Anchor = (Anchor);
;// CONCATENATED MODULE: ./src/Fade.tsx








const Fade_defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(children, { ...innerProps,
      className: classnames_default()('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = Fade_defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ const src_Fade = (Fade);
;// CONCATENATED MODULE: ./src/CloseButton.tsx




const propTypes = {
  'aria-label': (prop_types_default()).string,
  onClick: (prop_types_default()).func,

  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: prop_types_default().oneOf(['white'])
};
const CloseButton_defaultProps = {
  'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
  ref: ref,
  type: "button",
  className: classnames_default()('btn-close', variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ const src_CloseButton = (CloseButton);
;// CONCATENATED MODULE: ./src/divWithClassName.tsx



/* harmony default export */ const divWithClassName = (className => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((p, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...p,
  ref: ref,
  className: classnames_default()(p.className, className)
})));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/camelize.js
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
;// CONCATENATED MODULE: ./src/createWithBsPrefix.tsx






const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Tag, {
      ref: ref,
      className: classnames_default()(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}
;// CONCATENATED MODULE: ./src/Alert.tsx












const DivStyledAsH4 = divWithClassName('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
const AlertHeading = createWithBsPrefix('alert-heading', {
  Component: DivStyledAsH4
});
const AlertLink = createWithBsPrefix('alert-link', {
  Component: esm_Anchor
});
const Alert_defaultProps = {
  variant: 'primary',
  show: true,
  transition: src_Fade,
  closeLabel: 'Close alert'
};
const Alert = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show,
    closeLabel,
    closeVariant,
    className,
    children,
    variant,
    onClose,
    dismissible,
    transition,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: 'onClose'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'alert');
  const handleClose = useEventCallback(e => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? src_Fade : transition;

  const alert = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    role: "alert",
    ...(!Transition ? props : undefined),
    ref: ref,
    className: classnames_default()(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /*#__PURE__*/(0,jsx_runtime.jsx)(src_CloseButton, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });

  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
    unmountOnExit: true,
    ...props,
    ref: undefined,
    in: show,
    children: alert
  });
});
Alert.displayName = 'Alert';
Alert.defaultProps = Alert_defaultProps;
/* harmony default export */ const src_Alert = (Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
}));
;// CONCATENATED MODULE: ./src/Anchor.tsx

/* harmony default export */ const src_Anchor = (esm_Anchor);
;// CONCATENATED MODULE: ./src/Badge.tsx




const Badge_defaultProps = {
  bg: 'primary',
  pill: false
};
const Badge = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  bg,
  pill,
  text,
  className,
  as: Component = 'span',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'badge');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = 'Badge';
Badge.defaultProps = Badge_defaultProps;
/* harmony default export */ const src_Badge = (Badge);
;// CONCATENATED MODULE: ./src/BreadcrumbItem.tsx





const BreadcrumbItem_defaultProps = {
  active: false,
  linkProps: {}
};
const BreadcrumbItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  active,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'li',
  linkAs: LinkComponent = esm_Anchor,
  linkProps,
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(prefix, className, {
      active
    }),
    "aria-current": active ? 'page' : undefined,
    children: active ? children : /*#__PURE__*/(0,jsx_runtime.jsx)(LinkComponent, { ...linkProps,
      href: href,
      title: title,
      target: target,
      children: children
    })
  });
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = BreadcrumbItem_defaultProps;
/* harmony default export */ const src_BreadcrumbItem = (BreadcrumbItem);
;// CONCATENATED MODULE: ./src/Breadcrumb.tsx





const Breadcrumb_defaultProps = {
  label: 'breadcrumb',
  listProps: {}
};
const Breadcrumb = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  listProps,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'nav',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    "aria-label": label,
    className: className,
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ol", { ...listProps,
      className: classnames_default()(prefix, listProps == null ? void 0 : listProps.className),
      children: children
    })
  });
});
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = Breadcrumb_defaultProps;
/* harmony default export */ const src_Breadcrumb = (Object.assign(Breadcrumb, {
  Item: src_BreadcrumbItem
}));
;// CONCATENATED MODULE: ./src/Button.tsx





const Button_defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button_Button = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ...buttonProps,
    ref: ref,
    className: classnames_default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button_Button.displayName = 'Button';
Button_Button.defaultProps = Button_defaultProps;
/* harmony default export */ const src_Button = (Button_Button);
;// CONCATENATED MODULE: ./src/ButtonGroup.tsx




const ButtonGroup_defaultProps = {
  vertical: false,
  role: 'group'
};
const ButtonGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  size,
  vertical,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn-group');
  let baseClass = prefix;
  if (vertical) baseClass = `${prefix}-vertical`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...rest,
    ref: ref,
    className: classnames_default()(className, baseClass, size && `${prefix}-${size}`)
  });
});
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = ButtonGroup_defaultProps;
/* harmony default export */ const src_ButtonGroup = (ButtonGroup);
;// CONCATENATED MODULE: ./src/ButtonToolbar.tsx




const ButtonToolbar_defaultProps = {
  role: 'toolbar'
};
const ButtonToolbar = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...props,
    ref: ref,
    className: classnames_default()(className, prefix)
  });
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = ButtonToolbar_defaultProps;
/* harmony default export */ const src_ButtonToolbar = (ButtonToolbar);
;// CONCATENATED MODULE: ./src/CardImg.tsx




const CardImg = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-img');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    className: classnames_default()(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
/* harmony default export */ const src_CardImg = (CardImg);
;// CONCATENATED MODULE: ./src/CardHeaderContext.tsx

const CardHeaderContext_context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
CardHeaderContext_context.displayName = 'CardHeaderContext';
/* harmony default export */ const CardHeaderContext = (CardHeaderContext_context);
;// CONCATENATED MODULE: ./src/CardHeader.tsx






const CardHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-header');
  const contextValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardHeaderContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames_default()(className, prefix)
    })
  });
});
CardHeader.displayName = 'CardHeader';
/* harmony default export */ const src_CardHeader = (CardHeader);
;// CONCATENATED MODULE: ./src/Card.tsx








const DivStyledAsH5 = divWithClassName('h5');
const DivStyledAsH6 = divWithClassName('h6');
const CardBody = createWithBsPrefix('card-body');
const CardTitle = createWithBsPrefix('card-title', {
  Component: DivStyledAsH5
});
const CardSubtitle = createWithBsPrefix('card-subtitle', {
  Component: DivStyledAsH6
});
const CardLink = createWithBsPrefix('card-link', {
  Component: 'a'
});
const CardText = createWithBsPrefix('card-text', {
  Component: 'p'
});
const CardFooter = createWithBsPrefix('card-footer');
const CardImgOverlay = createWithBsPrefix('card-img-overlay');
const Card_defaultProps = {
  body: false
};
const Card = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
Card.defaultProps = Card_defaultProps;
/* harmony default export */ const src_Card = (Object.assign(Card, {
  Img: src_CardImg,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: src_CardHeader,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
}));
;// CONCATENATED MODULE: ./src/CardGroup.tsx

/* harmony default export */ const CardGroup = (createWithBsPrefix('card-group'));
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useUpdateEffect.js

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return fn();
  }, deps);
}

/* harmony default export */ const esm_useUpdateEffect = (useUpdateEffect);
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useUpdatedRef.js

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(value);
  valueRef.current = value;
  return valueRef;
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useWillUnmount.js


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useTimeout.js



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = useMounted(); // types are confused between node and web here IDK

  var handleRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  useWillUnmount(function () {
    return clearTimeout(handleRef.current);
  });
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}
;// CONCATENATED MODULE: ./src/CarouselCaption.tsx

/* harmony default export */ const CarouselCaption = (createWithBsPrefix('carousel-caption'));
;// CONCATENATED MODULE: ./src/CarouselItem.tsx




const CarouselItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = classnames_default()(className, useBootstrapPrefix(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = 'CarouselItem';
/* harmony default export */ const src_CarouselItem = (CarouselItem);
;// CONCATENATED MODULE: ./src/ElementChildren.tsx

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  let index = 0;
  return external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.map(children, child => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  let index = 0;
  external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.forEach(children, child => {
    if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.isValidElement(child)) func(child, index++);
  });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */


function hasChildOfType(children, type) {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.toArray(children).some(child => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.isValidElement(child) && child.type === type);
}


;// CONCATENATED MODULE: ./src/Carousel.tsx



















const SWIPE_THRESHOLD = 40;
const Carousel_defaultProps = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  indicatorLabels: [],
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }

  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}

const Carousel = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((uncontrolledProps, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    bsPrefix,
    slide,
    fade,
    controls,
    indicators,
    indicatorLabels,
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval,
    keyboard,
    onKeyDown,
    pause,
    onMouseOver,
    onMouseOut,
    wrap,
    touch,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon,
    prevLabel,
    nextIcon,
    nextLabel,
    variant,
    className,
    children,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeIndex: 'onSelect'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'carousel');
  const isRTL = useIsRTL();
  const nextDirectionRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const [direction, setDirection] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)('next');
  const [paused, setPaused] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isSliding, setIsSliding] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(activeIndex || 0);

  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
    }

    if (slide) {
      setIsSliding(true);
    }

    setRenderedActiveIndex(activeIndex || 0);
  }

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  forEach(children, (child, index) => {
    ++numChildren;

    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = esm_useCommittedRef(activeChildInterval);
  const prev = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    if (isSliding) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex - 1;

    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    nextDirectionRef.current = 'prev';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  const next = useEventCallback(event => {
    if (isSliding) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex + 1;

    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    nextDirectionRef.current = 'next';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  })); // This is used in the setInterval, so it should not invalidate.

  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === 'next' ? 'start' : 'end';
  esm_useUpdateEffect(() => {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(node => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }

          return;

        case 'ArrowRight':
          event.preventDefault();

          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }

          return;

        default:
      }
    }

    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    if (pause === 'hover') {
      setPaused(true);
    }

    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(0);
  const touchDeltaXRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;

    if (pause === 'hover') {
      setPaused(true);
    }

    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }

    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(event => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;

      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }

    if (pause === 'hover') {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || undefined);
    }

    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var _ref, _activeChildIntervalR;

    if (!shouldPlay) {
      return undefined;
    }

    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => event => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: classnames_default()(className, prefix, slide && 'slide', fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        type: "button",
        "data-bs-target": "" // Bootstrap requires this in their css.
        ,
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? 'active' : undefined,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? /*#__PURE__*/(0,jsx_runtime.jsx)(src_TransitionWrapper, {
          in: isActive,
          onEnter: isActive ? handleEnter : undefined,
          onEntered: isActive ? handleEntered : undefined,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(child, { ...innerProps,
            className: classnames_default()(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
          })
        }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(child, {
          className: classnames_default()(child.props.className, isActive && 'active')
        });
      })
    }), controls && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(wrap || activeIndex !== 0) && /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_Anchor, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_Anchor, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = 'Carousel';
Carousel.defaultProps = Carousel_defaultProps;
/* harmony default export */ const src_Carousel = (Object.assign(Carousel, {
  Caption: CarouselCaption,
  Item: src_CarouselItem
}));
;// CONCATENATED MODULE: ./src/Col.tsx




const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const spans = [];
  const classes = [];
  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classnames_default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...colProps,
    ref: ref,
    className: classnames_default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ const src_Col = (Col);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useForceUpdate.js

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/DropdownContext.js

const DropdownContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
/* harmony default export */ const esm_DropdownContext = (DropdownContext);
;// CONCATENATED MODULE: ./node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

;// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useSafeState.js



function useSafeState(state) {
  var isMounted = useMounted();
  return [state[0], (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ const esm_useSafeState = (useSafeState);
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js


function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function dom_utils_getComputedStyle_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  dom_utils_getComputedStyle_getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = dom_utils_getComputedStyle_getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = dom_utils_getComputedStyle_getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && dom_utils_getComputedStyle_getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && dom_utils_getComputedStyle_getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (dom_utils_getComputedStyle_getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function eventListeners_effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (dom_utils_getComputedStyle_getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = dom_utils_getComputedStyle_getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(dom_utils_getComputedStyle_getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body' && (canEscapeClipping ? dom_utils_getComputedStyle_getComputedStyle(clippingParent).position !== 'static' : true);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/popper.js









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

const popper_createPopper = popperGenerator({
  defaultModifiers: [modifiers_hide, modifiers_popperOffsets, modifiers_computeStyles, eventListeners, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow]
});

;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/usePopper.js
const usePopper_excluded = ["enabled", "placement", "strategy", "modifiers"];

function usePopper_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}





const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite',
  fn: () => undefined
}; // until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;

    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;

    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = 'bottom',
    strategy = 'absolute',
    modifiers = EMPTY_MODIFIERS
  } = _ref,
      config = usePopper_objectWithoutPropertiesLoose(_ref, usePopper_excluded);

  const prevModifiers = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(modifiers);
  const popperInstanceRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const update = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = esm_useSafeState((0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = popper_createPopper(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ const esm_usePopper = (usePopper);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/contains.js
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains_contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(459);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/useRootClose.js






const escapeKeyCode = 27;

const useRootClose_noop = () => {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */


function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseRootCloseRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const onClose = onRootClose || useRootClose_noop;
  const handleMouseCapture = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(e => {
    const currentTarget = getRefTarget(ref);
    warning_default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains_contains(currentTarget, e.target);
  }, [ref]);
  const handleMouse = useEventCallback(e => {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  const handleKeyUp = useEventCallback(e => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (disabled || ref == null) return undefined;
    const doc = ownerDocument(getRefTarget(ref)); // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = (doc.defaultView || window).event; // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    const removeMouseCaptureListener = esm_listen(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = esm_listen(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    const removeKeyupListener = esm_listen(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    let mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => esm_listen(el, 'mousemove', useRootClose_noop));
    }

    return () => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ const esm_useRootClose = (useRootClose);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js
function toModifierMap(modifiers) {
  const result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/DropdownMenu.js
const DropdownMenu_excluded = ["children"];

function DropdownMenu_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}











const DropdownMenu_noop = () => {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options = {}) {
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_DropdownContext);
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const hasShownRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context
  } = options;
  const show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  const handleClose = e => {
    context == null ? void 0 : context.toggle(false, e);
  };

  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context || {};
  const popper = esm_usePopper(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placementOverride || placement || 'bottom-start',
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || DropdownMenu_noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  esm_useRootClose(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
const DropdownMenu_defaultProps = {
  usePopper: true
};
/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */

function DropdownMenu(_ref) {
  let {
    children
  } = _ref,
      options = DropdownMenu_objectWithoutPropertiesLoose(_ref, DropdownMenu_excluded);

  const [props, meta] = useDropdownMenu(options);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: children(props, meta)
  });
}

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = DropdownMenu_defaultProps;
/** @component */

/* harmony default export */ const esm_DropdownMenu = (DropdownMenu);
;// CONCATENATED MODULE: ./node_modules/@react-aria/ssr/dist/module.js
 // Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.

const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);
/**
 * When using SSR with React Aria, applications must be wrapped in an SSRProvider.
 * This ensures that auto generated ids are consistent between the client and server.
 */


function SSRProvider(props) {
  let cur = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let value = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? '' : cur.prefix + "-" + ++cur.current,
    current: 0
  }), [cur]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
    value: value
  }, props.children);
}
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => defaultId || "react-aria" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */

function useIsSSR() {
  let cur = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = useState(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      setIsSSR(false);
    }, []);
  }

  return isSSR;
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/DropdownToggle.js






const isRoleMenu = el => {
  var _el$getAttribute;

  return ((_el$getAttribute = el.getAttribute('role')) == null ? void 0 : _el$getAttribute.toLowerCase()) === 'menu';
};

const DropdownToggle_noop = () => {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  const id = useSSRSafeId();
  const {
    show = false,
    toggle = DropdownToggle_noop,
    setToggle,
    menuElement
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_DropdownContext) || {};
  const handleClick = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(e => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || DropdownToggle_noop,
    onClick: handleClick,
    'aria-expanded': !!show
  }; // This is maybe better down in an effect, but
  // the component is going to update anyway when the menu element
  // is set so might return new props.

  if (menuElement && isRoleMenu(menuElement)) {
    props['aria-haspopup'] = true;
  }

  return [props, {
    show,
    toggle
  }];
}
/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */

function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: children(props, meta)
  });
}

DropdownToggle.displayName = 'DropdownToggle';
/** @component */

/* harmony default export */ const esm_DropdownToggle = (DropdownToggle);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/SelectableContext.js

const SelectableContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ const esm_SelectableContext = (SelectableContext);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/NavContext.js

const NavContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ const esm_NavContext = (NavContext);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/DataKey.js
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/DropdownItem.js
const DropdownItem_excluded = ["eventKey", "disabled", "onClick", "active", "as"];

function DropdownItem_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}









/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */

function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_SelectableContext);
  const navContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_NavContext);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback(event => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    'aria-disabled': disabled || undefined,
    'aria-selected': isActive,
    [dataAttr('dropdown-item')]: ''
  }, {
    isActive
  }];
}
const DropdownItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = esm_Button
  } = _ref,
      props = DropdownItem_objectWithoutPropertiesLoose(_ref, DropdownItem_excluded);

  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, props, {
    ref: ref
  }, dropdownItemProps));
});
DropdownItem.displayName = 'DropdownItem';
/* harmony default export */ const esm_DropdownItem = (DropdownItem);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/useWindow.js


const Context = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)(canUseDOM ? window : undefined);
const WindowProvider = Context.Provider;
/**
 * The document "window" placed in React context. Helpful for determining
 * SSR context, or when rendering into an iframe.
 *
 * @returns the current window
 */

function useWindow() {
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(Context);
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Dropdown.js


















function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const attachRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(element => {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
 * @displayName Dropdown
 * @public
 */


function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr('dropdown-item')}]`,
  focusFirstItemOnShow,
  placement = 'bottom-start',
  children
}) {
  const window = useWindow();
  const [show, onToggle] = useUncontrolledProp(rawShow, defaultShow, rawOnToggle); // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set

  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious(show);
  const lastSourceEvent = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const focusInDropdown = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const onSelectCtx = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_SelectableContext);
  const toggle = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, 'select');

    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
  }

  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    lastSourceEvent.current = null;
  });

  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current) return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  useEventListener_useEventListener((0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => window.document, [window]), 'keydown', event => {
    var _menuRef$current, _toggleRef$current;

    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    const isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && fromMenu)) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (key === 'Tab' && (!menuRef.current || !show)) {
      return;
    }

    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };

    switch (key) {
      case 'ArrowUp':
        {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus) next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        esm_addEventListener(target.ownerDocument, 'keyup', e => {
          var _menuRef$current2;

          if (e.key === 'Tab' && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;

      case 'Escape':
        if (key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
        }

        onToggle(false, meta);
        break;

      default:
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_DropdownContext.Provider, {
      value: context,
      children: children
    })
  });
}

Dropdown.displayName = 'Dropdown';
Dropdown.Menu = esm_DropdownMenu;
Dropdown.Toggle = esm_DropdownToggle;
Dropdown.Item = esm_DropdownItem;
/* harmony default export */ const esm_Dropdown = (Dropdown);
;// CONCATENATED MODULE: ./src/DropdownContext.ts

const DropdownContext_DropdownContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({});
DropdownContext_DropdownContext.displayName = 'DropdownContext';
/* harmony default export */ const src_DropdownContext = (DropdownContext_DropdownContext);
;// CONCATENATED MODULE: ./src/DropdownItem.tsx






const DropdownItem_DropdownItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component = esm_Anchor,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-item');
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ...dropdownItemProps,
    ref: ref,
    className: classnames_default()(className, prefix, meta.isActive && 'active', disabled && 'disabled')
  });
});
DropdownItem_DropdownItem.displayName = 'DropdownItem';
/* harmony default export */ const src_DropdownItem = (DropdownItem_DropdownItem);
;// CONCATENATED MODULE: ./src/InputGroupContext.tsx

const InputGroupContext_context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
InputGroupContext_context.displayName = 'InputGroupContext';
/* harmony default export */ const InputGroupContext = (InputGroupContext_context);
;// CONCATENATED MODULE: ./src/NavbarContext.tsx
 // TODO: check

const NavbarContext_context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
NavbarContext_context.displayName = 'NavbarContext';
/* harmony default export */ const NavbarContext = (NavbarContext_context);
;// CONCATENATED MODULE: ./src/useWrappedRefWithWarning.tsx



function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (true) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  const warningRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(refValue => {
    !(refValue == null || !refValue.isReactComponent) ?  false ? 0 : browser_default()(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return esm_useMergedRefs(warningRef, ref);
}
;// CONCATENATED MODULE: ./src/DropdownMenu.tsx














const src_DropdownMenu_defaultProps = {
  flip: true
};
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? 'top-end' : 'top-start';
  const topEnd = isRTL ? 'top-start' : 'top-end';
  const bottomStart = isRTL ? 'bottom-end' : 'bottom-start';
  const bottomEnd = isRTL ? 'bottom-start' : 'bottom-end';
  const leftStart = isRTL ? 'right-start' : 'left-start';
  const leftEnd = isRTL ? 'right-end' : 'left-end';
  const rightStart = isRTL ? 'left-start' : 'right-start';
  const rightEnd = isRTL ? 'left-end' : 'right-end';
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === 'up') placement = alignEnd ? topEnd : topStart;else if (dropDirection === 'end') placement = alignEnd ? rightEnd : rightStart;else if (dropDirection === 'start') placement = alignEnd ? leftEnd : leftStart;
  return placement;
}
const DropdownMenu_DropdownMenu = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(NavbarContext);
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu');
  const {
    align: contextAlign,
    drop,
    isRTL
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_DropdownContext);
  align = align || contextAlign;
  const isInputGroup = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(InputGroupContext);
  const alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      const keys = Object.keys(align);
       false ? 0 : void 0;

      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint]; // .dropdown-menu-end is required for responsively aligning
        // left in addition to align left classes.

        alignEnd = direction === 'start';
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === 'end') {
      alignEnd = true;
    }
  }

  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = esm_useMergedRefs(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref);
  useIsomorphicEffect(() => {
    // Popper's initial position for the menu is incorrect when
    // renderOnMount=true. Need to call update() to correct it.
    if (show) popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;

    menuProps.close = () => toggle == null ? void 0 : toggle(false);

    menuProps.align = align;
  }

  let style = props.style;

  if (popper != null && popper.placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    style = { ...props.style,
      ...menuProps.style
    };
    props['x-placement'] = popper.placement;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ...menuProps,
    style: style // Bootstrap css requires this data attrib to style responsive menus.
    ,
    ...((alignClasses.length || isNavbar) && {
      'data-bs-popper': 'static'
    }),
    className: classnames_default()(className, prefix, show && 'show', alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu_DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu_DropdownMenu.defaultProps = src_DropdownMenu_defaultProps;
/* harmony default export */ const src_DropdownMenu = (DropdownMenu_DropdownMenu);
;// CONCATENATED MODULE: ./src/DropdownToggle.tsx











const DropdownToggle_DropdownToggle = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = src_Button,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle');
  const dropdownContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_DropdownContext);
  const isInputGroup = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(InputGroupContext);

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = esm_useMergedRefs(toggleProps.ref, useWrappedRefWithWarning(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    className: classnames_default()(className, prefix, split && `${prefix}-split`, !!isInputGroup && (dropdownContext == null ? void 0 : dropdownContext.show) && 'show'),
    ...toggleProps,
    ...props
  });
});
DropdownToggle_DropdownToggle.displayName = 'DropdownToggle';
/* harmony default export */ const src_DropdownToggle = (DropdownToggle_DropdownToggle);
;// CONCATENATED MODULE: ./src/Dropdown.tsx















const DropdownHeader = createWithBsPrefix('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
const DropdownDivider = createWithBsPrefix('dropdown-divider', {
  Component: 'hr',
  defaultProps: {
    role: 'separator'
  }
});
const DropdownItemText = createWithBsPrefix('dropdown-item-text', {
  Component: 'span'
});
const Dropdown_defaultProps = {
  navbar: false,
  align: 'start',
  autoClose: true
};
const Dropdown_Dropdown = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop,
    show,
    className,
    align,
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    navbar: _4,
    autoClose,
    ...props
  } = useUncontrolled(pProps, {
    show: 'onToggle'
  });
  const isInputGroup = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(InputGroupContext);
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown');
  const isRTL = useIsRTL();

  const isClosingPermitted = source => {
    // autoClose=false only permits close on button click
    if (autoClose === false) return source === 'click'; // autoClose=inside doesn't permit close on rootClose

    if (autoClose === 'inside') return source !== 'rootClose'; // autoClose=outside doesn't permit close on select

    if (autoClose === 'outside') return source !== 'select';
    return true;
  };

  const handleToggle = useEventCallback((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== 'keydown' || meta.originalEvent.key === 'Escape')) meta.source = 'rootClose';
    if (isClosingPermitted(meta.source)) onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === 'end';
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_DropdownContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Dropdown, {
      placement: placement,
      show: show,
      onSelect: onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow: focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
        ref: ref,
        className: classnames_default()(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'end' && 'dropend', drop === 'start' && 'dropstart')
      })
    })
  });
});
Dropdown_Dropdown.displayName = 'Dropdown';
Dropdown_Dropdown.defaultProps = Dropdown_defaultProps;
/* harmony default export */ const src_Dropdown = (Object.assign(Dropdown_Dropdown, {
  Toggle: src_DropdownToggle,
  Menu: src_DropdownMenu,
  Item: src_DropdownItem,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
}));
;// CONCATENATED MODULE: ./src/types.tsx

const alignDirection = prop_types_default().oneOf(['start', 'end']);
const alignPropType = prop_types_default().oneOfType([alignDirection, prop_types_default().shape({
  sm: alignDirection
}), prop_types_default().shape({
  md: alignDirection
}), prop_types_default().shape({
  lg: alignDirection
}), prop_types_default().shape({
  xl: alignDirection
}), prop_types_default().shape({
  xxl: alignDirection
})]);
;// CONCATENATED MODULE: ./src/DropdownButton.tsx








const DropdownButton_propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: (prop_types_default()).string,

  /** An `href` passed to the Toggle component */
  href: (prop_types_default()).string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: (prop_types_default()).func,

  /** The content of the non-toggle Button.  */
  title: (prop_types_default()).node.isRequired,

  /** Disables both Buttons  */
  disabled: (prop_types_default()).bool,

  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: (prop_types_default()).string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: (prop_types_default()).bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: (prop_types_default()).string,

  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: prop_types_default().oneOf(['dark']),

  /** @ignore */
  bsPrefix: (prop_types_default()).string,

  /** @ignore */
  variant: (prop_types_default()).string,

  /** @ignore */
  size: (prop_types_default()).string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */

const DropdownButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsxs)(src_Dropdown, {
  ref: ref,
  ...props,
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src_DropdownToggle, {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(src_DropdownMenu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent,
    variant: menuVariant,
    children: children
  })]
}));
DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = DropdownButton_propTypes;
/* harmony default export */ const src_DropdownButton = (DropdownButton);
;// CONCATENATED MODULE: ./src/Feedback.tsx




const Feedback_propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (prop_types_default()).string,

  /** Display feedback as a tooltip. */
  tooltip: (prop_types_default()).bool,
  as: (prop_types_default()).elementType
};
const Feedback = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
  ref: ref,
  className: classnames_default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = Feedback_propTypes;
/* harmony default export */ const src_Feedback = (Feedback);
;// CONCATENATED MODULE: ./src/FormContext.tsx
 // TODO

const FormContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({});
/* harmony default export */ const src_FormContext = (FormContext);
;// CONCATENATED MODULE: ./src/FormCheckInput.tsx






const FormCheckInput = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ const src_FormCheckInput = (FormCheckInput);
;// CONCATENATED MODULE: ./src/FormCheckLabel.tsx






const FormCheckLabel = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("label", { ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames_default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ const src_FormCheckLabel = (FormCheckLabel);
;// CONCATENATED MODULE: ./src/FormCheck.tsx












const FormCheck = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  const innerFormContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, src_FormCheckLabel);

  const input = /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormCheckInput, { ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: style,
      className: classnames_default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,jsx_runtime.jsx)(src_Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ const src_FormCheck = (Object.assign(FormCheck, {
  Input: src_FormCheckInput,
  Label: src_FormCheckLabel
}));
;// CONCATENATED MODULE: ./src/FormControl.tsx








const FormControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;

  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }

   false ? 0 : void 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames_default()(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ const src_FormControl = (Object.assign(FormControl, {
  Feedback: src_Feedback
}));
;// CONCATENATED MODULE: ./src/FormFloating.tsx

/* harmony default export */ const FormFloating = (createWithBsPrefix('form-floating'));
;// CONCATENATED MODULE: ./src/FormGroup.tsx




const FormGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormContext.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ const src_FormGroup = (FormGroup);
;// CONCATENATED MODULE: ./src/FormLabel.tsx








const FormLabel_defaultProps = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames_default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   false ? 0 : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Col, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0,jsx_runtime.jsx)(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabel_defaultProps;
/* harmony default export */ const src_FormLabel = (FormLabel);
;// CONCATENATED MODULE: ./src/FormRange.tsx






const FormRange = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("input", { ...props,
    type: "range",
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ const src_FormRange = (FormRange);
;// CONCATENATED MODULE: ./src/FormSelect.tsx






const FormSelect = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("select", { ...props,
    size: htmlSize,
    ref: ref,
    className: classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ const src_FormSelect = (FormSelect);
;// CONCATENATED MODULE: ./src/FormText.tsx




const FormText = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ const src_FormText = (FormText);
;// CONCATENATED MODULE: ./src/Switch.tsx



const Switch = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormCheck, { ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ const src_Switch = (Object.assign(Switch, {
  Input: src_FormCheck.Input,
  Label: src_FormCheck.Label
}));
;// CONCATENATED MODULE: ./src/FloatingLabel.tsx






const FloatingLabel = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(src_FormGroup, {
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ const src_FloatingLabel = (FloatingLabel);
;// CONCATENATED MODULE: ./src/Form.tsx














const Form_propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (prop_types_default()).any,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (prop_types_default()).bool,
  as: (prop_types_default()).elementType
};
const Form = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
  ref: ref,
  className: classnames_default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = Form_propTypes;
/* harmony default export */ const src_Form = (Object.assign(Form, {
  Group: src_FormGroup,
  Control: src_FormControl,
  Floating: FormFloating,
  Check: src_FormCheck,
  Switch: src_Switch,
  Label: src_FormLabel,
  Text: src_FormText,
  Range: src_FormRange,
  Select: src_FormSelect,
  FloatingLabel: src_FloatingLabel
}));
;// CONCATENATED MODULE: ./src/Container.tsx




const Container_defaultProps = {
  fluid: false
};
const Container = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = Container_defaultProps;
/* harmony default export */ const src_Container = (Container);
;// CONCATENATED MODULE: ./src/Image.tsx





const Image_propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: (prop_types_default()).string,

  /**
   * Sets image as fluid image.
   */
  fluid: (prop_types_default()).bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: (prop_types_default()).bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: (prop_types_default()).bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: (prop_types_default()).bool
};
const Image_defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
const Image_Image = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref,
    ...props,
    className: classnames_default()(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image_Image.displayName = 'Image';
Image_Image.defaultProps = Image_defaultProps;
/* harmony default export */ const src_Image = (Image_Image);
;// CONCATENATED MODULE: ./src/FigureImage.tsx




const FigureImage_defaultProps = {
  fluid: true
};
const FigureImage = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(src_Image, {
  ref: ref,
  ...props,
  className: classnames_default()(className, 'figure-img')
}));
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = Image_propTypes;
FigureImage.defaultProps = FigureImage_defaultProps;
/* harmony default export */ const src_FigureImage = (FigureImage);
;// CONCATENATED MODULE: ./src/FigureCaption.tsx

const FigureCaption = createWithBsPrefix('figure-caption', {
  Component: 'figcaption'
});
/* harmony default export */ const src_FigureCaption = (FigureCaption);
;// CONCATENATED MODULE: ./src/Figure.tsx



const Figure = createWithBsPrefix('figure', {
  Component: 'figure'
});
/* harmony default export */ const src_Figure = (Object.assign(Figure, {
  Image: src_FigureImage,
  Caption: src_FigureCaption
}));
;// CONCATENATED MODULE: ./src/InputGroup.tsx








const InputGroupText = createWithBsPrefix('input-group-text', {
  Component: 'span'
});

const InputGroupCheckbox = props => /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupText, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormCheckInput, {
    type: "checkbox",
    ...props
  })
});

const InputGroupRadio = props => /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupText, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(src_FormCheckInput, {
    type: "radio",
    ...props
  })
});

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group'); // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.

  const contextValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({}), []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')
    })
  });
});
InputGroup.displayName = 'InputGroup';
/* harmony default export */ const src_InputGroup = (Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
}));
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/TabContext.js

const TabContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
/* harmony default export */ const esm_TabContext = (TabContext);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/NavItem.js
const NavItem_excluded = ["as", "active", "eventKey"];

function NavItem_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}









function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_SelectableContext);
  const navContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_NavContext);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[dataAttr('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = useEventCallback(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((_ref, ref) => {
  let {
    as: Component = esm_Button,
    active,
    eventKey
  } = _ref,
      options = NavItem_objectWithoutPropertiesLoose(_ref, NavItem_excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[dataAttr('active')] = meta.isActive;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ const esm_NavItem = (NavItem);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Nav.js
const Nav_excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function Nav_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}











 // eslint-disable-next-line @typescript-eslint/no-empty-function

const Nav_noop = () => {};

const EVENT_KEY_ATTR = dataAttr('event-key');
const Nav = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = Nav_objectWithoutPropertiesLoose(_ref, Nav_excluded); // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect


  const forceUpdate = useForceUpdate();
  const needsRefocusRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const parentOnSelect = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_SelectableContext);
  const tabContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = esm_useMergedRefs(ref, listNode);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_NavContext.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || Nav_noop,
        getControllerId: getControllerId || Nav_noop
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const esm_Nav = (Object.assign(Nav, {
  Item: esm_NavItem
}));
;// CONCATENATED MODULE: ./src/ListGroupItem.tsx







const ListGroupItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'list-group-item');
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback(event => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    navItemProps.onClick(event);
  });

  if (disabled && props.tabIndex === undefined) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  } // eslint-disable-next-line no-nested-ternary


  const Component = as || (action ? props.href ? 'a' : 'button' : 'div');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: classnames_default()(className, bsPrefix, meta.isActive && 'active', disabled && 'disabled', variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = 'ListGroupItem';
/* harmony default export */ const src_ListGroupItem = (ListGroupItem);
;// CONCATENATED MODULE: ./src/ListGroup.tsx








const ListGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = 'div',
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'list-group');
  let horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : `horizontal-${horizontal}`;
  }

   false ? 0 : void 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Nav, {
    ref: ref,
    ...controlledProps,
    as: as,
    className: classnames_default()(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = 'ListGroup';
/* harmony default export */ const src_ListGroup = (Object.assign(ListGroup, {
  Item: src_ListGroupItem
}));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/scrollbarSize.js

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/activeElement.js

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  } // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>


  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/getScrollbarWidth.js
/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth(ownerDocument = document) {
  const window = ownerDocument.defaultView;
  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/ModalManager.js



const OPEN_DATA_ATTRIBUTE = dataAttr('modal-open');
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */

class ModalManager {
  constructor({
    ownerDocument,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument;
  }

  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }

  getElement() {
    return (this.ownerDocument || document).body;
  }

  setModalAttributes(_modal) {// For overriding
  }

  removeModalAttributes(_modal) {// For overriding
  }

  setContainerStyle(containerState) {
    const style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = `${parseInt(css(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    css(container, style);
  }

  reset() {
    [...this.modals].forEach(m => this.remove(m));
  }

  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }

  add(modal) {
    let modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

/* harmony default export */ const esm_ModalManager = (ModalManager);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/useWaitForDOMRef.js




const resolveContainerRef = (ref, document) => {
  var _ref;

  if (!canUseDOM) return null;
  if (ref == null) return (document || ownerDocument()).body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window = useWindow();
  const [resolvedRef, setRef] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(() => resolveContainerRef(ref, window == null ? void 0 : window.document));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Modal.js
const Modal_excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function Modal_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */



















let manager;

function getManager(window) {
  if (!manager) manager = new esm_ModalManager({
    ownerDocument: window == null ? void 0 : window.document
  });
  return manager;
}

function useModalManager(provided) {
  const window = useWindow();
  const modalManager = provided || getManager(window);
  const modal = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/(0,jsx_runtime.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = Modal_objectWithoutPropertiesLoose(_ref, Modal_excluded);

  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(!show);
  const lastFocusRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => modal, [modal]);

  if (canUseDOM && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = esm_listen(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = esm_listen(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !contains_contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current; // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)


      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !contains_contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const removeKeydownListenerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", Object.assign({}, dialogProps, {
    children: /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(children, {
      role: 'document'
    })
  }));

  if (Transition) {
    dialog = /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: dialog
    });
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = 'Modal';
/* harmony default export */ const esm_Modal = (Object.assign(Modal, {
  Manager: esm_ModalManager
}));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
;// CONCATENATED MODULE: ./src/BootstrapModalManager.tsx





const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

class BootstrapModalManager extends esm_ModalManager {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    css(element, {
      [prop]: `${parseFloat(css(element, prop)) + adjust}px`
    });
  }

  restore(prop, element) {
    const value = element.dataset[prop];

    if (value !== undefined) {
      delete element.dataset[prop];
      css(element, {
        [prop]: value
      });
    }
  }

  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, 'modal-open');
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }

  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, 'modal-open');
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
  }

}

let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
/* harmony default export */ const src_BootstrapModalManager = (BootstrapModalManager);
;// CONCATENATED MODULE: ./src/ModalBody.tsx

/* harmony default export */ const ModalBody = (createWithBsPrefix('modal-body'));
;// CONCATENATED MODULE: ./src/ModalContext.tsx

const ModalContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {}

});
/* harmony default export */ const src_ModalContext = (ModalContext);
;// CONCATENATED MODULE: ./src/ModalDialog.tsx




const ModalDialog = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === 'string' ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...props,
    ref: ref,
    className: classnames_default()(dialogClass, className, size && `${bsPrefix}-${size}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()(`${bsPrefix}-content`, contentClassName),
      children: children
    })
  });
});
ModalDialog.displayName = 'ModalDialog';
/* harmony default export */ const src_ModalDialog = (ModalDialog);
;// CONCATENATED MODULE: ./src/ModalFooter.tsx

/* harmony default export */ const ModalFooter = (createWithBsPrefix('modal-footer'));
;// CONCATENATED MODULE: ./src/AbstractModalHeader.tsx







const AbstractModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_ModalContext);
  const handleClick = useEventCallback(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    ...props,
    children: [children, closeButton && /*#__PURE__*/(0,jsx_runtime.jsx)(src_CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = AbstractModalHeader_defaultProps;
/* harmony default export */ const src_AbstractModalHeader = (AbstractModalHeader);
;// CONCATENATED MODULE: ./src/ModalHeader.tsx





const ModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const ModalHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_AbstractModalHeader, {
    ref: ref,
    ...props,
    className: classnames_default()(className, bsPrefix)
  });
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = ModalHeader_defaultProps;
/* harmony default export */ const src_ModalHeader = (ModalHeader);
;// CONCATENATED MODULE: ./src/ModalTitle.tsx


const ModalTitle_DivStyledAsH4 = divWithClassName('h4');
/* harmony default export */ const ModalTitle = (createWithBsPrefix('modal-title', {
  Component: ModalTitle_DivStyledAsH4
}));
;// CONCATENATED MODULE: ./src/Modal.tsx
























const Modal_defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: src_ModalDialog
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Fade, { ...props,
    timeout: null
  });
}

function BackdropTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Fade, { ...props,
    timeout: null
  });
}
/* eslint-enable no-use-before-define */


const Modal_Modal = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  style,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog,
  'aria-labelledby': ariaLabelledby,

  /* BaseModal props */
  show,
  animation,
  backdrop,
  keyboard,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  const [animateStaticModal, setAnimateStaticModal] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const waitingForMouseUpRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const ignoreBackdropClickRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const removeStaticModalAnimationRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = esm_useMergedRefs(ref, setModalRef);
  const handleHide = useEventCallback(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  const modalContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    return getSharedManager({
      isRTL
    });
  }

  function updateDialogStyle(node) {
    if (!canUseDOM) return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : undefined
    });
  }

  const handleWindowResize = useEventCallback(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(() => {
    esm_removeEventListener(window, 'resize', handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };

  const handleMouseUp = e => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };

  const handleStaticBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  const handleClick = e => {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide == null ? void 0 : onHide();
  };

  const handleEscapeKeyDown = e => {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in restart ui,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  const handleEnter = (node, isAppearing) => {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };

  const handleExit = node => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };

  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing); // FIXME: This should work even when animation is disabled.

    esm_addEventListener(window, 'resize', handleWindowResize);
  };

  const handleExited = node => {
    if (node) node.style.display = ''; // RHL removes it sometimes

    onExited == null ? void 0 : onExited(node); // FIXME: This should work even when animation is disabled.

    esm_removeEventListener(window, 'resize', handleWindowResize);
  };

  const renderBackdrop = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(backdropProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...backdropProps,
    className: classnames_default()(`${bsPrefix}-backdrop`, backdropClassName, !animation && 'show')
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = { ...style,
    ...modalStyle
  }; // Sets `display` always block when `animation` is false

  if (!animation) {
    baseModalStyle.display = 'block';
  }

  const renderDialog = dialogProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: classnames_default()(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`),
    onClick: backdrop ? handleClick : undefined,
    onMouseUp: handleMouseUp,
    "aria-labelledby": ariaLabelledby,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Dialog, { ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName,
      children: children
    })
  });

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_ModalContext.Provider, {
    value: modalContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Modal, {
      show: show,
      ref: mergedRef,
      backdrop: backdrop,
      container: container,
      keyboard: true // Always set true - see handleEscapeKeyDown
      ,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: onEntered,
      onExit: handleExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Modal_Modal.displayName = 'Modal';
Modal_Modal.defaultProps = Modal_defaultProps;
/* harmony default export */ const src_Modal = (Object.assign(Modal_Modal, {
  Body: ModalBody,
  Header: src_ModalHeader,
  Title: ModalTitle,
  Footer: ModalFooter,
  Dialog: src_ModalDialog,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
}));
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__(946);
;// CONCATENATED MODULE: ./src/NavItem.tsx

/* harmony default export */ const src_NavItem = (createWithBsPrefix('nav-item'));
;// CONCATENATED MODULE: ./src/NavLink.tsx







const NavLink_defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  as: Component = esm_Anchor,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames_default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = NavLink_defaultProps;
/* harmony default export */ const src_NavLink = (NavLink);
;// CONCATENATED MODULE: ./src/Nav.tsx












const Nav_defaultProps = {
  justify: false,
  fill: false
};
const Nav_Nav = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(NavbarContext);
  const cardHeaderContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(CardHeaderContext);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Nav, {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames_default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav_Nav.displayName = 'Nav';
Nav_Nav.defaultProps = Nav_defaultProps;
/* harmony default export */ const src_Nav = (Object.assign(Nav_Nav, {
  Item: src_NavItem,
  Link: src_NavLink
}));
;// CONCATENATED MODULE: ./src/NavbarBrand.tsx




const NavbarBrand = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-brand');
  const Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix)
  });
});
NavbarBrand.displayName = 'NavbarBrand';
/* harmony default export */ const src_NavbarBrand = (NavbarBrand);
;// CONCATENATED MODULE: ./src/NavbarCollapse.tsx






const NavbarCollapse = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-collapse');
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(NavbarContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Collapse, {
    in: !!(context && context.expanded),
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      className: bsPrefix,
      children: children
    })
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
/* harmony default export */ const src_NavbarCollapse = (NavbarCollapse);
;// CONCATENATED MODULE: ./src/NavbarToggle.tsx







const NavbarToggle_defaultProps = {
  label: 'Toggle navigation'
};
const NavbarToggle = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-toggler');
  const {
    onToggle,
    expanded
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(NavbarContext) || {};
  const handleClick = useEventCallback(e => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: classnames_default()(className, bsPrefix, !expanded && 'collapsed'),
    children: children || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = NavbarToggle_defaultProps;
/* harmony default export */ const src_NavbarToggle = (NavbarToggle);
;// CONCATENATED MODULE: ./src/OffcanvasBody.tsx

/* harmony default export */ const OffcanvasBody = (createWithBsPrefix('offcanvas-body'));
;// CONCATENATED MODULE: ./src/OffcanvasToggling.tsx







const OffcanvasToggling_defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const transitionStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(children, { ...innerProps,
      className: classnames_default()(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = OffcanvasToggling_defaultProps;
OffcanvasToggling.displayName = 'OffcanvasToggling';
/* harmony default export */ const src_OffcanvasToggling = (OffcanvasToggling);
;// CONCATENATED MODULE: ./src/OffcanvasHeader.tsx





const OffcanvasHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const OffcanvasHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-header');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_AbstractModalHeader, {
    ref: ref,
    ...props,
    className: classnames_default()(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
OffcanvasHeader.defaultProps = OffcanvasHeader_defaultProps;
/* harmony default export */ const src_OffcanvasHeader = (OffcanvasHeader);
;// CONCATENATED MODULE: ./src/OffcanvasTitle.tsx


const OffcanvasTitle_DivStyledAsH5 = divWithClassName('h5');
/* harmony default export */ const OffcanvasTitle = (createWithBsPrefix('offcanvas-title', {
  Component: OffcanvasTitle_DivStyledAsH5
}));
;// CONCATENATED MODULE: ./src/Offcanvas.tsx















const Offcanvas_defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: 'start'
};

function Offcanvas_DialogTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_OffcanvasToggling, { ...props
  });
}

function Offcanvas_BackdropTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Fade, { ...props
  });
}

const Offcanvas = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  children,
  'aria-labelledby': ariaLabelledby,
  placement,

  /* BaseModal props */
  show,
  backdrop,
  keyboard,
  scroll,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const modalManager = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
  const {
    onToggle
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(NavbarContext) || {};
  const handleHide = useEventCallback(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;

    if (scroll) {
      // Have to use a different modal manager since the shared
      // one handles overflow.
      if (!modalManager.current) modalManager.current = new src_BootstrapModalManager({
        handleContainerOverflow: false
      });
      return modalManager.current;
    }

    return getSharedManager();
  }

  const handleEnter = (node, ...args) => {
    if (node) node.style.visibility = 'visible';
    onEnter == null ? void 0 : onEnter(node, ...args);
  };

  const handleExited = (node, ...args) => {
    if (node) node.style.visibility = '';
    onExited == null ? void 0 : onExited(...args);
  };

  const renderBackdrop = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(backdropProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...backdropProps,
    className: classnames_default()(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);

  const renderDialog = dialogProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    ...props,
    className: classnames_default()(className, bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children: children
  });

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_ModalContext.Provider, {
    value: modalContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Modal, {
      show: show,
      ref: ref,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus && !scroll,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: handleHide,
      onEnter: handleEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: Offcanvas_DialogTransition,
      backdropTransition: Offcanvas_BackdropTransition,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Offcanvas.displayName = 'Offcanvas';
Offcanvas.defaultProps = Offcanvas_defaultProps;
/* harmony default export */ const src_Offcanvas = (Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: src_OffcanvasHeader,
  Title: OffcanvasTitle
}));
;// CONCATENATED MODULE: ./src/NavbarOffcanvas.tsx





const NavbarOffcanvas = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => {
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(NavbarContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Offcanvas, {
    ref: ref,
    show: !!(context != null && context.expanded),
    ...props
  });
});
NavbarOffcanvas.displayName = 'NavbarOffcanvas';
/* harmony default export */ const src_NavbarOffcanvas = (NavbarOffcanvas);
;// CONCATENATED MODULE: ./src/Navbar.tsx













const NavbarText = createWithBsPrefix('navbar-text', {
  Component: 'span'
});
const Navbar_defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
const Navbar = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand,
    variant,
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'nav',
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'navbar');
  const handleCollapse = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);

    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded
  }), [bsPrefix, expanded, onToggle]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContext.Provider, {
    value: navbarContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
      value: handleCollapse,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
        ref: ref,
        ...controlledProps,
        className: classnames_default()(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.defaultProps = Navbar_defaultProps;
Navbar.displayName = 'Navbar';
/* harmony default export */ const src_Navbar = (Object.assign(Navbar, {
  Brand: src_NavbarBrand,
  Collapse: src_NavbarCollapse,
  Offcanvas: src_NavbarOffcanvas,
  Text: NavbarText,
  Toggle: src_NavbarToggle
}));
;// CONCATENATED MODULE: ./src/NavDropdown.tsx







const NavDropdown = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  /* NavItem has no additional logic, it's purely presentational. Can set nav item class here to support "as" */
  const navItemPrefix = useBootstrapPrefix(undefined, 'nav-item');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(src_Dropdown, {
    ref: ref,
    ...props,
    className: classnames_default()(className, navItemPrefix),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src_Dropdown.Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: src_NavLink,
      children: title
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src_Dropdown.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent: rootCloseEvent,
      variant: menuVariant,
      children: children
    })]
  });
});
NavDropdown.displayName = 'NavDropdown';
/* harmony default export */ const src_NavDropdown = (Object.assign(NavDropdown, {
  Item: src_Dropdown.Item,
  ItemText: src_Dropdown.ItemText,
  Divider: src_Dropdown.Divider,
  Header: src_Dropdown.Header
}));
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Overlay.js










/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */

const Overlay = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = useCallbackRef();
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const mergedRef = esm_useMergedRefs(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(!props.show);
  const popper = esm_usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  const handleHidden = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  const mountOverlay = props.show || Transition && !exited;
  esm_useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });

  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
      in: props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: child
    });
  }

  return container ? /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
/* harmony default export */ const esm_Overlay = (Overlay);
;// CONCATENATED MODULE: ./src/PopoverHeader.tsx

/* harmony default export */ const PopoverHeader = (createWithBsPrefix('popover-header'));
;// CONCATENATED MODULE: ./src/PopoverBody.tsx

/* harmony default export */ const PopoverBody = (createWithBsPrefix('popover-body'));
;// CONCATENATED MODULE: ./src/helpers.ts

class BsPrefixComponent extends external_root_React_commonjs2_react_commonjs_react_amd_react_.Component {} // Need to use this instead of typeof Component to get proper type checking.

function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;

  if (placement === 'left') {
    bsDirection = isRTL ? 'end' : 'start';
  } else if (placement === 'right') {
    bsDirection = isRTL ? 'start' : 'end';
  }

  return bsDirection;
}
;// CONCATENATED MODULE: ./src/Popover.tsx








const Popover_defaultProps = {
  placement: 'right'
};
const Popover = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  placement,
  className,
  style,
  children,
  body,
  arrowProps,
  popper: _,
  show: _1,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'popover');
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: classnames_default()(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? /*#__PURE__*/(0,jsx_runtime.jsx)(PopoverBody, {
      children: children
    }) : children]
  });
});
Popover.defaultProps = Popover_defaultProps;
/* harmony default export */ const src_Popover = (Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
}));
;// CONCATENATED MODULE: ./src/useOverlayOffset.tsx



 // This is meant for internal use.
// This applies a custom offset to the overlay if it's a popover.

function useOverlayOffset() {
  const overlayRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const popoverClass = useBootstrapPrefix(undefined, 'popover');
  const offset = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    name: 'offset',
    options: {
      offset: () => {
        if (overlayRef.current && hasClass(overlayRef.current, popoverClass)) {
          return src_Popover.POPPER_OFFSET;
        }

        return [0, 0];
      }
    }
  }), [popoverClass]);
  return [overlayRef, [offset]];
}
;// CONCATENATED MODULE: ./src/Overlay.tsx









const Overlay_defaultProps = {
  transition: src_Fade,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;

  props.ref = ref.__wrapped || (ref.__wrapped = r => ref(safeFindDOMNode(r)));

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = r => aRef(safeFindDOMNode(r)));
}

const Overlay_Overlay = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  children: overlay,
  transition,
  popperConfig = {},
  ...outerProps
}, outerRef) => {
  const popperRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({});
  const [ref, modifiers] = useOverlayOffset();
  const mergedRef = esm_useMergedRefs(outerRef, ref);
  const actualTransition = transition === true ? src_Fade : transition || undefined;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Overlay, { ...outerProps,
    ref: mergedRef,
    popperConfig: { ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || [])
    },
    transition: actualTransition,
    children: (overlayProps, {
      arrowProps,
      placement,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;

      wrapRefs(overlayProps, arrowProps);
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false
      });
      if (typeof overlay === 'function') return overlay({ ...overlayProps,
        placement,
        show,
        ...(!transition && show && {
          className: 'show'
        }),
        popper,
        arrowProps
      });
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(overlay, { ...overlayProps,
        placement,
        arrowProps,
        popper,
        className: classnames_default()(overlay.props.className, !transition && show && 'show'),
        style: { ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay_Overlay.displayName = 'Overlay';
Overlay_Overlay.defaultProps = Overlay_defaultProps;
/* harmony default export */ const src_Overlay = (Overlay_Overlay);
;// CONCATENATED MODULE: ./src/OverlayTrigger.tsx













function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut( // eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !contains_contains(target, related)) {
    handler(...args);
  }
}

const OverlayTrigger_defaultProps = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger({
  trigger,
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf('auto') !== -1,
  ...props
}) {
  const triggerNodeRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const mergedRef = esm_useMergedRefs(triggerNodeRef, children.ref);
  const timeout = useTimeout();
  const hoverStateRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)('');
  const [show, setShow] = useUncontrolledProp(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== 'function' ? external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.only(children).props : {};

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const handleShow = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(() => {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(() => {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((...args) => {
    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  const handleMouseOut = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)((...args) => {
    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
     false ? 0 : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(children, triggerProps), /*#__PURE__*/(0,jsx_runtime.jsx)(src_Overlay, { ...props,
      show: show,
      onHide: handleHide,
      flip: flip,
      placement: placement,
      popperConfig: popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}

OverlayTrigger.defaultProps = OverlayTrigger_defaultProps;
/* harmony default export */ const src_OverlayTrigger = (OverlayTrigger);
;// CONCATENATED MODULE: ./src/PageItem.tsx
/* eslint-disable react/no-multi-comp */





const PageItem_defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
const PageItem = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  active,
  disabled,
  className,
  style,
  activeLabel,
  children,
  ...props
}, ref) => {
  const Component = active || disabled ? 'span' : esm_Anchor;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    ref: ref,
    style: style,
    className: classnames_default()(className, 'page-item', {
      active,
      disabled
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Component, {
      className: "page-link",
      disabled: disabled,
      ...props,
      children: [children, active && activeLabel && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.defaultProps = PageItem_defaultProps;
PageItem.displayName = 'PageItem';
/* harmony default export */ const src_PageItem = (PageItem);

function createButton(name, defaultValue, label = name) {
  function Button({
    children,
    ...props
  }) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(PageItem, { ...props,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        "aria-hidden": "true",
        children: children || defaultValue
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "visually-hidden",
        children: label
      })]
    });
  }

  Button.displayName = name;
  return Button;
}

const First = createButton('First', '«');
const Prev = createButton('Prev', '‹', 'Previous');
const Ellipsis = createButton('Ellipsis', '…', 'More');
const Next = createButton('Next', '›');
const Last = createButton('Last', '»');
;// CONCATENATED MODULE: ./src/Pagination.tsx






/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
const Pagination = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  size,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    ref: ref,
    ...props,
    className: classnames_default()(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
  });
});
Pagination.displayName = 'Pagination';
/* harmony default export */ const src_Pagination = (Object.assign(Pagination, {
  First: First,
  Prev: Prev,
  Ellipsis: Ellipsis,
  Item: src_PageItem,
  Next: Next,
  Last: Last
}));
;// CONCATENATED MODULE: ./src/usePlaceholder.ts



function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'placeholder');
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return { ...colProps,
    className: classnames_default()(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)
  };
}
;// CONCATENATED MODULE: ./src/PlaceholderButton.tsx




const PlaceholderButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_Button, { ...placeholderProps,
    ref: ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = 'PlaceholderButton';
/* harmony default export */ const src_PlaceholderButton = (PlaceholderButton);
;// CONCATENATED MODULE: ./src/Placeholder.tsx




const Placeholder = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  as: Component = 'span',
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...placeholderProps,
    ref: ref
  });
});
Placeholder.displayName = 'Placeholder';
/* harmony default export */ const src_Placeholder = (Object.assign(Placeholder, {
  Button: src_PlaceholderButton
}));
;// CONCATENATED MODULE: ./src/ProgressBar.tsx






const ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  const children = props[propName];

  if (!children) {
    return null;
  }

  let error = null;
  React.Children.forEach(children, child => {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */
    // eslint-disable-next-line @typescript-eslint/no-use-before-define


    const element = /*#__PURE__*/_jsx(ProgressBar, {});

    if (child.type === element.type) return;
    const childType = child.type;
    const childIdentifier = /*#__PURE__*/React.isValidElement(child) ? childType.displayName || childType.name || childType : child;
    error = new Error(`Children of ${componentName} can contain only ProgressBar ` + `components. Found ${childIdentifier}.`);
  });
  return error;
}

const ProgressBar_defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  visuallyHidden: false,
  striped: false
};

function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: ref,
    ...props,
    role: "progressbar",
    className: classnames_default()(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}

const ProgressBar = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  isChild,
  ...props
}, ref) => {
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, 'progress');

  if (isChild) {
    return renderProgressBar(props, ref);
  }

  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: ref,
    ...wrapperProps,
    className: classnames_default()(className, bsPrefix),
    children: children ? map(children, child => /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = ProgressBar_defaultProps;
/* harmony default export */ const src_ProgressBar = (ProgressBar);
;// CONCATENATED MODULE: ./src/Ratio.tsx




const Ratio_defaultProps = {
  aspectRatio: '1x1'
};

function toPercent(num) {
  if (num <= 0 || num > 100) return '100%';
  if (num < 1) return `${num * 100}%`;
  return `${num}%`;
}

const Ratio = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio,
  style,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'ratio');
  const isCustomRatio = typeof aspectRatio === 'number';
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: ref,
    ...props,
    style: { ...style,
      ...(isCustomRatio && {
        '--bs-aspect-ratio': toPercent(aspectRatio)
      })
    },
    className: classnames_default()(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_.Children.only(children)
  });
});
Ratio.defaultProps = Ratio_defaultProps;
/* harmony default export */ const src_Ratio = (Ratio);
;// CONCATENATED MODULE: ./src/Row.tsx




const Row_DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const Row = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  Row_DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
/* harmony default export */ const src_Row = (Row);
;// CONCATENATED MODULE: ./src/Spinner.tsx




const Spinner = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  variant,
  animation,
  size,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'spinner');
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = 'Spinner';
/* harmony default export */ const src_Spinner = (Spinner);
;// CONCATENATED MODULE: ./src/SplitButton.tsx








const SplitButton_propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: (prop_types_default()).string,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: (prop_types_default()).string,

  /** An `href` passed to the non-toggle Button */
  href: (prop_types_default()).string,

  /** An anchor `target` passed to the non-toggle Button */
  target: (prop_types_default()).string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: (prop_types_default()).func,

  /** The content of the non-toggle Button.  */
  title: (prop_types_default()).node.isRequired,

  /** A `type` passed to the non-toggle Button */
  type: (prop_types_default()).string,

  /** Disables both Buttons  */
  disabled: (prop_types_default()).bool,

  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: (prop_types_default()).string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: (prop_types_default()).bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: (prop_types_default()).string,

  /** @ignore */
  bsPrefix: (prop_types_default()).string,

  /** @ignore */
  variant: (prop_types_default()).string,

  /** @ignore */
  size: (prop_types_default()).string
};
const SplitButton_defaultProps = {
  toggleLabel: 'Toggle dropdown',
  type: 'button'
};
/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */

const SplitButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  id,
  bsPrefix,
  size,
  variant,
  title,
  type,
  toggleLabel,
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsxs)(src_Dropdown, {
  ref: ref,
  ...props,
  as: src_ButtonGroup,
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src_Button, {
    size: size,
    variant: variant,
    disabled: props.disabled,
    bsPrefix: bsPrefix,
    href: href,
    target: target,
    onClick: onClick,
    type: type,
    children: title
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(src_Dropdown.Toggle, {
    split: true,
    id: id,
    size: size,
    variant: variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(src_Dropdown.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent,
    children: children
  })]
}));
SplitButton.propTypes = SplitButton_propTypes;
SplitButton.defaultProps = SplitButton_defaultProps;
SplitButton.displayName = 'SplitButton';
/* harmony default export */ const src_SplitButton = (SplitButton);
;// CONCATENATED MODULE: ./src/SSRProvider.ts

/* harmony default export */ const src_SSRProvider = (SSRProvider);
;// CONCATENATED MODULE: ./src/createUtilityClasses.ts

function responsivePropType(propType) {
  return PropTypes.oneOfType([propType, PropTypes.shape({
    xs: propType,
    sm: propType,
    md: propType,
    lg: propType,
    xl: propType,
    xxl: propType
  })]);
}
const createUtilityClasses_DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
function createUtilityClassName(utilityValues) {
  const classes = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === 'object') {
        createUtilityClasses_DEVICE_SIZES.forEach(brkPoint => {
          const bpValue = utilValue[brkPoint];

          if (bpValue != null) {
            const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });
  return classes;
}
;// CONCATENATED MODULE: ./src/Stack.tsx





const Stack = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  as: Component = 'div',
  bsPrefix,
  className,
  direction,
  gap,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, direction === 'horizontal' ? 'hstack' : 'vstack');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix, ...createUtilityClassName({
      gap
    }))
  });
});
Stack.displayName = 'Stack';
/* harmony default export */ const src_Stack = (Stack);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/NoopTransition.js


function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(inProp);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

/* harmony default export */ const esm_NoopTransition = (NoopTransition);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/TabPanel.js
const TabPanel_excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit"],
      _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
      _excluded3 = ["as"];

function TabPanel_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}







function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit
  } = _ref,
      props = TabPanel_objectWithoutPropertiesLoose(_ref, TabPanel_excluded);

  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(esm_TabContext);
  if (!context) return [props, {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit
  }];

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = TabPanel_objectWithoutPropertiesLoose(context, _excluded2);

  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit
  }];
}
const TabPanel = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
    as: Component = 'div'
  } = _ref2,
      props = TabPanel_objectWithoutPropertiesLoose(_ref2, _excluded3);

  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = esm_NoopTransition
  }] = useTabPanel(props); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          role: "tabpanel",
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';
/* harmony default export */ const esm_TabPanel = (TabPanel);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Tabs.js









const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = useSSRSafeId(userId);
  const generateChildId = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TabContext.Provider, {
    value: tabContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
      value: onSelect || null,
      children: children
    })
  });
};

Tabs.Panel = esm_TabPanel;
/* harmony default export */ const esm_Tabs = (Tabs);
;// CONCATENATED MODULE: ./src/getTabTransitionComponent.ts

function getTabTransitionComponent(transition) {
  if (typeof transition === 'boolean') {
    return transition ? src_Fade : undefined;
  }

  return transition;
}
;// CONCATENATED MODULE: ./src/TabContainer.tsx





const TabContainer = ({
  transition,
  ...props
}) => /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Tabs, { ...props,
  transition: getTabTransitionComponent(transition)
});

TabContainer.displayName = 'TabContainer';
/* harmony default export */ const src_TabContainer = (TabContainer);
;// CONCATENATED MODULE: ./src/TabContent.tsx

/* harmony default export */ const TabContent = (createWithBsPrefix('tab-content'));
;// CONCATENATED MODULE: ./src/TabPane.tsx









const TabPane = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = esm_NoopTransition
  }] = useTabPanel({ ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'tab-pane'); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...rest,
          ref: ref,
          className: classnames_default()(className, prefix, isActive && 'active')
        })
      })
    })
  });
});
TabPane.displayName = 'TabPane';
/* harmony default export */ const src_TabPane = (TabPane);
;// CONCATENATED MODULE: ./src/Tab.tsx








/* eslint-disable react/no-unused-prop-types */
const Tab_propTypes = {
  eventKey: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),

  /**
   * Content for the tab title.
   */
  title: (prop_types_default()).node.isRequired,

  /**
   * The disabled state of the tab.
   */
  disabled: (prop_types_default()).bool,

  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: (prop_types_default()).string
};

const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly'); // Needed otherwise docs error out.

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
};

Tab.propTypes = Tab_propTypes;
/* harmony default export */ const src_Tab = (Object.assign(Tab, {
  Container: src_TabContainer,
  Content: TabContent,
  Pane: src_TabPane
}));
;// CONCATENATED MODULE: ./src/Table.tsx




const Table = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'table');
  const classes = classnames_default()(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);

  const table = /*#__PURE__*/(0,jsx_runtime.jsx)("table", { ...props,
    className: classes,
    ref: ref
  });

  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;

    if (typeof responsive === 'string') {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: responsiveClass,
      children: table
    });
  }

  return table;
});
/* harmony default export */ const src_Table = (Table);
;// CONCATENATED MODULE: ./src/Tabs.tsx












const Tabs_defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, child => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    id
  } = child.props;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_NavItem, {
    as: "li",
    role: "presentation",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src_NavLink, {
      as: "button",
      type: "button",
      eventKey: eventKey,
      disabled: disabled,
      id: id,
      className: tabClassName,
      children: title
    })
  });
}

const Tabs_Tabs = props => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_Tabs, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src_Nav, { ...controlledProps,
      role: "tablist",
      as: "ul",
      children: map(children, renderTab)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TabContent, {
      children: map(children, child => {
        const childProps = { ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(src_TabPane, { ...childProps
        });
      })
    })]
  });
};

Tabs_Tabs.defaultProps = Tabs_defaultProps;
Tabs_Tabs.displayName = 'Tabs';
/* harmony default export */ const src_Tabs = (Tabs_Tabs);
;// CONCATENATED MODULE: ./src/ToastFade.tsx




const ToastFade_fadeStyles = {
  [ENTERING]: 'showing',
  [EXITING]: 'showing show'
};
const ToastFade = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(src_Fade, { ...props,
  ref: ref,
  transitionClasses: ToastFade_fadeStyles
}));
ToastFade.displayName = 'ToastFade';
/* harmony default export */ const src_ToastFade = (ToastFade);
;// CONCATENATED MODULE: ./src/ToastContext.tsx

const ToastContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {}

});
/* harmony default export */ const src_ToastContext = (ToastContext);
;// CONCATENATED MODULE: ./src/ToastHeader.tsx









const ToastHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};
const ToastHeader = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  closeLabel,
  closeVariant,
  closeButton,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast-header');
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(src_ToastContext);
  const handleClick = useEventCallback(e => {
    context == null ? void 0 : context.onClose == null ? void 0 : context.onClose(e);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    ...props,
    className: classnames_default()(bsPrefix, className),
    children: [children, closeButton && /*#__PURE__*/(0,jsx_runtime.jsx)(src_CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = ToastHeader_defaultProps;
/* harmony default export */ const src_ToastHeader = (ToastHeader);
;// CONCATENATED MODULE: ./src/ToastBody.tsx

/* harmony default export */ const ToastBody = (createWithBsPrefix('toast-body'));
;// CONCATENATED MODULE: ./src/Toast.tsx










const Toast = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = src_ToastFade,
  show = true,
  animation = true,
  delay = 5000,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  const delayRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(delay);
  const onCloseRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(onClose);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout();
  const autohideToast = !!(autohide && show);
  const autohideFunc = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);

  const toast = /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...props,
    ref: ref,
    className: classnames_default()(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_ToastContext.Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = 'Toast';
/* harmony default export */ const src_Toast = (Object.assign(Toast, {
  Body: ToastBody,
  Header: src_ToastHeader
}));
;// CONCATENATED MODULE: ./src/ToastContainer.tsx




const positionClasses = {
  'top-start': 'top-0 start-0',
  'top-center': 'top-0 start-50 translate-middle-x',
  'top-end': 'top-0 end-0',
  'middle-start': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-end': 'top-50 end-0 translate-middle-y',
  'bottom-start': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50 translate-middle-x',
  'bottom-end': 'bottom-0 end-0'
};
const ToastContainer = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  position,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast-container');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(bsPrefix, position && `position-absolute ${positionClasses[position]}`, className)
  });
});
ToastContainer.displayName = 'ToastContainer';
/* harmony default export */ const src_ToastContainer = (ToastContainer);
;// CONCATENATED MODULE: ./src/ToggleButton.tsx








const ToggleButton_noop = () => undefined;

const ToggleButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'btn-check');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      className: bsPrefix,
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || ToggleButton_noop,
      id: id
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src_Button, { ...props,
      ref: ref,
      className: classnames_default()(className, disabled && 'disabled'),
      type: undefined,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = 'ToggleButton';
/* harmony default export */ const src_ToggleButton = (ToggleButton);
;// CONCATENATED MODULE: ./src/ToggleButtonGroup.tsx








const ToggleButtonGroup_defaultProps = {
  type: 'radio',
  vertical: false
};
const ToggleButtonGroup = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef((props, ref) => {
  const {
    children,
    type,
    name,
    value,
    onChange,
    ...controlledProps
  } = useUncontrolled(props, {
    value: 'onChange'
  });

  const getValues = () => value == null ? [] : [].concat(value);

  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }

    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;

    if (type === 'radio') {
      if (!isActive && onChange) onChange(inputVal, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(n => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };

  !(type !== 'radio' || !!name) ?  false ? 0 : browser_default()(false) : void 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_ButtonGroup, { ...controlledProps,
    ref: ref,
    children: map(children, child => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;

      const handler = e => handleToggle(childVal, e);

      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: src_createChainedFunction(childOnChange, handler)
      });
    })
  });
});
ToggleButtonGroup.defaultProps = ToggleButtonGroup_defaultProps;
/* harmony default export */ const src_ToggleButtonGroup = (Object.assign(ToggleButtonGroup, {
  Button: src_ToggleButton
}));
;// CONCATENATED MODULE: ./src/Tooltip.tsx






const Tooltip_defaultProps = {
  placement: 'right'
};
const Tooltip = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef(({
  bsPrefix,
  placement,
  className,
  style,
  children,
  arrowProps,
  popper: _,
  show: _2,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'tooltip');
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: classnames_default()(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children: children
    })]
  });
});
Tooltip.defaultProps = Tooltip_defaultProps;
Tooltip.displayName = 'Tooltip';
/* harmony default export */ const src_Tooltip = (Tooltip);
;// CONCATENATED MODULE: ./src/index.tsx



















































































})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});